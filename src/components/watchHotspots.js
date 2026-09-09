import * as THREE from 'three';
import { soundEngine } from './soundEngine.js';

export const HOTSPOT_DATA = [
  {
    id: 'sapphire',
    label: 'Sapphire Crystal',
    metric: '9 Mohs • Anti-Reflective',
    localPos: new THREE.Vector3(0, 0, 0.48),
    targetRotX: 0.1,
    targetRotY: -0.15,
    zoom: 9.5
  },
  {
    id: 'bezel',
    label: 'Ceramic Bezel',
    metric: '120-Click Unidirectional',
    localPos: new THREE.Vector3(0, 2.5, 0.25),
    targetRotX: 0.4,
    targetRotY: 0,
    zoom: 9.0
  },
  {
    id: 'crown',
    label: 'Twinlock Crown',
    metric: 'Screw-Down • 100M Water Resistant',
    localPos: new THREE.Vector3(2.8, 0, 0),
    targetRotX: 0,
    targetRotY: -Math.PI / 2.2,
    zoom: 9.0
  },
  {
    id: 'dial',
    label: 'Applied Dial & Hands',
    metric: 'Swiss Super-LumiNova® X1',
    localPos: new THREE.Vector3(-0.8, -0.6, 0.2),
    targetRotX: 0.05,
    targetRotY: 0.2,
    zoom: 8.8
  },
  {
    id: 'rotor',
    label: 'Tungsten Oscillating Rotor',
    metric: '21K Heavy Rim • 360° Bearings',
    localPos: new THREE.Vector3(0, -0.5, -0.45),
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
          <span class="hotspot-label">${data.label}</span>
          <span class="hotspot-metric">${data.metric}</span>
        </div>
      `;

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
    if (!this.container || this.pins.length === 0) return;

    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    this.pins.forEach(pin => {
      // Transform local position to world space via watch anchor
      const worldPos = pin.data.localPos.clone();
      worldPos.applyMatrix4(watchAnchor.matrixWorld);

      // Project to normalized device coordinates (-1 to 1)
      const screenPos = worldPos.clone().project(camera);

      // Check if behind camera
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
    if (!this.container) return;
    this.container.style.opacity = visible ? '1' : '0';
    this.container.style.pointerEvents = visible ? 'auto' : 'none';
  }
}
