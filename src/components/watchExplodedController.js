import { EXPLODED_LAYERS } from '../data/watchSpecs.js';

export class WatchExplodedController {
  /**
   * @param {Object} watchLayers  - Named layer groups (sapphire, bezel, dial, gears, …)
   * @param {Array}  explodableItems - Per-item 3D explosion offsets:
   *   [ { obj: THREE.Object3D, offsetX, offsetY, offsetZ }, … ]
   */
  constructor(watchLayers, explodableItems = [], onPartSnap = null) {
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

    this.isExploded     = false;
    this.progress       = 0;   // 0 = assembled, 1 = fully exploded
    this.targetProgress = 0;

    // Cache layer base positions (both X and Z for horizontal layout)
    this.basePositions = {};
    for (const key in this.layers) {
      if (this.layers[key]) {
        this.basePositions[key] = {
          x: this.layers[key].position.x || 0,
          y: this.layers[key].position.y || 0,
          z: this.layers[key].position.z || 0
        };
      }
    }

    // Map the 6 video exploded layers to 3D groups
    this.layerMapping = {
      dial:       [this.layers.dial, this.layers.sapphire, this.layers.bezel, this.layers.hands],
      tourbillon: [this.layers.gears],
      monobloc:   [this.layers.case],
      barrel:     [],
      baseplate:  [this.layers.movement],
      weight:     [this.layers.rotor, this.layers.caseback]
    };

    this.onPartSnap = onPartSnap;
    this.lastAssembledStage = 0;
  }

  toggle() {
    this.setExploded(!this.isExploded);
  }

  setExploded(exploded) {
    this.isExploded     = exploded;
    this.targetProgress = exploded ? 1 : 0;
  }

  /**
   * Updates layers based on scrollProgress choreography or manual explosion damping.
   * @param {number} dt - delta time
   * @param {number} scrollProgress - global scroll progress (0..1)
   */
  update(dt = 0.016, scrollProgress = -1) {
    // ─── SCROLL-DRIVEN CHOREOGRAPHY (Story narrative chapters) ─────────────
    // When scrolling through the story narrative (0.32 -> 0.58), scroll choreography takes full precedence!
    if (scrollProgress >= 0.32 && scrollProgress <= 0.58) {
      this.isExploded = false;
      return this.updateScrollChoreography(scrollProgress);
    }

    // ─── MANUAL EXPLODE / ASSEMBLE (Interactive Studio Finale at 0.74+) ───
    if (this.isExploded || this.progress > 0.001) {
      // Smooth luxury damping: slightly gentler on assembly so parts converge with stately grace
      const factor = this.isExploded ? 0.045 : 0.035;
      this.progress += (this.targetProgress - this.progress) * factor;

      if (!this.isExploded && this.progress <= 0.002) {
        this.progress = 0;
      }

      for (const k in this.layers) {
        if (this.layers[k]) this.layers[k].visible = true;
      }

      // Acoustic feedback as layers seat into place during assembly
      if (!this.isExploded) {
        const currentStage = Math.floor(this.progress * 6);
        if (currentStage < this.lastAssembledStage) {
          this.lastAssembledStage = currentStage;
          if (this.onPartSnap) {
            this.onPartSnap(6 - currentStage);
          }
        }
      } else {
        this.lastAssembledStage = 6;
      }

      EXPLODED_LAYERS.forEach(layerMeta => {
        const targetGroups = this.layerMapping[layerMeta.id] || (this.layers[layerMeta.id] ? [this.layers[layerMeta.id]] : []);
        targetGroups.forEach(group => {
          if (!group) return;
          const key = Object.keys(this.layers).find(k => this.layers[k] === group);
          const base = this.basePositions[key] || { x: 0, y: 0, z: 0 };
          const targetX = base.x + (layerMeta.offsetX || 0);
          const targetZ = base.z + (layerMeta.offsetZ || 0);
          group.position.x = base.x + (targetX - base.x) * this.progress;
          group.position.y = base.y;
          group.position.z = base.z + (targetZ - base.z) * this.progress;
        });
      });

      this.items.forEach(g => {
        if (!g.obj) return;
        g.obj.position.x = g.baseX + g.offsetX * this.progress;
        g.obj.position.y = g.baseY + g.offsetY * this.progress;
        g.obj.position.z = g.baseZ + g.offsetZ * this.progress;
      });

      return this.progress;
    }

    // ─── DEFAULT ASSEMBLED REST STATE (Chapters outside explode & heart) ───
    this.progress = 0;
    this.lastAssembledStage = 6;
    for (const key in this.layers) {
      const group = this.layers[key];
      const base = this.basePositions[key];
      if (group && base) {
        group.visible = true;
        group.position.x = base.x;
        group.position.y = base.y;
        group.position.z = base.z;
      }
    }

    this.items.forEach(g => {
      if (!g.obj) return;
      g.obj.position.x = g.baseX;
      g.obj.position.y = g.baseY;
      g.obj.position.z = g.baseZ;
    });

    return 0;
  }

