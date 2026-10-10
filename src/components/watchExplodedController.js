import { EXPLODED_LAYERS } from '../data/watchSpecs.js';

export class WatchExplodedController {
  constructor(watchLayers) {
    this.layers = watchLayers;
    this.isExploded = false;
    this.progress = 0; // 0 = assembled, 1 = fully exploded
    this.targetProgress = 0;

    // Cache base assembled Z-positions
    this.basePositions = {
      sapphire: this.layers.sapphire?.position.z ?? 0,
      bezel: this.layers.bezel?.position.z ?? 0,
      dial: this.layers.dial?.position.z ?? 0,
      hands: this.layers.hands?.position.z ?? 0,
      movement: this.layers.movement?.position.z ?? 0,
      case: this.layers.case?.position.z ?? 0,
      caseback: this.layers.caseback?.position.z ?? 0,
      rotor: this.layers.rotor?.position.z ?? 0
    };
    // Hide gears in assembled state so they never bleed into dial face
    const gearsGroup = this.layers.movement?.userData?.gearsGroup;
    if (gearsGroup) {
      gearsGroup.visible = false;
    }
  }

  toggle() {
    this.setExploded(!this.isExploded);
  }

  setExploded(exploded) {
    this.isExploded = exploded;
    this.targetProgress = exploded ? 1 : 0;
  }

  update(dt = 0.016) {
    // Smooth lerp to target progress
    const factor = 0.08;
    this.progress += (this.targetProgress - this.progress) * factor;

    // Show gears only when exploded past threshold (hidden when assembled)
    const gearsGroup = this.layers.movement?.userData?.gearsGroup;
    if (gearsGroup) {
      gearsGroup.visible = this.progress > 0.02;
    }

    EXPLODED_LAYERS.forEach(layerMeta => {
      const group = this.layers[layerMeta.id];
      if (group) {
        const baseZ = this.basePositions[layerMeta.id] || 0;
        const targetZ = baseZ + layerMeta.offsetZ;
        group.position.z = baseZ + (targetZ - baseZ) * this.progress;
      }
    });

    return this.progress;
  }

  getActiveLayerInfo() {
    return EXPLODED_LAYERS;
  }
}
