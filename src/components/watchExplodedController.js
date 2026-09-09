import { EXPLODED_LAYERS } from '../data/watchSpecs.js';

export class WatchExplodedController {
  constructor(watchLayers) {
    this.layers = watchLayers;
    this.isExploded = false;
    this.progress = 0; // 0 = assembled, 1 = fully exploded
    this.targetProgress = 0;

    // Cache base assembled Z-positions
    this.basePositions = {
      sapphire: this.layers.sapphire.position.z,
      bezel: this.layers.bezel.position.z,
      dial: this.layers.dial.position.z,
      hands: this.layers.hands.position.z,
      movement: this.layers.movement.position.z,
      case: this.layers.case.position.z,
      caseback: this.layers.caseback.position.z,
      rotor: this.layers.rotor.position.z
    };
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
