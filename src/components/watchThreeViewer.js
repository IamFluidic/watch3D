import * as THREE from 'three';
import { create3DWatch } from './watchModelBuilder.js';
import { WatchExplodedController } from './watchExplodedController.js';
import { WATCH_EDITIONS } from '../data/watchSpecs.js';
import { WatchHotspotsManager } from './watchHotspots.js';

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
    powerPreference: "high-performance"
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.55; // Higher exposure — lifts metallic specular highlights off the black

  // Set Studio Environment Map for Realistic PBR Specular Reflections
  const studioEnv = createStudioEnvironment(renderer);
  scene.environment = studioEnv;

  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  // Lighting System: Studio Softboxes (tuned for metallic black PBR)
  // Reduced ambient so the deep black case has real depth and contrast
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);

  // Direct front light onto dial face — brighter to separate hands from black dial
  const dialFaceLight = new THREE.DirectionalLight(0xffffff, 3.2);
  dialFaceLight.position.set(0, 2, 9);
  scene.add(dialFaceLight);

  // Strong top-left key light — creates crisp specular streak on black case bevel
  const keyLight = new THREE.DirectionalLight(0xffffff, 3.8);
  keyLight.position.set(6, 10, 8);
  keyLight.castShadow = true;
  scene.add(keyLight);

  // Cool blue-tinted fill to give metallic black a multi-tone depth
  const fillLight = new THREE.DirectionalLight(0xb8ceff, 1.2);
  fillLight.position.set(-8, -3, 5);
  scene.add(fillLight);

  // Very strong white rim light — punches out the case silhouette against dark background
  const rimLight = new THREE.DirectionalLight(0xffffff, 4.8);
  rimLight.position.set(0, 10, -7);
  scene.add(rimLight);

  // Secondary low-angle rim to catch bracelet link edges
  const rimLight2 = new THREE.DirectionalLight(0xd0e4ff, 2.2);
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
  const watchAnchor = new THREE.Group();
  scene.add(watchAnchor);

  // Build Initial 3D Watch (Steel Edition default)
  let currentEdition = WATCH_EDITIONS[0];
  let previewActive = false;
  const watchInstance = create3DWatch(currentEdition);
  watchAnchor.add(watchInstance.root);

  // Initialize Exploded View Controller
  const explodedController = new WatchExplodedController(watchInstance.layers);
  let manualExplode = false;

  // Initialize 3D Hotspot Manager
  const hotspotsManager = new WatchHotspotsManager(hotspotsContainerId, (pinData) => {
    targetRotX = pinData.targetRotX;
    targetRotY = pinData.targetRotY;
    targetZoom = pinData.zoom;
  });

  // User Interaction & Camera States (Starts facing front so dial, numerals, and hands are prominent)
  let isDragging = false;
  let prevX = 0;
  let prevY = 0;
  let rotX = 0.08;
  let rotY = 0.04;
  let targetRotX = 0.08;
  let targetRotY = 0.04;
  let targetZoom = 9.8;
  let currentZoom = 11;
  let isNightMode = false;
  let scrollProgress = 0;

  // Track cursor velocity for rotor spinning
  let rotorVelocity = 0;
  let rotorAngle = 0;
  let hasUserRotatedInFinale = false;

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
      targetRotX += dy * 0.008;

      if (scrollProgress >= 0.80) {
        hasUserRotatedInFinale = true;
      }

      rotorVelocity += (Math.abs(dx) + Math.abs(dy)) * 0.04;

      prevX = e.clientX;
      prevY = e.clientY;
    }
  });

  // Wheel zoom in completed studio
  container.addEventListener('wheel', (e) => {
    if (scrollProgress >= 0.80) {
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

      if (scrollProgress >= 0.80) {
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
  function onScroll() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress = maxScroll > 0 ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1) : 0;

    // Active narrative steps for 60fps luxury narrative with dedicated title showcase space
    const isLaunch = scrollProgress < 0.07;
    const isTitlePhase = scrollProgress >= 0.07 && scrollProgress < 0.20;
    const isIdentity = scrollProgress >= 0.20 && scrollProgress < 0.35;
    const isDial = scrollProgress >= 0.35 && scrollProgress < 0.50;
    const isMovement = scrollProgress >= 0.50 && scrollProgress < 0.65;
    const isExploded = scrollProgress >= 0.65 && scrollProgress < 0.78;
    const isBracelet = scrollProgress >= 0.78 && scrollProgress < 0.88;
    const isCompleted = scrollProgress >= 0.88;

    document.getElementById('story-launch')?.classList.toggle('is--active', isLaunch);
    document.getElementById('story-title')?.classList.toggle('is--active', isTitlePhase);
    document.getElementById('story-identity')?.classList.toggle('is--active', isIdentity);
    document.getElementById('story-dial')?.classList.toggle('is--active', isDial);
    document.getElementById('story-movement')?.classList.toggle('is--active', isMovement);
    document.getElementById('story-exploded')?.classList.toggle('is--active', isExploded);
    document.getElementById('story-rotor')?.classList.toggle('is--active', isBracelet);

    document.body.classList.toggle('step-identity-active', isIdentity);
    document.body.classList.toggle('step-dial-active', isDial);
    document.body.classList.toggle('step-movement-active', isMovement);
    document.body.classList.toggle('step-exploded-active', isExploded);
    document.body.classList.toggle('step-bracelet-active', isBracelet);
    document.body.classList.toggle('story-completed', isCompleted);

    // Dynamic title & background motion:
    // 1. When page loads in beginning (scroll < 0.02): show ALUNA A3016 solid in background (0.90)
    // 2. When scrolling (0.02 -> 0.07): background text fades down to subtle color (0.12)
    // 3. After then (0.07 -> 0.14): Main title name appears from bottom to center in motion
    // 4. Then when scrolling down (0.14 -> 0.20): Main title disappears into the top!
    // 5. Again scrolling (>= 0.20): only then show Feature 01 (Case & Finishes)
    let brandYOffset = 60; // vh
    let brandOpacity = 0;
    let bgNameOpacity = 0.90;

    if (scrollProgress < 0.02) {
      bgNameOpacity = 0.90;
      brandOpacity = 0;
      brandYOffset = 60;
    } else if (scrollProgress >= 0.02 && scrollProgress < 0.07) {
      const p = (scrollProgress - 0.02) / 0.05;
      bgNameOpacity = 0.90 * (1 - p) + 0.12 * p;
      brandOpacity = 0;
      brandYOffset = 60;
    } else if (scrollProgress >= 0.07 && scrollProgress < 0.11) {
      const p = (scrollProgress - 0.07) / 0.04;
      const ease = 1 - Math.pow(1 - p, 3);
      bgNameOpacity = 0.12;
      brandOpacity = ease;
      brandYOffset = (1 - ease) * 60;
    } else if (scrollProgress >= 0.11 && scrollProgress < 0.14) {
      bgNameOpacity = 0.12;
      brandOpacity = 1;
      brandYOffset = 0;
    } else if (scrollProgress >= 0.14 && scrollProgress < 0.20) {
      const p = (scrollProgress - 0.14) / 0.06;
      const ease = Math.pow(p, 1.8);
      bgNameOpacity = 0.12 * (1 - p) + 0.08 * p;
      brandOpacity = Math.max(1 - p * 1.6, 0);
      brandYOffset = -ease * 140; // Glides UP and completely disappears into the top!
    } else {
      bgNameOpacity = 0.08;
      brandOpacity = 0;
      brandYOffset = -140;
    }

    document.documentElement.style.setProperty('--brand-y-offset', `${brandYOffset.toFixed(2)}vh`);
    document.documentElement.style.setProperty('--brand-opacity', `${brandOpacity.toFixed(3)}`);
    document.documentElement.style.setProperty('--bg-name-opacity', `${bgNameOpacity.toFixed(3)}`);

    // Calculate scroll-driven vertical motion for each feature:
    // Slowly comes from bottom (+65vh -> 0vh), rests at center (0vh), then moves to top (0vh -> -65vh)
    function calcFeatureMotion(progress, enterStart, enterEnd, exitStart, exitEnd) {
      if (progress < enterStart) {
        return { y: 65, opacity: 0 };
      } else if (progress >= enterStart && progress < enterEnd) {
        const p = (progress - enterStart) / (enterEnd - enterStart);
        const ease = 1 - Math.pow(1 - p, 2.5); // Smooth decelerating glide from bottom
        return {
          y: (1 - ease) * 65,
          opacity: ease
        };
      } else if (progress >= enterEnd && progress < exitStart) {
        return { y: 0, opacity: 1 };
      } else if (progress >= exitStart && progress < exitEnd) {
        const p = (progress - exitStart) / (exitEnd - exitStart);
        const ease = Math.pow(p, 2.2); // Smooth accelerating glide up into top
        return {
          y: -ease * 65,
          opacity: Math.max(1 - p * 1.5, 0)
        };
      } else {
        return { y: -65, opacity: 0 };
      }
    }

    const feat1 = calcFeatureMotion(scrollProgress, 0.20, 0.245, 0.305, 0.35);
    const feat2 = calcFeatureMotion(scrollProgress, 0.35, 0.395, 0.455, 0.50);
    const feat3 = calcFeatureMotion(scrollProgress, 0.50, 0.545, 0.605, 0.65);
    const feat4 = calcFeatureMotion(scrollProgress, 0.65, 0.690, 0.740, 0.78);
    const feat5 = calcFeatureMotion(scrollProgress, 0.78, 0.815, 0.850, 0.88);

    document.documentElement.style.setProperty('--feat1-y', `${feat1.y.toFixed(2)}vh`);
    document.documentElement.style.setProperty('--feat1-opacity', `${feat1.opacity.toFixed(3)}`);

    document.documentElement.style.setProperty('--feat2-y', `${feat2.y.toFixed(2)}vh`);
    document.documentElement.style.setProperty('--feat2-opacity', `${feat2.opacity.toFixed(3)}`);

    document.documentElement.style.setProperty('--feat3-y', `${feat3.y.toFixed(2)}vh`);
    document.documentElement.style.setProperty('--feat3-opacity', `${feat3.opacity.toFixed(3)}`);

    document.documentElement.style.setProperty('--feat4-y', `${feat4.y.toFixed(2)}vh`);
    document.documentElement.style.setProperty('--feat4-opacity', `${feat4.opacity.toFixed(3)}`);

    document.documentElement.style.setProperty('--feat5-y', `${feat5.y.toFixed(2)}vh`);
    document.documentElement.style.setProperty('--feat5-opacity', `${feat5.opacity.toFixed(3)}`);

    // Dynamic dark mode during Mechanical Heart movement view
    document.body.classList.toggle('is--night-mode', isMovement);

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
    watchInstance.hands.minute.rotation.z = minuteAngle;

    const hours = (date.getHours() % 12) + minutes / 60;
    const hourAngle = -(hours / 12) * Math.PI * 2;
    watchInstance.hands.hour.rotation.z = hourAngle;

    // 2. High-Frequency Balance Wheel Oscillation (4Hz / 8 beats per second)
    const balanceBeat = Math.sin(now * 0.025) * 0.55;
    watchInstance.balanceWheel.rotation.z = balanceBeat;

    // 3. Dynamic Oscillating Rotor inertia
    rotorVelocity *= 0.94;
    rotorAngle += rotorVelocity;
    watchInstance.rotor.rotation.z = rotorAngle;

    // 4. Scroll-Driven 3D Choreography (when not manually dragging)
    if (!isDragging) {
      if (scrollProgress < 0.20) {
        // Step 0 & 0B: Pristine Watch Launch (Watch faces camera upright during launch, bg fade, and title entrance/exit)
        targetRotX = 0.0;
        targetRotY = 0.0;
        targetZoom = 9.2;
        if (!manualExplode) explodedController.setExploded(false);
      } else if (scrollProgress >= 0.20 && scrollProgress < 0.35) {
        // Step 1: Case & Finishes (Feature 01 appears only here)
        const p = (scrollProgress - 0.20) / 0.15;
        targetRotX = 0.0 + p * 0.12;
        targetRotY = 0.0 - 0.58 * p;
        targetZoom = 9.2 + p * 0.8;
        if (!manualExplode) explodedController.setExploded(false);
      } else if (scrollProgress >= 0.35 && scrollProgress < 0.50) {
        // Step 2: Refined Dial & Pointers (Deep macro zoom directly facing dial face!)
        const p = (scrollProgress - 0.35) / 0.15;
        targetRotX = 0.12 * (1 - p) + 0.01 * p;
        targetRotY = -0.58 * (1 - p) + 0.06 * p;
        targetZoom = 10.0 * (1 - p) + 6.8 * p; // Close macro zoom on dial face
        if (!manualExplode) explodedController.setExploded(false);
      } else if (scrollProgress >= 0.50 && scrollProgress < 0.65) {
        // Step 3: Flat Plane Steel Caseback (Flip 180° to directly inspect engraved ALUNA in italic and A3016)
        const p = (scrollProgress - 0.50) / 0.15;
        targetRotX = 0.01 * (1 - p) + 0.02 * p;
        targetRotY = 0.06 * (1 - p) + Math.PI * p; // Full 180° rotation
        targetZoom = 6.8 * (1 - p) + 7.6 * p; // Crisp clear framing of flat caseback
        rotorVelocity += 0.02;
        if (!manualExplode) explodedController.setExploded(false);
      } else if (scrollProgress >= 0.65 && scrollProgress < 0.78) {
        // Step 4: Deconstructed Architecture (Horizontal exploded view)
        const p = (scrollProgress - 0.65) / 0.13;
        targetRotX = 0.02 * (1 - p) + 0.32 * p;
        targetRotY = Math.PI * (1 - p) + (Math.PI + 0.50) * p;
        targetZoom = 7.6 * (1 - p) + 13.5 * p;
        explodedController.targetProgress = Math.max(p, manualExplode ? 1 : 0);
      } else if (scrollProgress >= 0.78 && scrollProgress < 0.88) {
        // Step 5: Integrated Bracelet Macro (Close view of bracelet links)
        const p = (scrollProgress - 0.78) / 0.10;
        targetRotX = 0.32 * (1 - p) + 0.06 * p;
        targetRotY = (Math.PI + 0.50) * (1 - p) + (Math.PI * 2) * p;
        targetZoom = 13.5 * (1 - p) + 7.6 * p;
        explodedController.targetProgress = 0;
      } else {
        // Step 6: Finale / Free Orbit Showcase
        if (!hasUserRotatedInFinale) {
          targetRotX = 0.15;
          targetRotY += delta * 0.25; // Gentle majestic idle spin
          targetZoom = 10.0;
        }
        explodedController.targetProgress = manualExplode ? 1 : 0;
      }
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
    rotX += (targetRotX - rotX) * 0.08;
    rotY += (targetRotY - rotY) * 0.08;
    currentZoom += (targetZoom - currentZoom) * 0.08;

    watchAnchor.rotation.x = rotX;
    watchAnchor.rotation.y = rotY;
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
    if (progress >= 0.05 && progress < 0.18) activeIdx = 1;
    else if (progress >= 0.18 && progress < 0.32) activeIdx = 2;
    else if (progress >= 0.32 && progress < 0.46) activeIdx = 3;
    else if (progress >= 0.46 && progress < 0.60) activeIdx = 4;
    else if (progress >= 0.60 && progress < 0.74) activeIdx = 5;
    else if (progress >= 0.74 && progress < 0.85) activeIdx = 6;
    else if (progress >= 0.85) activeIdx = 7;

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
      targetZoom = manualExplode ? 13 : 11;
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
    destroy() {
      running = false;
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      renderer.dispose();
      container.innerHTML = '';
    }
  };
}
