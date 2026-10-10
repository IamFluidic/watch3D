import * as THREE from 'three';
import { create3DWatch } from './watchModelBuilder.js';
import { WatchExplodedController } from './watchExplodedController.js';
import { WATCH_EDITIONS } from '../data/watchSpecs.js';
import { WatchHotspotsManager } from './watchHotspots.js';

// =========================================================================
// 🔍 3D WATCH SIZE & SCALE CONFIGURATION
// Adjust this single number to make the watch larger or smaller across the entire site:
// - 1.00 = 100% (Original default size)
// - 0.85 = 85%  (Refined, a bit smaller — gives more breathing room)
// - 0.78 = 78%  (Compact sizing)
// =========================================================================
export const WATCH_GLOBAL_SCALE = 0.85;

function createStudioEnvironment(renderer) {
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();

  const envScene = new THREE.Scene();
  envScene.background = new THREE.Color(0x111318);

  // Large overhead softbox (horizontal sheen on glass and steel)
  const softbox = new THREE.Mesh(
    new THREE.PlaneGeometry(16, 16),
    new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })
  );
  softbox.position.set(0, 12, 0);
  softbox.rotation.x = Math.PI / 2;
  envScene.add(softbox);

  // Left strip softbox (bright metallic linear highlights along case bevels)
  const stripLeft = new THREE.Mesh(
    new THREE.PlaneGeometry(3, 20),
    new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })
  );
  stripLeft.position.set(-9, 2, 5);
  stripLeft.rotation.y = Math.PI / 3;
  envScene.add(stripLeft);

  // Right rim strip (cool blue-tinted fill highlight)
  const stripRight = new THREE.Mesh(
    new THREE.PlaneGeometry(3, 20),
    new THREE.MeshBasicMaterial({ color: 0xd6e4ff, side: THREE.DoubleSide })
  );
  stripRight.position.set(9, 2, -5);
  stripRight.rotation.y = -Math.PI / 3;
  envScene.add(stripRight);

  // Front camera ring light (catches diamond indices and hands)
  const ringLight = new THREE.Mesh(
    new THREE.RingGeometry(2.5, 6, 32),
    new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })
  );
  ringLight.position.set(0, 0, 12);
  envScene.add(ringLight);

  const envTexture = pmremGenerator.fromScene(envScene, 0.04).texture;
  pmremGenerator.dispose();
  return envTexture;
}

const WATERMARK_CHAPTERS = {
  'story-identity': {
    num: '01',
    eyebrow: 'METALLURGIC FORGING',
    title: 'BRONZE',
    subtitle: 'ANTIQUE SCULPTED FLANKS',
    telemetry: 'DAMASCUS STEEL BEZEL • HAND-ENGRAVED CONSTELLATIONS'
  },
  'story-dial': {
    num: '02',
    eyebrow: 'QUAD COMPLICATIONS SKELETON',
    title: 'QUAD-DIAL',
    subtitle: 'FOUR ASTRONOMICAL CIRCLES',
    telemetry: 'LAPIS HOURS • MINUTE RING • SUN & MOON • 60s TOURBILLON'
  },
  'story-movement': {
    num: '03',
    eyebrow: 'PLANE BACKPLATE ARCHITECTURE',
    title: 'CASEBACK',
    subtitle: 'SOLID HERMETIC SHIELD',
    telemetry: '10 ATM / 100M WATER RESISTANT • THREADED CASEBACK'
  },
  'story-exploded': {
    num: '04',
    eyebrow: 'DECONSTRUCTED CALIBRE A3016',
    title: 'CALIBRE',
    subtitle: '7 MODULAR ASSEMBLIES',
    telemetry: 'EXPANDED SUSPENSION • CASCADING SKELETONIZED GEAR TRAIN'
  },
  'story-engine': {
    num: '05',
    eyebrow: 'CALIBRE A3016 ISOLATION',
    title: 'ENGINE',
    subtitle: 'FLYING TOURBILLON HEART',
    telemetry: 'SAPPHIRE MAINPLATE • 26 SYNTHETIC RUBIES • 4 HZ ESCAPEMENT'
  },
  'story-rotor': {
    num: '06',
    eyebrow: 'ERGONOMIC COLD-FORGED DRAPE',
    title: 'BRACELET',
    subtitle: '3-LINK ARTICULATED STEEL',
    telemetry: '20MM TAPERED • BUTTERFLY DEPLOYANT MICRO-ADJUST'
  }
};

