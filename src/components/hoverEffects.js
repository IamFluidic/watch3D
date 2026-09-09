import { soundEngine } from './soundEngine.js';

export function initHoverEffects() {
  init3DCardTilt();
  initMagneticButtons();
  initCustomCursor();
}

// Elegant Typographic Hover Interactions (No Cards, No 3D Card Tilt)
function init3DCardTilt() {
  const interactiveItems = document.querySelectorAll(
    '.edition-card, .layer-card, .spec-tile, .movement-visual-card, .reserve-card'
  );

  interactiveItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      soundEngine.playClick(440, 0.015);
    });
  });
}

// Magnetic Button Pull
function initMagneticButtons() {
  const magneticEls = document.querySelectorAll(
    '.btn-swiss-primary, .hud-pill-btn, .hud-angle-btn, .watch-nav-link'
  );

  magneticEls.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      soundEngine.playClick(580, 0.02);
    });

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;

      const strength = 0.28;
      btn.style.transform = `translate3d(${relX * strength}px, ${relY * strength}px, 0)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate3d(0, 0, 0)';
    });
  });
}

// Custom Precision Swiss Cursor
function initCustomCursor() {
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');
  if (!cursorDot || !cursorRing) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  });

  function renderCursor() {
    // Smooth lag interpolation on outer ring
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Expand ring on interactive elements
  const interactives = document.querySelectorAll(
    'button, a, input, select, .layer-card, .edition-card, .canvas-3d-target, .hud-edition-pill'
  );

  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorRing.classList.add('is--active');
    });
    el.addEventListener('mouseleave', () => {
      cursorRing.classList.remove('is--active');
    });
  });
}