  /**
   * Orchestrates the 4 continuous phases:
   * 1. 0.32 -> 0.38 : Horizontal Exploded Fan-out
   * 2. 0.38 -> 0.44 : Exit to Left/Side Screen Edges (Non-gear components glide off-screen!)
   * 3. 0.44 -> 0.48 : Isolated Mechanical Heart (Only gears & movement visible)
   * 4. 0.48 -> 0.56 : Staggered Sequential Re-Assembly (Parts fly in one by one and dock into place!)
   */
  updateScrollChoreography(scrollProgress) {
    const { sapphire, bezel, dial, gears, hands, movement, case: caseGroup, caseback, rotor } = this.layers;
    const baseSapphire = this.basePositions.sapphire || { x: 0, y: 0, z: 0.28 };
    const baseBezel    = this.basePositions.bezel    || { x: 0, y: 0, z: 0.24 };
    const baseDial     = this.basePositions.dial     || { x: 0, y: 0, z: 0 };
    const baseGears    = this.basePositions.gears    || { x: 0, y: 0, z: 0 };
    const baseHands    = this.basePositions.hands    || { x: 0, y: 0, z: 0 };
    const baseMovement = this.basePositions.movement || { x: 0, y: 0, z: 0 };
    const baseCase     = this.basePositions.case     || { x: 0, y: 0, z: 0 };
    const baseCaseback = this.basePositions.caseback || { x: 0, y: 0, z: 0 };
    const baseRotor    = this.basePositions.rotor    || { x: 0, y: 0, z: -0.28 };

    // PHASE 1: Exploded View Fan-out (0.32 -> 0.38)
    if (scrollProgress >= 0.32 && scrollProgress < 0.38) {
      const p = (scrollProgress - 0.32) / 0.06;
      this.progress = p;
      this.lastAssembledStage = 0;

      for (const k in this.layers) {
        if (this.layers[k]) this.layers[k].visible = true;
      }

      EXPLODED_LAYERS.forEach(layerMeta => {
        const targetGroups = this.layerMapping[layerMeta.id] || (this.layers[layerMeta.id] ? [this.layers[layerMeta.id]] : []);
        targetGroups.forEach(group => {
          if (!group) return;
          const key = Object.keys(this.layers).find(k => this.layers[k] === group);
          const base = this.basePositions[key] || { x: 0, y: 0, z: 0 };
          const targetX = base.x + (layerMeta.offsetX || 0);
          const targetZ = base.z + (layerMeta.offsetZ || 0);
          group.position.x = base.x + (targetX - base.x) * p;
          group.position.y = base.y;
          group.position.z = base.z + (targetZ - base.z) * p;
        });
      });

      this.items.forEach(g => {
        if (!g.obj) return;
        g.obj.position.x = g.baseX + g.offsetX * p;
        g.obj.position.y = g.baseY + g.offsetY * p;
        g.obj.position.z = g.baseZ + g.offsetZ * p;
      });

      return p;
    }

    // PHASE 2: Exit to Left/Side Edges (0.38 -> 0.42)
    // Non-gear components glide all the way off the left edge of the screen!
    if (scrollProgress >= 0.38 && scrollProgress < 0.42) {
      const pExit = (scrollProgress - 0.38) / 0.04;
      const easeExit = pExit < 0.5 ? 2 * pExit * pExit : 1 - Math.pow(-2 * pExit + 2, 2) / 2;
      this.lastAssembledStage = 0;

      // Gears & Movement: retract from exploded offsets to center resting calibre
      if (gears) {
        gears.visible = true;
        gears.position.x = baseGears.x + (-2.2) * (1 - easeExit);
        gears.position.y = baseGears.y;
        gears.position.z = baseGears.z + 1.8 * (1 - easeExit);
      }
      if (movement) {
        movement.visible = true;
        movement.position.x = baseMovement.x + 2.0 * (1 - easeExit);
        movement.position.y = baseMovement.y;
        movement.position.z = baseMovement.z - 1.4 * (1 - easeExit);
      }

      // Hide off-screen components only once they have physically exited the viewport
      const isVisibleWhileExiting = pExit < 0.96;

      // Monobloc Case & Strap: slides far to the left
      if (caseGroup) {
        caseGroup.visible = isVisibleWhileExiting;
        caseGroup.position.x = baseCase.x - 0.8 - easeExit * 18.0;
        caseGroup.position.y = baseCase.y;
        caseGroup.position.z = baseCase.z + 0.6 * (1 - easeExit);
      }

      // Bezel: slides to top-left edge
      if (bezel) {
        bezel.visible = isVisibleWhileExiting;
        bezel.position.x = baseBezel.x - 3.8 - easeExit * 16.0;
        bezel.position.y = baseBezel.y + easeExit * 2.8;
        bezel.position.z = baseBezel.z + 2.8 * (1 - easeExit);
      }

      // Sapphire Crystal: slides to top-left edge with slight forward elevation
      if (sapphire) {
        sapphire.visible = isVisibleWhileExiting;
        sapphire.position.x = baseSapphire.x - 3.8 - easeExit * 16.0;
        sapphire.position.y = baseSapphire.y + easeExit * 3.2;
        sapphire.position.z = baseSapphire.z + 2.8 * (1 - easeExit) + easeExit * 2.2;
      }

      // Dial: slides to left edge
      if (dial) {
        dial.visible = isVisibleWhileExiting;
        dial.position.x = baseDial.x - 3.8 - easeExit * 15.0;
        dial.position.y = baseDial.y + easeExit * 1.8;
        dial.position.z = baseDial.z + 2.8 * (1 - easeExit);
      }

      // Hands: slides alongside dial
      if (hands) {
        hands.visible = isVisibleWhileExiting;
        hands.position.x = baseHands.x - 3.8 - easeExit * 15.0;
        hands.position.y = baseHands.y + easeExit * 1.8;
        hands.position.z = baseHands.z + 2.8 * (1 - easeExit);
      }

      // Caseback & Rotor: glides across to bottom-left edge
      if (caseback) {
        caseback.visible = isVisibleWhileExiting;
        caseback.position.x = baseCaseback.x + 3.5 - easeExit * 22.0;
        caseback.position.y = baseCaseback.y - easeExit * 2.2;
        caseback.position.z = baseCaseback.z - 2.6 * (1 - easeExit) - easeExit * 2.0;
      }
      if (rotor) {
        rotor.visible = isVisibleWhileExiting;
        rotor.position.x = baseRotor.x + 3.5 - easeExit * 22.0;
        rotor.position.y = baseRotor.y - easeExit * 2.2;
        rotor.position.z = baseRotor.z - 2.6 * (1 - easeExit) - easeExit * 2.0;
      }

      // Subdial items converge back to local base positions
      this.items.forEach(g => {
        if (!g.obj) return;
        g.obj.position.x = g.baseX + g.offsetX * (1 - easeExit);
        g.obj.position.y = g.baseY + g.offsetY * (1 - easeExit);
        g.obj.position.z = g.baseZ + g.offsetZ * (1 - easeExit);
      });

      return 1 - easeExit;
    }

    // PHASE 3: Isolated Mechanical Heart (0.42 -> 0.48)
    // Pure calibre heartbeat in dark void — all other components remain safely off-screen
    if (scrollProgress >= 0.42 && scrollProgress < 0.48) {
      this.lastAssembledStage = 0;

      if (gears) {
        gears.visible = true;
        gears.position.set(baseGears.x, baseGears.y, baseGears.z);
      }
      if (movement) {
        movement.visible = true;
        movement.position.set(baseMovement.x, baseMovement.y, baseMovement.z);
      }

      // Staged off-screen left, invisible
      if (caseGroup) { caseGroup.visible = false; caseGroup.position.set(baseCase.x - 20, baseCase.y, baseCase.z); }
      if (caseback)  { caseback.visible = false;  caseback.position.set(baseCaseback.x - 20, baseCaseback.y, baseCaseback.z); }
      if (rotor)     { rotor.visible = false;     rotor.position.set(baseRotor.x - 20, baseRotor.y, baseRotor.z); }
      if (dial)      { dial.visible = false;      dial.position.set(baseDial.x - 20, baseDial.y, baseDial.z); }
      if (hands)     { hands.visible = false;     hands.position.set(baseHands.x - 20, baseHands.y, baseHands.z); }
      if (bezel)     { bezel.visible = false;     bezel.position.set(baseBezel.x - 20, baseBezel.y, baseBezel.z); }
      if (sapphire)  { sapphire.visible = false;  sapphire.position.set(baseSapphire.x - 20, baseSapphire.y, baseSapphire.z); }

      this.items.forEach(g => {
        if (!g.obj) return;
        g.obj.position.set(g.baseX, g.baseY, g.baseZ);
      });

      return 0;
    }

    // PHASE 4: Staggered Sequential Re-Assembly (0.48 -> 0.58)
    // Components arrive sequentially from off-screen in authentic horological order!
    if (scrollProgress >= 0.48 && scrollProgress <= 0.58) {
      const pAssemble = (scrollProgress - 0.48) / 0.10;

      function getSubProgress(p, start, end) {
        if (p <= start) return 0;
        if (p >= end) return 1;
        const t = (p - start) / (end - start);
        return 1 - Math.pow(1 - t, 3); // smooth cubic ease-out
      }

      // Core movement & gears already centered
      if (gears) {
        gears.visible = true;
        gears.position.set(baseGears.x, baseGears.y, baseGears.z);
      }
      if (movement) {
        movement.visible = true;
        movement.position.set(baseMovement.x, baseMovement.y, baseMovement.z);
      }

      // 1. Monobloc Case & Strap (Window: 0.00 -> 0.28)
      const t1 = getSubProgress(pAssemble, 0.00, 0.28);
      if (caseGroup) {
        caseGroup.visible = t1 > 0;
        caseGroup.position.x = baseCase.x - (1 - t1) * 18.0;
        caseGroup.position.y = baseCase.y;
        caseGroup.position.z = baseCase.z;
      }

      // 2. Solid Plane Caseback & Rotor (Window: 0.15 -> 0.42)
      const t2 = getSubProgress(pAssemble, 0.15, 0.42);
      if (caseback) {
        caseback.visible = t2 > 0;
        caseback.position.x = baseCaseback.x - (1 - t2) * 16.0;
        caseback.position.y = baseCaseback.y - (1 - t2) * 2.0;
        caseback.position.z = baseCaseback.z - (1 - t2) * 3.5;
      }
      if (rotor) {
        rotor.visible = t2 > 0;
        rotor.position.x = baseRotor.x - (1 - t2) * 16.0;
        rotor.position.y = baseRotor.y - (1 - t2) * 2.0;
        rotor.position.z = baseRotor.z - (1 - t2) * 3.5;
      }

      // 3. Sunburst Guilloché Dial (Window: 0.30 -> 0.58)
      const t3 = getSubProgress(pAssemble, 0.30, 0.58);
      if (dial) {
        dial.visible = t3 > 0;
        dial.position.x = baseDial.x - (1 - t3) * 15.0;
        dial.position.y = baseDial.y + (1 - t3) * 2.4;
        dial.position.z = baseDial.z + (1 - t3) * 2.2;
      }

      // 4. Faceted Dauphine Hands (Window: 0.45 -> 0.72)
      const t4 = getSubProgress(pAssemble, 0.45, 0.72);
      if (hands) {
        hands.visible = t4 > 0;
        hands.position.x = baseHands.x;
        hands.position.y = baseHands.y;
        hands.position.z = baseHands.z + (1 - t4) * 3.8;
      }

      // 5. Sculpted Constellation Bezel (Window: 0.60 -> 0.86)
      const t5 = getSubProgress(pAssemble, 0.60, 0.86);
      if (bezel) {
        bezel.visible = t5 > 0;
        bezel.position.x = baseBezel.x - (1 - t5) * 15.0;
        bezel.position.y = baseBezel.y + (1 - t5) * 2.4;
        bezel.position.z = baseBezel.z;
      }

      // 6. Dual-Domed Sapphire Crystal (Window: 0.74 -> 1.00)
      const t6 = getSubProgress(pAssemble, 0.74, 1.00);
      if (sapphire) {
        sapphire.visible = t6 > 0;
        sapphire.position.x = baseSapphire.x;
        sapphire.position.y = baseSapphire.y;
        sapphire.position.z = baseSapphire.z + (1 - t6) * 4.5;
      }

      // Micro-audio snap triggers when each part locks home
      if (this.onPartSnap) {
        if (t1 >= 0.96 && this.lastAssembledStage < 1) { this.lastAssembledStage = 1; this.onPartSnap(1); }
        else if (t2 >= 0.96 && this.lastAssembledStage < 2) { this.lastAssembledStage = 2; this.onPartSnap(2); }
        else if (t3 >= 0.96 && this.lastAssembledStage < 3) { this.lastAssembledStage = 3; this.onPartSnap(3); }
        else if (t4 >= 0.96 && this.lastAssembledStage < 4) { this.lastAssembledStage = 4; this.onPartSnap(4); }
        else if (t5 >= 0.96 && this.lastAssembledStage < 5) { this.lastAssembledStage = 5; this.onPartSnap(5); }
        else if (t6 >= 0.96 && this.lastAssembledStage < 6) { this.lastAssembledStage = 6; this.onPartSnap(6); }
      }

      this.items.forEach(g => {
        if (!g.obj) return;
        g.obj.position.set(g.baseX, g.baseY, g.baseZ);
      });

      return 0;
    }

    return 0;
  }

  /** Reset all items back to assembled position instantly */
  resetInstant() {
    this.progress       = 0;
    this.targetProgress = 0;
    this.lastAssembledStage = 6;

    for (const key in this.layers) {
      const group = this.layers[key];
      const base = this.basePositions[key];
      if (group && base) {
        group.visible = true;
        group.position.x = base.x;
        group.position.y = base.y;
        group.position.z = base.z;
      }
    }

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


