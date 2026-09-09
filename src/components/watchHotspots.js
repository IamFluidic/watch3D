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
    label: 'Ceramic Bezel',
    metric: '120-Click Unidirectional',
    desc: 'Zirconia ceramic insert impervious to scratches, UV degradation, and corrosion.',
    localPos: new THREE.Vector3(0, 2.5, 0.25),
    normal: new THREE.Vector3(0, 0.5, 0.85).normalize(),
    targetRotX: 0.4,
    targetRotY: 0,
    zoom: 9.0
  },
  {
    id: 'crown',
    badge: 'CROWN',
    label: 'Twinlock Crown',
    metric: 'Screw-Down • 100M Water Resistant',
    desc: 'Dual polymer sealing gaskets create a hermetic seal against moisture and dust.',
    localPos: new THREE.Vector3(2.8, 0, 0),
    normal: new THREE.Vector3(1, 0, 0),
    targetRotX: 0,
    targetRotY: -Math.PI / 2.2,
    zoom: 9.0
  },
  {
    id: 'dial',
    badge: 'DIAL',
    label: 'Applied Dial & Hands',
    metric: 'Swiss Super-LumiNova® X1',
    desc: 'Sunburst guilloché dial with hand-applied faceted hour markers and luminescent hands.',
    localPos: new THREE.Vector3(-0.8, -0.6, 0.2),
    normal: new THREE.Vector3(0, 0, 1),
    targetRotX: 0.05,
    targetRotY: 0.2,
    zoom: 8.8
  },
  {
    id: 'rotor',
    badge: 'CALIBRE',
    label: 'Tungsten Oscillating Rotor',
    metric: '21K Heavy Rim • 360° Bearings',
    desc: 'High-density winding weight powers the 42-hour mainspring in both directions.',
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
