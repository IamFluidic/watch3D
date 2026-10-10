import * as THREE from 'three';
import { soundEngine } from './soundEngine.js';

export const HOTSPOT_DATA = [
  {
    id: 'sapphire',
    badge: 'CRYSTAL',
    label: 'Sapphire Crystal',
    metric: '9 Mohs • Anti-Reflective',
    desc: 'Synthetic corundum crystal with dual-sided anti-glare coating for optical clarity.',
    localPos: new THREE.Vector3(0, 0, 0.48),
    normal: new THREE.Vector3(0, 0, 1),
    targetRotX: 0.1,
    targetRotY: -0.15,
    zoom: 9.5
  },
  {
    id: 'bezel',
    badge: 'BEZEL',
    label: 'Constellation Damascus Bezel',
    metric: 'Laser-Engraved Star Maps • Degree Arcs',
    desc: 'Dark slate Damascus steel bezel intricately engraved with celestial constellations (Orion, Ursa Major, Cassiopeia), astronomical degree arcs, and astrolabe glyphs.',
    localPos: new THREE.Vector3(0, 2.5, 0.25),
    normal: new THREE.Vector3(0, 0.5, 0.85).normalize(),
    targetRotX: 0.4,
    targetRotY: 0,
    zoom: 9.0
  },
  {
    id: 'crown',
    badge: 'CROWN',
    label: 'Amethyst Cabochon Crown',
    metric: 'Faceted Purple Crystal • Fluted Bronze',
    desc: 'Fluted antique bronze crown at 4 o\'clock crowned with a magnificent faceted royal purple amethyst crystal cabochon gemstone.',
    localPos: new THREE.Vector3(2.49, -1.30, -0.06),
    normal: new THREE.Vector3(0.88, -0.46, 0).normalize(),
    targetRotX: 0.2,
    targetRotY: -Math.PI / 2.5,
    zoom: 9.2
  },
  {
    id: 'dial',
    badge: 'SUBDIAL',
    label: 'Lapis Lazuli Roman Subdial',
    metric: 'Royal Ultramarine • Cathedral Breguet Arrow',
    desc: 'Deep royal lapis lazuli gemstone subdial with gold Roman numerals and an ornate rose-gold cathedral Breguet arrow hour hand.',
    localPos: new THREE.Vector3(-0.96, 0.52, 0.15),
    normal: new THREE.Vector3(0, 0, 1),
    targetRotX: 0.05,
    targetRotY: 0.2,
    zoom: 8.8
  },
  {
    id: 'gears',
    badge: 'TOURBILLON',
    label: 'Cobalt Flying Tourbillon',
    metric: 'Heated Flame-Blued Ring • Serpentine Cobalt Bridges',
    desc: 'High-complication 3D flying tourbillon cage with flame-blued outer ring, gold chaton ruby pivot, and vivid cobalt blue serpentine bridges.',
    localPos: new THREE.Vector3(0, -0.84, 0.15),
    normal: new THREE.Vector3(0, 0, 1),
    targetRotX: 0.25,
    targetRotY: -0.15,
    zoom: 9.0
  },
  {
    id: 'caseback',
    badge: 'CASEBACK',
    label: 'Solid Engraved Caseback',
    metric: '316L Surgical Steel • Hermetic Seal',
    desc: 'Laser-engraved ALUNA italic signature and A3016 reference with circular satin graining.',
    localPos: new THREE.Vector3(0, -0.5, -0.45),
    normal: new THREE.Vector3(0, 0, -1),
    targetRotX: 0.1,
    targetRotY: Math.PI,
    zoom: 9.5
  }
];

export class WatchHotspotsManager {
  constructor(containerId, onPinClick) {
    this.container = document.getElementById(containerId);
    this.onPinClick = onPinClick;
    this.pins = [];
    this.isVisible = false;
    this.initDOM();
  }

  initDOM() {
    if (!this.container) return;
    this.container.innerHTML = '';

    HOTSPOT_DATA.forEach(data => {
      const pinEl = document.createElement('div');
      pinEl.className = 'watch-hotspot-pin';
      pinEl.dataset.hotspotId = data.id;

      pinEl.innerHTML = `
        <button class="hotspot-core" aria-label="Inspect ${data.label}">
          <span class="hotspot-ping"></span>
          <span class="hotspot-dot"></span>
        </button>
        <div class="hotspot-card">
          <div class="hotspot-card-header">
            <span class="hotspot-badge">${data.badge}</span>
            <span class="hotspot-metric">${data.metric}</span>
          </div>
          <span class="hotspot-label">${data.label}</span>
          <p class="hotspot-desc">${data.desc}</p>
        </div>
      `;

      // Play subtle tick on hover
      pinEl.addEventListener('mouseenter', () => {
        if (this.isVisible) {
          soundEngine.playTick();
        }
      });

      pinEl.addEventListener('click', (e) => {
        e.stopPropagation();
        soundEngine.playClick(680, 0.03);
        if (this.onPinClick) {
          this.onPinClick(data);
        }
      });

      this.container.appendChild(pinEl);
      this.pins.push({ data, el: pinEl });
    });
  }

  update(camera, watchAnchor) {
    if (!this.container || this.pins.length === 0 || !this.isVisible) return;

    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    this.pins.forEach(pin => {
      // Transform local position to world space via watch anchor
      const worldPos = pin.data.localPos.clone();
      worldPos.applyMatrix4(watchAnchor.matrixWorld);

      // Check if facing camera (backside culling for realistic 3D watch)
      const worldNormal = pin.data.normal.clone().applyQuaternion(watchAnchor.quaternion);
      const camDir = camera.position.clone().sub(worldPos).normalize();
      const dot = worldNormal.dot(camDir);

      if (dot < 0.12) {
        // Facing away or oblique: hide pin
        pin.el.style.opacity = '0';
        pin.el.style.pointerEvents = 'none';
        return;
      }

      // Project to normalized device coordinates (-1 to 1)
      const screenPos = worldPos.clone().project(camera);

      // Check if behind camera frustum
      if (screenPos.z > 1) {
        pin.el.style.opacity = '0';
        pin.el.style.pointerEvents = 'none';
        return;
      }

      // Convert to CSS pixels
      const x = ((screenPos.x + 1) / 2) * width;
      const y = ((-screenPos.y + 1) / 2) * height;

      pin.el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      pin.el.style.opacity = '1';
      pin.el.style.pointerEvents = 'auto';
    });
  }

  setVisible(visible) {
    this.isVisible = visible;
    if (!this.container) return;
    this.container.style.opacity = visible ? '1' : '0';
    // Overlay container itself MUST remain pointer-events: none so dragging passes to canvas!
    this.container.style.pointerEvents = 'none';
    this.pins.forEach(pin => {
      pin.el.style.pointerEvents = visible ? 'auto' : 'none';
      if (!visible) {
        pin.el.style.opacity = '0';
      }
    });
  }
}
