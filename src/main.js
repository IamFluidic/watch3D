import { WATCH_EDITIONS, EXPLODED_LAYERS, TECHNICAL_SPECIFICATIONS, COMPONENT_WEIGHTS, EDITORIAL_CARDS } from './data/watchSpecs.js';
import { initWatchViewer } from './components/watchThreeViewer.js';
import { initHoverEffects } from './components/hoverEffects.js';
import { soundEngine } from './components/soundEngine.js';
import confetti from 'canvas-confetti';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Digital Chronometer Countdown Loader (23:59 -> 00:00)
  const loader = document.getElementById('loader');
  const stopwatchMain = document.getElementById('stopwatch-main');
  const stopwatchMs = document.getElementById('stopwatch-ms');

  const COUNTDOWN_DURATION = 1250; // smooth continuous 1.25s countdown
  const startTime = performance.now();
  const startSec = 23 * 60 + 59; // 1439 total units

  function updateStopwatch(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / COUNTDOWN_DURATION, 1);

    // Strictly linear progression: zero stalls or hesitation in the middle
    const current = Math.max(0, (1 - progress) * startSec);
    const m = Math.floor(current / 60);
    const s = Math.floor(current % 60);
    const ms = progress >= 1 ? 0 : Math.floor((1 - (progress * 24) % 1) * 99);

    const timeStr = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    const msStr = `:${String(ms).padStart(2, '0')}`;

    if (stopwatchMain) stopwatchMain.textContent = timeStr;
    if (stopwatchMs) stopwatchMs.textContent = msStr;

    if (progress < 1) {
      requestAnimationFrame(updateStopwatch);
    } else {
      setTimeout(() => {
        if (loader) loader.classList.add('is--hidden');
        document.body.classList.add('hero-revealed');
        // Trigger initial hero counters
        document.querySelectorAll('.hero-metrics-ribbon .counter-number').forEach(el => animateNumber(el));
      }, 100);
    }
  }
  requestAnimationFrame(updateStopwatch);

  // 2. Initialize 3D Watch WebGL Viewer with Hotspots
  let viewer = null;
  try {
    viewer = initWatchViewer('canvas-wrapper', 'watch-hotspots-overlay');
  } catch (err) {
    console.error('Three.js Watch Viewer failed to initialize:', err);
  }

  // 3. Connect Sound Toggle (Synthesized 28,800 A/h Escapement)
  const navSoundBtn = document.getElementById('nav-sound-btn');
  const soundIcon = document.getElementById('sound-icon');
  const soundLabel = document.getElementById('sound-label');
  if (navSoundBtn) {
    navSoundBtn.addEventListener('click', () => {
      const isSoundOn = soundEngine.toggleMute();
      navSoundBtn.classList.toggle('is--active', isSoundOn);
      if (soundIcon) soundIcon.textContent = isSoundOn ? '🔊' : '🔇';
      if (soundLabel) soundLabel.textContent = isSoundOn ? 'Escapement ON' : 'Sound OFF';
    });
  }

  // 4. Render Floating HUD Edition Buttons
  let activeEdition = WATCH_EDITIONS[0];
  const hudEditionsContainer = document.getElementById('hud-editions-container');
  if (hudEditionsContainer) {
    hudEditionsContainer.innerHTML = WATCH_EDITIONS.map((ed, idx) => `
      <button class="hud-edition-pill ${idx === 0 ? 'is--active' : ''}" data-edition-id="${ed.id}">
        <span class="edition-swatch" style="background-color: ${ed.dialColor}; border-color: ${ed.caseColor}"></span>
        <span>${ed.id.toUpperCase()}</span>
      </button>
    `).join('');

    hudEditionsContainer.querySelectorAll('.hud-edition-pill').forEach(btn => {
      const id = btn.getAttribute('data-edition-id');
      btn.addEventListener('click', () => {
        selectEdition(id);
      });
      btn.addEventListener('mouseenter', () => {
        if (viewer) viewer.previewEdition(id);
      });
      btn.addEventListener('mouseleave', () => {
        if (viewer) viewer.restoreEdition();
      });
    });
  }

  // 5. Connect Exploded View Toggle & Layer Shelf
  const explodeBtn = document.getElementById('hud-explode-btn');
  const explodeBtnText = document.getElementById('explode-btn-text');
  const dossierCard = document.getElementById('layer-dossier-card');

  if (explodeBtn && viewer) {
    explodeBtn.addEventListener('click', () => {
      const isExploded = viewer.toggleExploded();
      explodeBtn.classList.toggle('is--active', isExploded);
      document.body.classList.toggle('is--exploded', isExploded);
      if (explodeBtnText) {
        explodeBtnText.textContent = isExploded ? 'Assemble Watch' : 'Explode Calibre';
      }
      if (!isExploded && dossierCard) {
        dossierCard.classList.remove('is--visible');
      }
    });
  }

  // 5B. Exploded Labels Bar interactions
  document.querySelectorAll('.exploded-label-item').forEach(item => {
    const layerId = item.getAttribute('data-layer');
    item.addEventListener('click', () => {
      soundEngine.playClick(720, 0.03);
      if (viewer && viewer.focusExplodedLayer) {
        viewer.focusExplodedLayer(layerId);
      }
    });
  });


  // 6. Connect Night / Super-LumiNova Lume Toggle
  const hudLumeBtn = document.getElementById('hud-lume-btn');
  const navLumeBtn = document.getElementById('nav-lume-btn');

  function toggleLume() {
    if (!viewer) return;
    const isNight = viewer.toggleNightLume();
    document.body.classList.toggle('is--night-mode', isNight);
    if (hudLumeBtn) hudLumeBtn.classList.toggle('is--active', isNight);
    if (navLumeBtn) {
      navLumeBtn.classList.toggle('is--active', isNight);
      navLumeBtn.querySelector('.lume-label').textContent = isNight ? 'Studio Mode' : 'Lume Mode';
    }
  }

  hudLumeBtn?.addEventListener('click', toggleLume);
  navLumeBtn?.addEventListener('click', toggleLume);

  // 7. Connect Camera Preset Angle Buttons
  document.querySelectorAll('.hud-angle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.hud-angle-btn').forEach(b => b.classList.remove('is--active'));
      btn.classList.add('is--active');
      soundEngine?.playClick(620, 0.03);
      const angle = btn.getAttribute('data-angle');
      if (viewer && viewer.setPresetView) {
        viewer.setPresetView(angle);
      }
    });
  });

  window.addEventListener('watchUserRotated', () => {
    document.querySelectorAll('.hud-angle-btn').forEach(b => b.classList.remove('is--active'));
  });

  // 8. Render Component Weights Matrix (Model 146GR Architecture)
  const weightsMatrix = document.getElementById('weights-rows-matrix');
  if (weightsMatrix) {
    weightsMatrix.innerHTML = COMPONENT_WEIGHTS.map(item => `
      <div class="weight-row-item" data-component-id="${item.id}">
        <div class="wr-left">
          <span class="wr-plus">+</span>
          <span class="wr-name">${item.name}</span>
        </div>
        <div class="wr-mid">
          <span class="wr-index">${item.index}</span>
          <span class="wr-cat">${item.category}</span>
        </div>
        <div class="wr-right">
          <span class="wr-weight">${item.weight} gr</span>
        </div>
      </div>
    `).join('');

    weightsMatrix.querySelectorAll('.weight-row-item').forEach(row => {
      const compId = row.getAttribute('data-component-id');
      row.addEventListener('click', () => {
        weightsMatrix.querySelectorAll('.weight-row-item').forEach(r => r.classList.remove('is--active'));
        row.classList.add('is--active');
        soundEngine.playClick(650, 0.03);
        if (viewer && viewer.focusComponent) {
          viewer.focusComponent(compId);
        }
      });
      row.addEventListener('mouseenter', () => {
        if (viewer && viewer.focusComponent) {
          viewer.focusComponent(compId);
        }
      });
    });
  }

  // 9. Render Model 146GR Swatches Bar
  const m146SwatchesBar = document.getElementById('m146-swatches-bar');
  const m146ActiveColor = document.getElementById('m146-active-color');
  if (m146SwatchesBar) {
    m146SwatchesBar.innerHTML = WATCH_EDITIONS.map((ed, idx) => `
      <button class="m146-swatch-btn ${idx === 0 ? 'is--active' : ''}" data-edition-id="${ed.id}" title="${ed.name}">
        <span class="m146-pip" style="background: ${ed.caseColor}; border-color: ${ed.bezelColor};"></span>
      </button>
    `).join('');

    m146SwatchesBar.querySelectorAll('.m146-swatch-btn').forEach(btn => {
      const id = btn.getAttribute('data-edition-id');
      btn.addEventListener('click', () => {
        m146SwatchesBar.querySelectorAll('.m146-swatch-btn').forEach(b => b.classList.remove('is--active'));
        btn.classList.add('is--active');
        selectEdition(id);
        if (m146ActiveColor) {
          m146ActiveColor.textContent = activeEdition.name.replace(/^\d+\.\s*/, '');
        }
      });
    });
  }

  // 10. Render Four-Model Lineup Row ("FS-60P")
  const lineupRow = document.getElementById('lineup-watches-row');
  if (lineupRow) {
    lineupRow.innerHTML = WATCH_EDITIONS.map((ed, idx) => `
      <div class="lineup-watch-card ${idx === 0 ? 'is--selected' : ''}" data-lineup-edition="${ed.id}">
        <div class="lw-thumb-stage" style="background: radial-gradient(circle, ${ed.caseColor}26 0%, transparent 70%);">
          <div class="lw-mini-watch-render" style="border-color: ${ed.caseColor};">
            <div class="lw-mini-dial" style="background: ${ed.dialColor};">
              <div class="lw-mini-tourbillon" style="border-color: ${ed.accentColor};"></div>
            </div>
          </div>
        </div>
        <div class="lw-meta">
          <span class="lw-badge">0${idx + 1} / METALLURGY</span>
          <h4 class="lw-title">${ed.name.replace(/^\d+\.\s*/, '')}</h4>
          <span class="lw-price">${ed.price}</span>
        </div>
        <button class="lw-select-btn">${idx === 0 ? 'Active Model' : 'Select'}</button>
      </div>
    `).join('');

    lineupRow.querySelectorAll('.lineup-watch-card').forEach(card => {
      const id = card.getAttribute('data-lineup-edition');
      card.addEventListener('click', () => {
        lineupRow.querySelectorAll('.lineup-watch-card').forEach(c => {
          c.classList.remove('is--selected');
          const b = c.querySelector('.lw-select-btn');
          if (b) b.textContent = 'Select';
        });
        card.classList.add('is--selected');
        const b = card.querySelector('.lw-select-btn');
        if (b) b.textContent = 'Active Model';

        soundEngine.playClick(580, 0.04);
        selectEdition(id);
      });
    });
  }

  const lineupSelectBtn = document.getElementById('lineup-select-btn');
  if (lineupSelectBtn) {
    lineupSelectBtn.addEventListener('click', () => {
      const reserveEl = document.getElementById('reserve');
      if (reserveEl) reserveEl.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 11. Helper: Synchronize Edition Selection Across UI & 3D Model
  function selectEdition(editionId) {
    const found = WATCH_EDITIONS.find(e => e.id === editionId);
    if (!found) return;
    activeEdition = found;

    if (viewer) viewer.setEdition(editionId);

    // Update HUD Pills
    document.querySelectorAll('.hud-edition-pill').forEach(btn => {
      btn.classList.toggle('is--active', btn.getAttribute('data-edition-id') === editionId);
    });

    // Update Model 146 color tag
    if (m146ActiveColor) {
      m146ActiveColor.textContent = found.name.replace(/^\d+\.\s*/, '');
    }

    // Update Header & Reserve Drawer Price / Names
    const headerPrice = document.getElementById('header-price');
    const reservePriceDisplay = document.getElementById('reserve-price-display');
    const reserveActiveEdition = document.getElementById('reserve-active-edition');

    if (headerPrice) headerPrice.textContent = found.price;
    if (reservePriceDisplay) reservePriceDisplay.textContent = found.price;
    if (reserveActiveEdition) reserveActiveEdition.textContent = `${found.name} (${found.dialName})`;
  }

  // 12. Reserve / Commission Modal Interaction
  const reserveForm = document.getElementById('reserve-form');
  const orderModal = document.getElementById('order-modal');
  const modalClose = document.getElementById('modal-close');
  const modalDismissBtn = document.getElementById('modal-dismiss-btn');
  const modalSummaryText = document.getElementById('modal-summary-text');
  const modalSerialCode = document.getElementById('modal-serial-code');

  if (reserveForm) {
    reserveForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const engravingInput = document.getElementById('caseback-engraving');
      const engravingVal = engravingInput?.value.trim() || 'NONE';

      const randomSerial = `SN-60P-${Math.floor(1000 + Math.random() * 9000)}`;
      if (modalSerialCode) modalSerialCode.textContent = randomSerial;
      if (modalSummaryText) {
        modalSummaryText.innerHTML = `
          Your commission for <strong>${activeEdition.name}</strong> (${activeEdition.price}) has been prioritized in atelier queue. 
          Caseback Engraving: <em>"${engravingVal}"</em>.
        `;
      }

      if (orderModal) orderModal.classList.add('is--open');

      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0A0A0C', '#0284C7', '#E2E8F0', '#38BDF8']
        });
      } catch { }
    });
  }

  function closeModal() {
    if (orderModal) orderModal.classList.remove('is--open');
  }

  modalClose?.addEventListener('click', closeModal);
  modalDismissBtn?.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && orderModal?.classList.contains('is--open')) {
      closeModal();
    }
  });

  // 13. Connect Timeline Step Navigation (10 Stages ending in Interactive Studio)
  const targetIds = [
    'story-launch',
    'story-identity',
    'story-dial',
    'story-movement',
    'story-exploded',
    'story-heart',
    'story-kinetic',
    'story-contours',
    'story-slim',
    'story-studio'
  ];

  document.querySelectorAll('.timeline-step').forEach(step => {
    step.style.pointerEvents = 'auto';
    step.style.cursor = 'pointer';
    step.addEventListener('click', () => {
      const stepIdx = parseInt(step.getAttribute('data-step') || '0', 10);
      const targetId = targetIds[stepIdx];
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // 14. Intersection Observer for Scroll Reveals & Counters
  initScrollAnimations();

  // 15. Universal Hover Effects (Magnetic Buttons, Custom Cursor)
  initHoverEffects();

  // 16. Subtle Parallax for Hero Elements
  initHeroParallax();

  // 17. Synchronize UI visibility with story completion
  function handleScrollUI() {
    const narrativeEl = document.getElementById('scrolly-narrative');
    const containerHeight = narrativeEl ? narrativeEl.offsetHeight : document.documentElement.scrollHeight;
    const maxScroll = Math.max(containerHeight - window.innerHeight, 1);
    const scrollProgress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
    const isCompleted = scrollProgress >= 0.74;
    document.body.classList.toggle('story-completed', isCompleted);
  }
  window.addEventListener('scroll', handleScrollUI, { passive: true });
  handleScrollUI();
});

// Scroll Reveal & Story Step Active State Engine
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.scroll-reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is--revealed');

        const counters = entry.target.querySelectorAll('.counter-number');
        counters.forEach(counter => animateNumber(counter));
        if (entry.target.classList.contains('counter-number')) {
          animateNumber(entry.target);
        }

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));

  // Story step observer for individual directional animations
  const storyStepClasses = {
    'story-identity': 'step-identity-active',
    'story-dial':     'step-dial-active',
    'story-movement': 'step-movement-active',
    'story-exploded': 'step-exploded-active',
    'story-heart':    'step-heart-active',
    'story-kinetic':  'step-kinetic-active',
    'story-contours': 'step-contours-active',
    'story-slim':     'step-slim-active',
    'story-studio':   'story-completed'
  };

  const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const stepId = entry.target.id;
      const cls = storyStepClasses[stepId];
      if (cls) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is--active');
          document.body.classList.add(cls);
        } else {
          entry.target.classList.remove('is--active');
          document.body.classList.remove(cls);
        }
      }
    });
  }, {
    threshold: 0.45,
    rootMargin: '-60px 0px -60px 0px'
  });

  document.querySelectorAll('.story-step').forEach(step => stepObserver.observe(step));
}

