import { EXPLODED_LAYERS } from '../data/watchSpecs.js';

export class WatchExplodedController {
  /**
   * @param {Object} watchLayers  - Named layer groups (sapphire, bezel, dial, gears, …)
   * @param {Array}  explodableItems - Per-item 3D explosion offsets:
   *   [ { obj: THREE.Object3D, offsetX, offsetY, offsetZ }, … ]
   *   Covers: the 4 clock circle subdials (in layerDial) + all front complication
   *   gears (in layerGears) + all back movement gear train wheels (in layerMovement).
   */
  constructor(watchLayers, explodableItems = []) {
    this.layers = watchLayers;

    // Capture each item's REST (assembled) position as base
    this.items = explodableItems.map(g => ({
      obj:     g.obj,
      baseX:   g.obj?.position.x ?? 0,
      baseY:   g.obj?.position.y ?? 0,
      baseZ:   g.obj?.position.z ?? 0,
      offsetX: g.offsetX || 0,
      offsetY: g.offsetY || 0,
      offsetZ: g.offsetZ || 0,
    }));

    this.isExploded    = false;
    this.progress      = 0;   // 0 = assembled, 1 = fully exploded
    this.targetProgress = 0;

    // Cache layer base Z positions
    this.basePositions = {
      sapphire:  this.layers.sapphire?.position.z  ?? 0,
      bezel:     this.layers.bezel?.position.z      ?? 0,
      dial:      this.layers.dial?.position.z        ?? 0,
      gears:     this.layers.gears?.position.z       ?? 0,
      hands:     this.layers.hands?.position.z       ?? 0,
      movement:  this.layers.movement?.position.z    ?? 0,
      case:      this.layers.case?.position.z        ?? 0,
      caseback:  this.layers.caseback?.position.z    ?? 0,
      rotor:     this.layers.rotor?.position.z       ?? 0,
    };
  }

  toggle() {
    this.setExploded(!this.isExploded);
  }

  setExploded(exploded) {
    this.isExploded      = exploded;
    this.targetProgress  = exploded ? 1 : 0;
  }

  update(dt = 0.016) {
    // Smooth lerp towards target with slow, luxurious horological damping
    const factor = 0.04;
    this.progress += (this.targetProgress - this.progress) * factor;

    // 1. LAYER SEPARATION: Move the macro layers (sapphire, bezel, dial, gears…) along Z
    EXPLODED_LAYERS.forEach(layerMeta => {
      const group = this.layers[layerMeta.id];
      if (!group) return;
      const baseZ   = this.basePositions[layerMeta.id] || 0;
      const targetZ = baseZ + layerMeta.offsetZ;
      group.position.z = baseZ + (targetZ - baseZ) * this.progress;
    });

    // 2. PER-ITEM 3D FAN-OUT: Each clock circle and each individual gear fans out
    // in X, Y, and Z relative to its parent group. This runs on top of the layer
    // separation so you get both the Z-stack AND individual radial spread.
    this.items.forEach(g => {
      if (!g.obj) return;
      g.obj.position.x = g.baseX + g.offsetX * this.progress;
      g.obj.position.y = g.baseY + g.offsetY * this.progress;
      g.obj.position.z = g.baseZ + g.offsetZ * this.progress;
    });

    return this.progress;
  }

  /** Reset all items back to assembled position instantly (no lerp). */
  resetInstant() {
    this.progress       = 0;
    this.targetProgress = 0;

    EXPLODED_LAYERS.forEach(layerMeta => {
      const group = this.layers[layerMeta.id];
      if (group) group.position.z = this.basePositions[layerMeta.id] || 0;
    });

    this.items.forEach(g => {
      if (!g.obj) return;
      g.obj.position.x = g.baseX;
      g.obj.position.y = g.baseY;
      g.obj.position.z = g.baseZ;
    });
  }

  getActiveLayerInfo() {
    return EXPLODED_LAYERS;
  }
}