export function initWatchViewer(containerId, hotspotsContainerId = 'watch-hotspots-overlay') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const width = container.clientWidth || window.innerWidth;
  const height = container.clientHeight || window.innerHeight;

  // Scene & Camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
  camera.position.set(0, 0, 11);

  // WebGL Renderer with High-Precision Shadow & Tone Mapping
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
    logarithmicDepthBuffer: true
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.20; // Balanced exposure — reveals warm antique bronze, deep lapis, and rich dark slate

  // Set Studio Environment Map for Realistic PBR Specular Reflections
  const studioEnv = createStudioEnvironment(renderer);
  scene.environment = studioEnv;

  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  // Lighting System: Studio Softboxes (tuned for soft diffused macro lighting and deep PBR contrast)
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
  scene.add(ambientLight);

  // Soft diffused front light onto dial face — highlights gold subdials and lapis depth without washing out dark plate
  const dialFaceLight = new THREE.DirectionalLight(0xfff7ed, 0.85);
  dialFaceLight.position.set(0, 2, 9);
  scene.add(dialFaceLight);

  // Warm studio key light
  const keyLight = new THREE.DirectionalLight(0xffedd5, 1.8);
  keyLight.position.set(6, 10, 8);
  keyLight.castShadow = true;
  scene.add(keyLight);

  // Cool soft fill light to give deep metallic multi-tone depth
  const fillLight = new THREE.DirectionalLight(0xcfd8e3, 0.75);
  fillLight.position.set(-8, -3, 5);
  scene.add(fillLight);

  // Studio rim light — punches out the case silhouette and bezel edges
  const rimLight = new THREE.DirectionalLight(0xffffff, 2.8);
  rimLight.position.set(0, 10, -7);
  scene.add(rimLight);

  // Secondary low-angle rim to catch case and crown chamfers
  const rimLight2 = new THREE.DirectionalLight(0xd0e4ff, 1.4);
  rimLight2.position.set(-6, -8, -4);
  scene.add(rimLight2);

  // Soft Ground Shadow
  const shadowPlaneGeom = new THREE.PlaneGeometry(16, 16);
  const shadowPlaneMat = new THREE.ShadowMaterial({ opacity: 0.18 });
  const shadowPlane = new THREE.Mesh(shadowPlaneGeom, shadowPlaneMat);
  shadowPlane.position.z = -2.2;
  shadowPlane.receiveShadow = true;
  scene.add(shadowPlane);

  // Root Watch Anchor
  let currentEdition = WATCH_EDITIONS[0];
  let previewActive = false;
  const watchAnchor = new THREE.Group();
  watchAnchor.scale.set(WATCH_GLOBAL_SCALE, WATCH_GLOBAL_SCALE, WATCH_GLOBAL_SCALE);
  scene.add(watchAnchor);

  // Live scale tester in browser console: run `setWatchScale(0.8)` in DevTools to preview any scale instantly!
  if (typeof window !== 'undefined') {
    window.setWatchScale = (scale) => {
      watchAnchor.scale.set(scale, scale, scale);
      console.log(`[Watch Scale] Updated to: ${scale} (e.g., 0.85 = 85%, 1.0 = 100%)`);
    };
  }

  // Build Initial 3D Watch (Steel Edition default)
  const watchInstance = create3DWatch(currentEdition);
  watchAnchor.add(watchInstance.root);

  // Flowing Celestial Stardust Particle Ribbons
  const particleCount = 280;
  const particleGeom = new THREE.BufferGeometry();
  const particlePos = new Float32Array(particleCount * 3);
  const particleColors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const angle = (i / particleCount) * Math.PI * 6;
    const radius = 1.4 + (i / particleCount) * 1.8;
    const z = (Math.random() - 0.5) * 1.6;
    particlePos[i * 3]     = Math.cos(angle) * radius + (Math.random() - 0.5) * 0.4;
    particlePos[i * 3 + 1] = Math.sin(angle) * radius + (Math.random() - 0.5) * 0.4;
    particlePos[i * 3 + 2] = z;

    const isGold = Math.random() > 0.4;
    particleColors[i * 3]     = isGold ? 0.96 : 0.22;
    particleColors[i * 3 + 1] = isGold ? 0.72 : 0.74;
    particleColors[i * 3 + 2] = isGold ? 0.25 : 0.98;
  }
  particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
  particleGeom.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 0.042,
    vertexColors: true,
    transparent: true,
    opacity: 0.38,
    blending: THREE.AdditiveBlending
  });
  const stardustParticles = new THREE.Points(particleGeom, particleMat);
  watchAnchor.add(stardustParticles);

  // Initialize Exploded View Controller — passes layers + all individual explodable items
  // (4 clock circle subdials + every gear in all sub-layers with full 3D X,Y,Z offsets)
  const explodedController = new WatchExplodedController(watchInstance.layers, watchInstance.explodableItems);
  let manualExplode = false;
  
  // Initialize 3D Hotspot Manager
  // Hotspots are HIDDEN during scrollytelling; shown only in free-rotate finale
  const hotspotsManager = new WatchHotspotsManager(hotspotsContainerId, (pinData) => {
    if (scrollProgress >= 0.82) {
      // Only respond to pin clicks during free-rotate zone
      targetRotX = pinData.targetRotX;
      targetRotY = pinData.targetRotY;
      targetZoom = pinData.zoom;
      hasUserRotatedInFinale = true;
    }
  });
  hotspotsManager.setVisible(false); // start hidden

  // Interactive Drag & Free Orbit Controls
  let isDragging = false;
  let prevX = 0;
  let prevY = 0;
  let currentZoom = 11;
  let targetZoom = 9.8;
  let rotX = 0.08;
  let rotY = 0.04;
  let targetRotX = 0.08;
  let targetRotY = 0.04;
  let posX = 0;
  let targetPosX = 0;
  let isNightMode = false;
  let scrollProgress = 0;
  let rotorAngle = 0;
  let rotorVelocity = 0;
  let hasUserRotatedInFinale = false;
  let activeWatermarkChapter = null;

  container.style.cursor = 'grab';

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    prevX = e.clientX;
    prevY = e.clientY;
    container.style.cursor = 'grabbing';
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    container.style.cursor = 'grab';
  });

  window.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;

      targetRotY += dx * 0.008;
      targetRotX = Math.max(-1.4, Math.min(1.4, targetRotX + dy * 0.008));

      if (scrollProgress >= 0.82) {
        hasUserRotatedInFinale = true;
      }

      rotorVelocity += (Math.abs(dx) + Math.abs(dy)) * 0.04;

      prevX = e.clientX;
      prevY = e.clientY;
    }
  });

  // Wheel zoom in completed studio
  container.addEventListener('wheel', (e) => {
    if (scrollProgress >= 0.82) {
      targetZoom = Math.min(Math.max(targetZoom + e.deltaY * 0.004, 7.5), 15);
    }
  }, { passive: true });

  // Touch Support
  container.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      prevX = e.touches[0].clientX;
      prevY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (isDragging && e.touches.length === 1) {
      const dx = e.touches[0].clientX - prevX;
      const dy = e.touches[0].clientY - prevY;

      targetRotY += dx * 0.008;
      targetRotX += dy * 0.008;

      if (scrollProgress >= 0.82) {
        hasUserRotatedInFinale = true;
      }

      rotorVelocity += (Math.abs(dx) + Math.abs(dy)) * 0.04;

      prevX = e.touches[0].clientX;
      prevY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Global Scroll Listener for Choreography
  // NOTE: HTML id is 'scrolly-narrative' (not 'scrolly-narrative-container')
  const narrativeContainer = document.getElementById('scrolly-narrative');
  function onScroll() {
    const containerHeight = narrativeContainer ? narrativeContainer.offsetHeight : document.documentElement.scrollHeight;
    const maxScroll = Math.max(containerHeight - window.innerHeight, 1);
    scrollProgress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);

    // Active narrative steps for 60fps luxury narrative with dedicated title showcase space
    const isLaunch = scrollProgress < 0.04;
    const isTitlePhase = scrollProgress >= 0.04 && scrollProgress < 0.12;
    const isIdentity = scrollProgress >= 0.12 && scrollProgress < 0.24;
    const isDial = scrollProgress >= 0.24 && scrollProgress < 0.36;
    const isMovement = scrollProgress >= 0.36 && scrollProgress < 0.48;
    const isExploded = scrollProgress >= 0.48 && scrollProgress < 0.60;
    const isEngine = scrollProgress >= 0.60 && scrollProgress < 0.72;
    const isBracelet = scrollProgress >= 0.72 && scrollProgress < 0.86;
    const isCompleted = scrollProgress >= 0.86;

    document.getElementById('story-launch')?.classList.toggle('is--active', isLaunch);
    document.getElementById('story-title')?.classList.toggle('is--active', isTitlePhase);
    document.getElementById('story-identity')?.classList.toggle('is--active', isIdentity);
    document.getElementById('story-dial')?.classList.toggle('is--active', isDial);
    document.getElementById('story-movement')?.classList.toggle('is--active', isMovement);
    document.getElementById('story-exploded')?.classList.toggle('is--active', isExploded);
    document.getElementById('story-engine')?.classList.toggle('is--active', isEngine);
    document.getElementById('story-rotor')?.classList.toggle('is--active', isBracelet);
    document.getElementById('story-studio')?.classList.toggle('is--active', isCompleted);

    document.body.classList.toggle('step-identity-active', isIdentity);
    document.body.classList.toggle('step-dial-active', isDial);
    document.body.classList.toggle('step-movement-active', isMovement);
    document.body.classList.toggle('step-exploded-active', isExploded);
    document.body.classList.toggle('step-engine-active', isEngine);
    document.body.classList.toggle('step-bracelet-active', isBracelet);
    document.body.classList.toggle('story-completed', isCompleted);

    // Background ghost text opacity (ALUNA / A3016 editorial outline text)
    // Fades from solid → subtle as user begins scrolling, then dims further
    let bgNameOpacity = 0.90;

    if (scrollProgress < 0.02) {
      bgNameOpacity = 0.90;
    } else if (scrollProgress >= 0.02 && scrollProgress < 0.05) {
      const p = (scrollProgress - 0.02) / 0.03;
      bgNameOpacity = 0.90 * (1 - p) + 0.10 * p;
    } else if (scrollProgress >= 0.05 && scrollProgress < 0.16) {
      bgNameOpacity = 0.10; // dim while curtain is covering the screen
    } else {
      bgNameOpacity = 0.08;
    }

    document.documentElement.style.setProperty('--bg-name-opacity', `${bgNameOpacity.toFixed(3)}`);

    // ─── CINEMATIC CURTAIN ─────────────────────────────────────────────────
    // Phase A  0.04 → 0.07 : black panel sweeps IN from right (100% → 0%)
    // Phase B  0.07 → 0.13 : curtain holds at 0% — title is white on black
    // Phase C  0.13 → 0.16 : curtain sweeps OUT to left  (0% → -100%)
    // Outside these ranges : curtain is fully off screen
    let curtainX = 100; // default: off to the right
    let isCurtainActive = false;

    if (scrollProgress < 0.04) {
      curtainX = 100;
    } else if (scrollProgress >= 0.04 && scrollProgress < 0.07) {
      const p = (scrollProgress - 0.04) / 0.03;
      const ease = 1 - Math.pow(1 - p, 3); // ease-out cubic: fast then slows to a stop
      curtainX = (1 - ease) * 100;
      isCurtainActive = ease > 0.1;
    } else if (scrollProgress >= 0.07 && scrollProgress < 0.13) {
      curtainX = 0; // fully covering
      isCurtainActive = true;
    } else if (scrollProgress >= 0.13 && scrollProgress < 0.16) {
      const p = (scrollProgress - 0.13) / 0.03;
      const ease = Math.pow(p, 2.2); // ease-in quad: starts slow then accelerates away
      curtainX = -ease * 100;
      isCurtainActive = p < 0.9;
    } else {
      curtainX = -100; // off to the left, completely gone
    }

    document.documentElement.style.setProperty('--curtain-x', `${curtainX.toFixed(2)}%`);
    document.body.classList.toggle('curtain--active', isCurtainActive);
    // ──────────────────────────────────────────────────────────────────────

    // Calculate scroll-driven vertical motion for each feature:
    // Slowly comes from bottom (+28vh -> 0vh), rests comfortably at center (0vh), then slowly moves to top (0vh -> -28vh)
    function calcFeatureMotion(progress, enterStart, enterEnd, exitStart, exitEnd) {
      if (progress < enterStart) {
        return { y: 28, opacity: 0 };
      } else if (progress >= enterStart && progress < enterEnd) {
        const p = (progress - enterStart) / (enterEnd - enterStart);
        const ease = Math.sin(p * Math.PI * 0.5); // Smooth sine ease-in: slow and gentle entrance
        return {
          y: (1 - ease) * 28,
          opacity: ease
        };
      } else if (progress >= enterEnd && progress < exitStart) {
        return { y: 0, opacity: 1 };
      } else if (progress >= exitStart && progress < exitEnd) {
        const p = (progress - exitStart) / (exitEnd - exitStart);
        const ease = Math.sin(p * Math.PI * 0.5); // Smooth sine ease-out: slow and gentle exit
        return {
          y: -ease * 28,
          opacity: Math.max(1 - ease, 0)
        };
      } else {
        return { y: -28, opacity: 0 };
      }
    }

    const feat1 = calcFeatureMotion(scrollProgress, 0.13, 0.16, 0.21, 0.24);
    const feat2 = calcFeatureMotion(scrollProgress, 0.25, 0.28, 0.33, 0.36);
    const feat3 = calcFeatureMotion(scrollProgress, 0.37, 0.40, 0.45, 0.48);
    const feat4 = calcFeatureMotion(scrollProgress, 0.49, 0.52, 0.57, 0.60);
    const feat4b = calcFeatureMotion(scrollProgress, 0.61, 0.64, 0.69, 0.72);
    const feat5 = calcFeatureMotion(scrollProgress, 0.73, 0.76, 0.82, 0.86);

    document.documentElement.style.setProperty('--feat1-y', `${feat1.y.toFixed(2)}vh`);
    document.documentElement.style.setProperty('--feat1-opacity', `${feat1.opacity.toFixed(3)}`);

    document.documentElement.style.setProperty('--feat2-y', `${feat2.y.toFixed(2)}vh`);
    document.documentElement.style.setProperty('--feat2-opacity', `${feat2.opacity.toFixed(3)}`);

    document.documentElement.style.setProperty('--feat3-y', `${feat3.y.toFixed(2)}vh`);
    document.documentElement.style.setProperty('--feat3-opacity', `${feat3.opacity.toFixed(3)}`);

    document.documentElement.style.setProperty('--feat4-y', `${feat4.y.toFixed(2)}vh`);
    document.documentElement.style.setProperty('--feat4-opacity', `${feat4.opacity.toFixed(3)}`);

    document.documentElement.style.setProperty('--feat4b-y', `${feat4b.y.toFixed(2)}vh`);
    document.documentElement.style.setProperty('--feat4b-opacity', `${feat4b.opacity.toFixed(3)}`);

    document.documentElement.style.setProperty('--feat5-y', `${feat5.y.toFixed(2)}vh`);
    document.documentElement.style.setProperty('--feat5-opacity', `${feat5.opacity.toFixed(3)}`);

    // Dynamic Chapter Watermark Motion (Glides vertically past up like 60fps)
    let currentChapter = null;
    let chapterP = 0;

    if (scrollProgress >= 0.12 && scrollProgress < 0.24) {
      currentChapter = 'story-identity';
      chapterP = (scrollProgress - 0.12) / 0.12;
    } else if (scrollProgress >= 0.24 && scrollProgress < 0.36) {
      currentChapter = 'story-dial';
      chapterP = (scrollProgress - 0.24) / 0.12;
    } else if (scrollProgress >= 0.36 && scrollProgress < 0.48) {
      currentChapter = 'story-movement';
      chapterP = (scrollProgress - 0.36) / 0.12;
    } else if (scrollProgress >= 0.48 && scrollProgress < 0.60) {
      currentChapter = 'story-exploded';
      chapterP = (scrollProgress - 0.48) / 0.12;
    } else if (scrollProgress >= 0.60 && scrollProgress < 0.72) {
      currentChapter = 'story-engine';
      chapterP = (scrollProgress - 0.60) / 0.12;
    } else if (scrollProgress >= 0.72 && scrollProgress < 0.86) {
      currentChapter = 'story-rotor';
      chapterP = (scrollProgress - 0.72) / 0.14;
    }

    let watermarkX = 0;
    let watermarkY = 0;
    let watermarkOpacity = 0;

    if (currentChapter) {
      // Option 1: Dedicated Right Horizon
      // Anchored permanently on the right flank (watermarkX = 0, no movement toward center).
      // Glides gently vertically (+4vh -> 0vh -> -4vh) on the right side as user scrolls.
      watermarkX = 0;
      watermarkY = (0.5 - chapterP) * 8.0;

      // Slow, luxurious fade in, wide plateau hold, slow fade out
      if (chapterP < 0.20) {
        // Smooth sine ease-in over first 20%
        watermarkOpacity = Math.sin((chapterP / 0.20) * Math.PI * 0.5) * 0.95;
      } else if (chapterP <= 0.75) {
        // Generous plateau: stationary high visibility on right flank
        watermarkOpacity = 0.95;
      } else {
        // Slow fade out over final 25% of chapter scroll
        const fadeP = (chapterP - 0.75) / 0.25;
        watermarkOpacity = 0.95 * Math.cos(fadeP * Math.PI * 0.5);
      }

      if (activeWatermarkChapter !== currentChapter) {
        activeWatermarkChapter = currentChapter;
        const meta = WATERMARK_CHAPTERS[currentChapter];
        if (meta) {
          const numEl = document.getElementById('kcb-ch-num');
          const pillEl = document.getElementById('kcb-vert-pill');
          const eyeEl = document.getElementById('kcb-eyebrow');
          const titleEl = document.getElementById('kcb-title');
          const subEl = document.getElementById('kcb-subtitle');
          const coordEl = document.getElementById('kcb-vert-coord');
          const telemEl = document.getElementById('kcb-telemetry');

          if (numEl) numEl.textContent = meta.num;
          if (pillEl) pillEl.textContent = `CH. ${meta.num}`;
          if (eyeEl) eyeEl.textContent = meta.eyebrow;
          if (titleEl) titleEl.textContent = meta.title;
          if (subEl) subEl.textContent = meta.subtitle;
          if (coordEl) coordEl.textContent = meta.telemetry.split(' • ')[0];
          if (telemEl) {
            telemEl.innerHTML = meta.telemetry.split(' • ').map(t => `<span class="kcb-coord">${t}</span>`).join('<span class="kcb-sep">•</span>');
          }
        }
      }
    }

    document.documentElement.style.setProperty('--watermark-x', `${watermarkX.toFixed(2)}vw`);
    document.documentElement.style.setProperty('--watermark-y', `${watermarkY.toFixed(2)}vh`);
    document.documentElement.style.setProperty('--watermark-opacity', `${watermarkOpacity.toFixed(3)}`);

    // Dynamic dark mode during Mechanical Heart movement view
    document.body.classList.toggle('is--night-mode', isMovement);

    // Show hotspot pins ONLY in the free-rotate finale zone (>= 82% scroll)
    // Hidden during the entire scrollytelling narrative
    hotspotsManager.setVisible(isCompleted);
    document.body.classList.toggle('is--free-rotate', isCompleted);

    // Reveal the Metallurgy / specs dossier ONLY when the user has physically
    // scrolled past the narrative container — not while Features 4/5 or Free
    // Orbit Studio are still on screen.
    const narrativeOffsetTop = narrativeContainer ? narrativeContainer.offsetTop : 0;
    const narrativeBottom = narrativeOffsetTop + (narrativeContainer ? narrativeContainer.offsetHeight : 0);
    const isDossierInView = window.scrollY + window.innerHeight >= narrativeBottom - 40;
    document.body.classList.toggle('dossier-revealed', isDossierInView);

    // Update vertical timeline indicator in DOM
    updateScrollTimeline(scrollProgress);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Apply initial pristine launch state on load

  // Resize handler
  function onResize() {
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener('resize', onResize);

  // Animation Loop
  let clock = new THREE.Clock();
  let running = true;

  function animate() {
    if (!running) return;
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    const now = Date.now();

    // 1. Automatic Movement Ticking Mechanics (28,800 vph smooth sweep)
    const secondsFraction = (now % 60000) / 1000;
    const secondAngle = -(secondsFraction / 60) * Math.PI * 2;
    watchInstance.hands.second.rotation.z = secondAngle;

    const date = new Date();
    const minutes = date.getMinutes() + secondsFraction / 60;
    const minuteAngle = -(minutes / 60) * Math.PI * 2;
    if (watchInstance.hands && watchInstance.hands.minute) {
      watchInstance.hands.minute.rotation.z = minuteAngle;
    }

    const hours = (date.getHours() % 12) + minutes / 60;
    const hourAngle = -(hours / 12) * Math.PI * 2;
    if (watchInstance.hands && watchInstance.hands.hour) {
      watchInstance.hands.hour.rotation.z = hourAngle;
    }

    // =========================================================
    // CASCADING MECHANICAL GEAR TRAIN (Authentic Horological Reduction Hierarchy)
    // 1. Seconds gear train runs fastest (escapement / 6 o'clock showcase)
    // 2. Seconds gear drives Minutes gear train (1/6 reduction ratio)
    // 3. Minutes gear drives Hours gear train (1/4 reduction ratio)
    // 4. Hours gear drives Day & Night gear train (1/2 reduction for 24-hr cycle)
    // Every single gear has its own distinct speed and direction based on tooth pitch!
    // =========================================================
    const secVelocity = 1.8;
    const minVelocity = secVelocity * (1 / 6);       // ~0.30 rad/sec
    const hourVelocity = minVelocity * (1 / 4);      // ~0.075 rad/sec
    const dayNightVelocity = hourVelocity * 0.5;     // ~0.0375 rad/sec (24-hr half-speed)

    // 1. SECONDS / SHOWCASE GEAR TRAIN (Fastest - Bottom 6 o'clock)
    if (watchInstance.showcaseGears) {
      if (watchInstance.showcaseGears.gear1) {
        watchInstance.showcaseGears.gear1.rotation.z += delta * secVelocity;
      }
      if (watchInstance.showcaseGears.gear2) {
        watchInstance.showcaseGears.gear2.rotation.z -= delta * secVelocity * (20 / 18);
      }
      if (watchInstance.showcaseGears.gear3) {
        watchInstance.showcaseGears.gear3.rotation.z += delta * secVelocity * (20 / 14);
      }
    }

    // 2. MINUTES GEAR TRAIN (Driven by Seconds - Top 12 o'clock)
    if (watchInstance.minuteRubyIndicator) {
      watchInstance.minuteRubyIndicator.rotation.z = minuteAngle;
    }
    if (watchInstance.minuteGears) {
      if (watchInstance.minuteGears.center) {
        watchInstance.minuteGears.center.rotation.z += delta * minVelocity;
      }
      if (watchInstance.minuteGears.left) {
        watchInstance.minuteGears.left.rotation.z -= delta * minVelocity * (22 / 18);
      }
      if (watchInstance.minuteGears.right) {
        watchInstance.minuteGears.right.rotation.z -= delta * minVelocity * (22 / 18);
      }
      if (watchInstance.minuteGears.intermediate) {
        watchInstance.minuteGears.intermediate.rotation.z += delta * minVelocity * (22 / 16);
      }
    }

    // 3. HOURS GEAR TRAIN (Driven by Minutes - Left 9 o'clock)
    if (watchInstance.lapisHourHand) {
      watchInstance.lapisHourHand.rotation.z = hourAngle;
    }
    if (watchInstance.hourGears) {
      if (watchInstance.hourGears.drive) {
        watchInstance.hourGears.drive.rotation.z += delta * hourVelocity;
      }
      if (watchInstance.hourGears.intermediate) {
        watchInstance.hourGears.intermediate.rotation.z -= delta * hourVelocity * (20 / 18);
      }
      if (watchInstance.hourGears.pinion) {
        watchInstance.hourGears.pinion.rotation.z += delta * hourVelocity * (20 / 14);
      }
    }

    // 4. DAY AND NIGHT GEAR TRAIN (Driven by Hours - Right 3 o'clock)
    const daySeconds = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    const dayAngle = -(daySeconds / 86400) * Math.PI * 2;
    if (watchInstance.sunMoonDisc) {
      watchInstance.sunMoonDisc.rotation.z = dayAngle;
    }
    if (watchInstance.dayNightGears) {
      if (watchInstance.dayNightGears.drive) {
        watchInstance.dayNightGears.drive.rotation.z += delta * dayNightVelocity;
      }
      if (watchInstance.dayNightGears.planetary) {
        watchInstance.dayNightGears.planetary.rotation.z -= delta * dayNightVelocity * (20 / 18);
      }
      if (watchInstance.dayNightGears.pinion) {
        watchInstance.dayNightGears.pinion.rotation.z += delta * dayNightVelocity * (20 / 14);
      }
    }

    // Central movement synchronization hub gear (meshing between minute and hour trains)
    if (watchInstance.centerHubGear) {
      watchInstance.centerHubGear.rotation.z -= delta * minVelocity * 0.75;
    }

    // Connecting Arbors (vertical shafts linking front complication gears to the back gear layer at respective speeds)
    if (watchInstance.connectingArbors) {
      watchInstance.connectingArbors.forEach((arbor, idx) => {
        let speed = minVelocity;
        if (idx <= 3) speed = hourVelocity;           // Hours arbors (0-3)
        else if (idx <= 7) speed = minVelocity;       // Minutes arbors (4-7)
        else if (idx <= 11) speed = dayNightVelocity; // Day/Night arbors (8-11)
        else if (idx <= 14) speed = secVelocity;      // Seconds/Showcase arbors (12-14)
        else speed = minVelocity * 0.6;               // Center hub arbor (15)

        const dir = (idx % 2 === 0) ? 1 : -1;
        arbor.rotation.z += delta * speed * dir;
      });
    }

    // High-Frequency Balance Wheel Oscillation (4Hz / 8 beats per second) & pulsing hairspring
    if (watchInstance.balanceWheel) {
      const balanceBeat = Math.sin(now * 0.025) * 0.55;
      watchInstance.balanceWheel.rotation.z = balanceBeat;
    }
    if (watchInstance.hairspring) {
      const pulse = 1.0 + Math.sin(now * 0.025) * 0.035;
      watchInstance.hairspring.scale.set(pulse, pulse, 1.0);
    }

    // Flying Tourbillon continuous mechanical rotation
    if (watchInstance.tourbillon) {
      watchInstance.tourbillon.rotation.z = -secondAngle * 2.5;
    }

    // 60-Second Real-Time Chronometer Seconds Hand (Sweeps 0..60s in the 4th complication circle)
    if (watchInstance.tourbillonSecondsHand) {
      watchInstance.tourbillonSecondsHand.rotation.z = secondAngle;
    }

    // 5. Back Gear Layer & Motion Works Wheel Synchronization
    if (watchInstance.gears) {
      if (watchInstance.gears.fourthWheel) {
        watchInstance.gears.fourthWheel.rotation.z += delta * secVelocity;
      }
      if (watchInstance.gears.escapeWheel) {
        watchInstance.gears.escapeWheel.rotation.z += delta * secVelocity * 5.0;
      }
      if (watchInstance.gears.palletFork) {
        watchInstance.gears.palletFork.rotation.z = Math.sin(now * 0.025) * 0.35;
      }
      if (watchInstance.gears.thirdWheel) {
        watchInstance.gears.thirdWheel.rotation.z -= delta * secVelocity * 0.70;
      }
      if (watchInstance.gears.minuteWheel) {
        watchInstance.gears.minuteWheel.rotation.z -= delta * minVelocity * (26 / 12);
      }
      if (watchInstance.gears.cannonPinion) {
        watchInstance.gears.cannonPinion.rotation.z += delta * minVelocity;
      }
      if (watchInstance.gears.hourWheel) {
        watchInstance.gears.hourWheel.rotation.z += delta * hourVelocity;
      }
      if (watchInstance.gears.dayNightWheel) {
        watchInstance.gears.dayNightWheel.rotation.z += delta * dayNightVelocity;
      }
      if (watchInstance.gears.grandCenterWheel) {
        watchInstance.gears.grandCenterWheel.rotation.z -= delta * minVelocity * 0.75;
      }
      if (watchInstance.gears.crownGear) {
        watchInstance.gears.crownGear.rotation.z += delta * hourVelocity * 1.5;
      }
      if (watchInstance.gears.transGear) {
        watchInstance.gears.transGear.rotation.z -= delta * hourVelocity * 1.2;
      }
    }

    // 3. Dynamic Oscillating Rotor inertia
    rotorVelocity *= 0.94;
    rotorAngle += rotorVelocity;
    watchInstance.rotor.rotation.z = rotorAngle;

    // 4. Scroll-Driven 3D Choreography (incorporating full suite of post-exploded stages)
    if (!isDragging) {
      if (scrollProgress < 0.12) {
        // Step 0 & 0B: Pristine Watch Launch
        targetRotX = 0.0;
        targetRotY = 0.0;
        targetZoom = 9.2;
        targetPosX = 0;
        if (!manualExplode) explodedController.setExploded(false);
      } else if (scrollProgress >= 0.12 && scrollProgress < 0.24) {
        // Step 1: Case & Finishes (Feature 01)
        const p = (scrollProgress - 0.12) / 0.12;
        targetRotX = 0.18 * p;
        targetRotY = -0.65 * p;
        targetZoom = 9.2 * (1 - p) + 10.0 * p;
        targetPosX = window.innerWidth > 900 ? 1.3 : 0;
        if (!manualExplode) explodedController.setExploded(false);
      } else if (scrollProgress >= 0.24 && scrollProgress < 0.36) {
        // Step 2: Refined Dial & Quad Complications (Feature 02)
        const p = (scrollProgress - 0.24) / 0.12;
        targetRotX = 0.18 * (1 - p) + 0.01 * p;
        targetRotY = -0.65 * (1 - p) + 0.04 * p;
        targetZoom = 10.0 * (1 - p) + 6.8 * p;
        targetPosX = window.innerWidth > 900 ? 1.3 : 0;
        if (!manualExplode) explodedController.setExploded(false);
      } else if (scrollProgress >= 0.36 && scrollProgress < 0.48) {
        // Step 3: Flat Plane Steel Caseback (Feature 03)
        const p = (scrollProgress - 0.36) / 0.12;
        targetRotX = 0.01 * (1 - p) + 0.02 * p;
        targetRotY = 0.04 * (1 - p) + Math.PI * p; // Full 180° rotation
        targetZoom = 6.8 * (1 - p) + 7.6 * p;
        targetPosX = window.innerWidth > 900 ? 1.3 : 0;
        rotorVelocity += 0.02;
        if (!manualExplode) explodedController.setExploded(false);
      } else if (scrollProgress >= 0.48 && scrollProgress < 0.60) {
        // Step 4: Deconstructed Calibre Layers (Exploded View)
        const p = (scrollProgress - 0.48) / 0.12;
        targetRotX = 0.02 * (1 - p) + 0.30 * p;
        targetRotY = Math.PI * (1 - p) + (Math.PI * 2 - 0.55) * p;
        targetZoom = 7.6 * (1 - p) + 13.0 * p;
        targetPosX = window.innerWidth > 900 ? 1.3 : 0;
        explodedController.targetProgress = Math.max(p, manualExplode ? 1 : 0);
      } else if (scrollProgress >= 0.60 && scrollProgress < 0.72) {
        // Step 4B: The Celestial Engine (Calibre & Movement Isolation)
        const p = (scrollProgress - 0.60) / 0.12;
        targetRotX = 0.30 * (1 - p) + 0.22 * p;
        targetRotY = (Math.PI * 2 - 0.55) * (1 - p) + (Math.PI * 2 + 0.35) * p;
        targetZoom = 13.0 * (1 - p) + 6.2 * p;
        targetPosX = window.innerWidth > 900 ? 1.2 : 0;
        explodedController.targetProgress = Math.max(1 - p * 0.8, manualExplode ? 1 : 0);
        if (particleMat) particleMat.opacity = 0.38 + 0.40 * p;
      } else if (scrollProgress >= 0.72 && scrollProgress < 0.86) {
        // Step 5: Sculpted 3-Link Bracelet & Slim Profile
        const p = (scrollProgress - 0.72) / 0.14;
        targetRotX = 0.22 * (1 - p) + 0.08 * p;
        targetRotY = (Math.PI * 2 + 0.35) * (1 - p) + (Math.PI * 2.5 - 0.18) * p;
        targetZoom = 6.2 * (1 - p) + 7.8 * p;
        targetPosX = window.innerWidth > 900 ? 1.3 : 0;
        explodedController.targetProgress = 0;
        if (particleMat) particleMat.opacity = 0.38;
      } else {
        // Finale: 360° Free Orbit & Four Editions Gallery Showcase
        targetPosX = 0;
        if (!hasUserRotatedInFinale) {
          targetRotX = 0.15;
          targetRotY += delta * 0.25; // Gentle majestic idle spin
          targetZoom = 9.8;
        }
        explodedController.targetProgress = manualExplode ? 1 : 0;
      }
    }

    // Animate Celestial Stardust Particles
    if (stardustParticles) {
      stardustParticles.rotation.z += delta * 0.12;
      stardustParticles.rotation.y += delta * 0.06;
    }

    // Toggle Launch Scroll Cue visibility based on scroll
    const launchCue = document.getElementById('launch-scroll-cue');
    if (launchCue) {
      if (scrollProgress > 0.04) {
        launchCue.classList.add('is--hidden');
      } else {
        launchCue.classList.remove('is--hidden');
      }
    }

    // Update Exploded Layers
    explodedController.update(delta);

    // Smooth inertia camera/rotation damping
    // Adjusted to 0.042 for stately, majestic horological rotation speed matching slow text pacing
    rotX += (targetRotX - rotX) * 0.042;
    rotY += (targetRotY - rotY) * 0.042;
    posX += (targetPosX - posX) * 0.042;
    currentZoom += (targetZoom - currentZoom) * 0.042;

    watchAnchor.rotation.x = rotX;
    watchAnchor.rotation.y = rotY;
    watchAnchor.position.x = posX;
    camera.position.z = currentZoom;

    // Dynamic light intensity shift for night lume (metallic black tuned)
    const targetAmbient = isNightMode ? 0.04 : 0.7;
    const targetKey = isNightMode ? 0.10 : 3.8;
    ambientLight.intensity += (targetAmbient - ambientLight.intensity) * 0.1;
    keyLight.intensity += (targetKey - keyLight.intensity) * 0.1;

    // Update 3D interactive hotspots
    hotspotsManager.update(camera, watchAnchor);

    renderer.render(scene, camera);
  }

  animate();

  // Helper for Chapter Timeline Indicator (8 individual steps)
  function updateScrollTimeline(progress) {
    const chapters = document.querySelectorAll('.vertical-timeline-tracker .timeline-step');
    let activeIdx = 0;
    if (progress >= 0.04 && progress < 0.12) activeIdx = 0;
    else if (progress >= 0.12 && progress < 0.24) activeIdx = 1;
    else if (progress >= 0.24 && progress < 0.36) activeIdx = 2;
    else if (progress >= 0.36 && progress < 0.48) activeIdx = 3;
    else if (progress >= 0.48 && progress < 0.60) activeIdx = 4;
    else if (progress >= 0.60 && progress < 0.72) activeIdx = 5;
    else if (progress >= 0.72 && progress < 0.86) activeIdx = 6;
    else if (progress >= 0.86) activeIdx = 7;

    chapters.forEach((ch, idx) => {
      ch.classList.toggle('is--active', idx === activeIdx);
    });

    const progressBar = document.getElementById('scroll-progress-bar');
    if (progressBar) {
      progressBar.style.width = `${(progress * 100).toFixed(1)}%`;
    }
  }

  // Public API methods for UI binds
  return {
    toggleExploded() {
      manualExplode = !manualExplode;
      explodedController.setExploded(manualExplode);
      if (manualExplode) {
        targetZoom = 13.0;
        targetRotX = 0.32;
        targetRotY = -0.55;
      } else {
        targetZoom = 9.8;
        targetRotX = 0.08;
        targetRotY = 0.04;
      }
      return manualExplode;
    },
    isExploded() {
      return manualExplode || explodedController.progress > 0.5;
    },
    setEdition(editionId) {
      const found = WATCH_EDITIONS.find(e => e.id === editionId);
      if (found) {
        currentEdition = found;
        watchInstance.updateEdition(found);
      }
      return found;
    },
    // Hover material preview (temporary swap on mouseenter)
    previewEdition(editionId) {
      const found = WATCH_EDITIONS.find(e => e.id === editionId);
      if (found) {
        previewActive = true;
        watchInstance.updateEdition(found);
      }
    },
    restoreEdition() {
      if (previewActive) {
        previewActive = false;
        watchInstance.updateEdition(currentEdition);
      }
    },
    toggleNightLume() {
      isNightMode = !isNightMode;
      watchInstance.setNightLume(isNightMode);
      return isNightMode;
    },
    isNightMode() {
      return isNightMode;
    },
    setPresetView(preset) {
      if (preset === 'front') {
        targetRotX = 0;
        targetRotY = 0;
        targetZoom = 9.2;
      } else if (preset === 'side') {
        targetRotX = 0;
        targetRotY = -Math.PI / 2;
        targetZoom = 8.5;
      } else if (preset === 'back') {
        targetRotX = 0;
        targetRotY = Math.PI;
        targetZoom = 7.6;
      } else if (preset === 'angle') {
        targetRotX = 0.25;
        targetRotY = -0.45;
        targetZoom = 9.8;
      }
    },
    focusOn(targetX, targetY, zoom) {
      targetRotX = targetX;
      targetRotY = targetY;
      targetZoom = zoom;
    },
    focusComplication(complicationId) {
      hasUserRotatedInFinale = true;
      if (complicationId === 'hours') {
        targetRotX = 0.05;
        targetRotY = 0.32;
        targetZoom = 5.4;
        targetPosX = 0.85;
      } else if (complicationId === 'minutes') {
        targetRotX = -0.32;
        targetRotY = 0.0;
        targetZoom = 5.2;
        targetPosX = 0.0;
      } else if (complicationId === 'daynight') {
        targetRotX = 0.05;
        targetRotY = -0.32;
        targetZoom = 5.4;
        targetPosX = -0.85;
      } else if (complicationId === 'tourbillon') {
        targetRotX = 0.32;
        targetRotY = 0.0;
        targetZoom = 5.2;
        targetPosX = 0.0;
      } else {
        // 'reset'
        targetRotX = 0.15;
        targetRotY = -0.25;
        targetZoom = 9.2;
        targetPosX = 0.0;
      }
    },
    focusExplodedLayer(layerId) {
      hasUserRotatedInFinale = true;
      if (!explodedController.isExploded) {
        explodedController.setExploded(true);
        manualExplode = true;
      }
      targetRotX = 0.18;
      targetRotY = 0.82;
      targetZoom = 12.0;
      targetPosX = 0.5;

      const group = watchInstance.layers[layerId];
      if (group) {
        const origScale = group.scale.clone();
        group.scale.multiplyScalar(1.08);
        setTimeout(() => {
          group.scale.copy(origScale);
        }, 350);
      }
    },
    focusComponent(componentId) {
      hasUserRotatedInFinale = true;
      if (componentId === 'dial') {
        targetRotX = 0; targetRotY = 0; targetZoom = 6.2; targetPosX = 0;
      } else if (componentId === 'hands') {
        targetRotX = 0.12; targetRotY = 0.15; targetZoom = 5.2; targetPosX = 0;
      } else if (componentId === 'crystal') {
        targetRotX = 0.35; targetRotY = -0.4; targetZoom = 7.5; targetPosX = 0;
      } else if (componentId === 'bezel') {
        targetRotX = 0.28; targetRotY = 0.3; targetZoom = 6.8; targetPosX = 0;
      } else if (componentId === 'case') {
        targetRotX = 0.05; targetRotY = -Math.PI / 2.2; targetZoom = 7.8; targetPosX = 0;
      } else if (componentId === 'movement') {
        targetRotX = 0.22; targetRotY = Math.PI * 2 + 0.35; targetZoom = 6.4; targetPosX = 0;
      } else if (componentId === 'strap') {
        targetRotX = 0.35; targetRotY = 0; targetZoom = 8.5; targetPosX = 0;
      } else if (componentId === 'clasp') {
        targetRotX = 0; targetRotY = Math.PI; targetZoom = 7.2; targetPosX = 0;
      } else if (componentId === 'crown') {
        targetRotX = 0.1; targetRotY = -Math.PI / 2.3; targetZoom = 6.0; targetPosX = -0.8;
      } else {
        targetRotX = 0.15; targetRotY = -0.25; targetZoom = 9.2; targetPosX = 0;
      }
    },
    destroy() {
      running = false;
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      renderer.dispose();
      container.innerHTML = '';
    }
  };
}