// Smooth Easing Number Counter
function animateNumber(el) {
  if (el.dataset.animated === 'true') return;
  el.dataset.animated = 'true';

  const target = parseFloat(el.dataset.target) || 0;
  const format = el.dataset.format;
  const suffix = el.dataset.suffix || '';
  const duration = 1400; // ms
  const startTime = performance.now();

  function updateCount(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease Out Cubic
    const ease = 1 - Math.pow(1 - progress, 3);
    const currentVal = Math.floor(target * ease);

    let displayStr = currentVal.toString();
    if (format === 'comma') {
      displayStr = currentVal.toLocaleString();
    }

    el.textContent = displayStr + suffix;

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      let finalStr = target.toString();
      if (format === 'comma') finalStr = target.toLocaleString();
      el.textContent = finalStr + suffix;
    }
  }

  requestAnimationFrame(updateCount);
}

// Subtle Astrolabe, Left/Right Framing Typography & HUD Parallax
function initHeroParallax() {
  const editorial = document.querySelector('.hero-editorial-top');
  const hud = document.querySelector('.watch-hud-toolbar');
  const astrolabe = document.querySelector('.astrolabe-svg');
  const brandText = document.getElementById('giant-bg-text-brand');
  const modelText = document.getElementById('giant-bg-text-model');

  window.addEventListener('mousemove', (e) => {
    const normX = (e.clientX / window.innerWidth - 0.5) * 2;
    const normY = (e.clientY / window.innerHeight - 0.5) * 2;

    if (editorial) {
      editorial.style.transform = `translate3d(${normX * 6}px, ${normY * 4}px, 0)`;
    }
    if (hud) {
      hud.style.transform = `translate3d(calc(-50% + ${normX * 8}px), ${normY * 5}px, 0)`;
    }
    if (astrolabe) {
      astrolabe.style.transform = `translate3d(${normX * 14}px, ${normY * 10}px, 0) rotateX(${-normY * 4}deg) rotateY(${normX * 4}deg)`;
    }
    if (brandText) {
      brandText.style.transform = `translate3d(${normX * 8}px, calc(-50% + ${normY * 6}px), 0)`;
    }
    if (modelText) {
      modelText.style.transform = `translate3d(${normX * -8}px, calc(-50% + ${normY * 6}px), 0)`;
    }
  });
}
