import { WATCH_EDITIONS, EXPLODED_LAYERS, TECHNICAL_SPECIFICATIONS } from './data/watchSpecs.js';
import { initWatchViewer } from './components/watchThreeViewer.js';
import { initHoverEffects } from './components/hoverEffects.js';
import { soundEngine } from './components/soundEngine.js';
import confetti from 'canvas-confetti';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial 60fps Circular Loader Sequence
  const loader = document.getElementById('loader');
  const loaderPercent = document.getElementById('loader-percent');

  let progress = 0;
  const loadInterval = setInterval(() => {
    progress += Math.floor(Math.random() * 20) + 15;
    if (progress >= 100) {
      progress = 100;
      clearInterval(loadInterval);
      if (loaderPercent) loaderPercent.textContent = '100%';

      setTimeout(() => {
        if (loader) loader.classList.add('is--hidden');
        document.body.classList.add('hero-revealed');
        // Trigger initial hero counters
        document.querySelectorAll('.hero-metrics-ribbon .counter-number').forEach(el => animateNumber(el));
      }, 400);
    } else {
      if (loaderPercent) loaderPercent.textContent = `${progress}%`;
    }
  }, 80);

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

  // 5. Connect Exploded View Toggle
  const explodeBtn = document.getElementById('hud-explode-btn');
  const explodeBtnText = document.getElementById('explode-btn-text');
  if (explodeBtn && viewer) {
    explodeBtn.addEventListener('click', () => {
      const isExploded = viewer.toggleExploded();
      explodeBtn.classList.toggle('is--active', isExploded);
      if (explodeBtnText) {
        explodeBtnText.textContent = isExploded ? 'Assemble Watch' : 'Explode Calibre';
      }
    });
  }

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
      const angle = btn.getAttribute('data-angle');
      if (viewer) viewer.setPresetView(angle);
    });
  });

  // 8. Render Section 01: Deconstructed Calibre Layers with Animation Classes
  const layersContainer = document.getElementById('layers-breakdown-container');
  if (layersContainer) {
    layersContainer.innerHTML = EXPLODED_LAYERS.map((layer, idx) => `
      <div class="layer-card scroll-reveal stagger-${(idx % 8) + 1}">
        <div>
          <span class="layer-num">LAYER 0${idx + 1}</span>
          <h3 class="layer-title">${layer.name}</h3>
          <p class="layer-metric">${layer.metric}</p>
          <p class="layer-desc">${layer.description}</p>
        </div>
      </div>
    `).join('');
  }

  // 9. Render Section 03: Four Metallurgy Editions with Hover Preview
  const editionsCardsContainer = document.getElementById('editions-cards-container');
  if (editionsCardsContainer) {
    editionsCardsContainer.innerHTML = WATCH_EDITIONS.map((ed, idx) => `
      <div class="edition-card scroll-reveal stagger-${(idx % 4) + 1} ${idx === 0 ? 'is--selected' : ''}" data-card-edition="${ed.id}">
        <div>
          <div class="edition-badge-bar">
            <span class="mono-badge">EDITION 0${idx + 1}</span>
            <span class="edition-color-pip" style="background:${ed.dialColor}; border-color:${ed.caseColor}"></span>
          </div>
          <h3 class="edition-title">${ed.name}</h3>
          <p class="edition-subtitle">${ed.subtitle}</p>
          <p class="edition-desc">${ed.description}</p>
        </div>
        <div class="edition-price-row">
          <span class="edition-price">${ed.price}</span>
          <button class="btn-select-edition">${idx === 0 ? 'Active' : 'Configure'}</button>
        </div>
      </div>
    `).join('');

    editionsCardsContainer.querySelectorAll('.edition-card').forEach(card => {
      const id = card.getAttribute('data-card-edition');
      card.addEventListener('click', () => {
        selectEdition(id);
      });
      // Live 3D watch material preview on hover
      card.addEventListener('mouseenter', () => {
        if (viewer) viewer.previewEdition(id);
      });
      card.addEventListener('mouseleave', () => {
        if (viewer) viewer.restoreEdition();
      });
    });
  }

  // 10. Render Section 04: Technical Specifications Table with Animation Classes
  const specsContainer = document.getElementById('specs-table-container');
  if (specsContainer) {
    specsContainer.innerHTML = TECHNICAL_SPECIFICATIONS.map((spec, idx) => `
      <div class="specs-row scroll-reveal stagger-${(idx % 6) + 1}">
        <span class="specs-label">${spec.label.toUpperCase()}</span>
        <span class="specs-value">${spec.value}</span>
      </div>
    `).join('');
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

    // Update Showcase Cards
    document.querySelectorAll('.edition-card').forEach(card => {
      const isSelected = card.getAttribute('data-card-edition') === editionId;
      card.classList.toggle('is--selected', isSelected);
      const selectBtn = card.querySelector('.btn-select-edition');
      if (selectBtn) selectBtn.textContent = isSelected ? 'Active' : 'Configure';
    });

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
      } catch {}
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

  // 13. Connect Timeline Step Navigation
  document.querySelectorAll('.timeline-step').forEach(step => {
    step.style.pointerEvents = 'auto';
    step.style.cursor = 'pointer';
    step.addEventListener('click', () => {
      const stepIdx = parseInt(step.getAttribute('data-step') || '0', 10);
      const targetIds = [
        'story-launch',
        'story-identity',
        'story-sapphire',
        'story-dial',
        'story-movement',
        'story-rotor',
        'story-exploded',
        'specs-dossier'
      ];
      const el = document.getElementById(targetIds[stepIdx]);
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
  // Must use the same narrative container height as watchThreeViewer for correct threshold
  // NOTE: HTML id is 'scrolly-narrative' (not 'scrolly-narrative-container')
  function handleScrollUI() {
    const narrativeEl = document.getElementById('scrolly-narrative');
    const containerHeight = narrativeEl ? narrativeEl.offsetHeight : document.documentElement.scrollHeight;
    const maxScroll = Math.max(containerHeight - window.innerHeight, 1);
    const scrollProgress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
    const isCompleted = scrollProgress >= 0.82;
    document.body.classList.toggle('story-completed', isCompleted);
  }
  window.addEventListener('scroll', handleScrollUI, { passive: true });
  handleScrollUI();
});

// Scroll Reveal & Animated Number Counter Engine
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
  const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const stepId = entry.target.id;
      if (entry.isIntersecting) {
        entry.target.classList.add('is--active');
        if (stepId === 'story-identity') document.body.classList.add('step-identity-active');
        if (stepId === 'story-dial') document.body.classList.add('step-dial-active');
        if (stepId === 'story-movement') document.body.classList.add('step-movement-active');
        if (stepId === 'story-rotor') document.body.classList.add('step-rotor-active');
        if (stepId === 'story-exploded') document.body.classList.add('step-exploded-active');
      } else {
        entry.target.classList.remove('is--active');
        if (stepId === 'story-identity') document.body.classList.remove('step-identity-active');
        if (stepId === 'story-dial') document.body.classList.remove('step-dial-active');
        if (stepId === 'story-movement') document.body.classList.remove('step-movement-active');
        if (stepId === 'story-rotor') document.body.classList.remove('step-rotor-active');
        if (stepId === 'story-exploded') document.body.classList.remove('step-exploded-active');
      }
    });
  }, {
    threshold: 0.55,
    rootMargin: '-80px 0px -80px 0px'
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

// Subtle Hero & HUD Parallax
function initHeroParallax() {
  const editorial = document.querySelector('.hero-editorial-top');
  const hud = document.querySelector('.watch-hud-toolbar');

  window.addEventListener('mousemove', (e) => {
    const normX = (e.clientX / window.innerWidth - 0.5) * 2;
    const normY = (e.clientY / window.innerHeight - 0.5) * 2;

    if (editorial) {
      editorial.style.transform = `translate3d(${normX * 6}px, ${normY * 4}px, 0)`;
    }
    if (hud) {
      hud.style.transform = `translate3d(calc(-50% + ${normX * 8}px), ${normY * 5}px, 0)`;
    }
  });
}
