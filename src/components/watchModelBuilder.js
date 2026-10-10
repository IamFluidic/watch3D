import * as THREE from 'three';
import {
  createDialTexture,
  createBezelTexture,
  createMovementTexture,
  createRotorTexture,
  createFlatCasebackTexture
} from './watchTextureGenerator.js';

export function create3DWatch(edition) {
  const watchRoot = new THREE.Group();

  // Materials Cache for dynamic edition updating with studio PBR realism
  const materials = {
    case: new THREE.MeshStandardMaterial({
      color: new THREE.Color(edition.caseColor),
      metalness: edition.caseMetalness ?? 0.98,
      roughness: edition.caseRoughness ?? 0.16,
      envMapIntensity: 1.8
    }),
    caseback: new THREE.MeshStandardMaterial({
      map: createFlatCasebackTexture(edition),
      metalness: edition.caseMetalness ?? 0.96,
      roughness: 0.22,
      envMapIntensity: 1.8
    }),
    bezelInsert: new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      map: createBezelTexture(edition),
      roughness: edition.caseRoughness ?? 0.18,
      metalness: edition.caseMetalness ?? 0.95,
      envMapIntensity: 1.6,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1
    }),
    dial: new THREE.MeshStandardMaterial({
      map: createDialTexture(edition),
      roughness: 0.32,
      metalness: 0.12,
      side: THREE.DoubleSide,
      depthWrite: true,
      envMapIntensity: 1.4
    }),
    hands: new THREE.MeshStandardMaterial({
      color: new THREE.Color(edition.handsColor),
      metalness: 0.98,
      roughness: 0.08,
      envMapIntensity: 2.2
    }),
    secondsHand: new THREE.MeshStandardMaterial({
      color: new THREE.Color(edition.accentColor || '#38BDF8'),
      metalness: 0.9,
      roughness: 0.12,
      emissive: new THREE.Color(edition.accentColor || '#38BDF8'),
      emissiveIntensity: 0.15,
      envMapIntensity: 2.0
    }),
    lume: new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: new THREE.Color(edition.lumeColor),
      emissiveIntensity: 0.0, // Switched on in night mode
      roughness: 0.4
    }),
    sapphire: new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.12,
      roughness: 0.02,
      metalness: 0.05,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.01,
      depthWrite: false, // Critical: never obscure hands or dial in depth buffer
      side: THREE.FrontSide
    }),
    movement: new THREE.MeshStandardMaterial({
      map: createMovementTexture(),
      metalness: 0.94,
      roughness: 0.18,
      envMapIntensity: 1.8
    }),
    balanceWheel: new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      metalness: 0.98,
      roughness: 0.12,
      envMapIntensity: 2.4
    }),
    rotor: new THREE.MeshStandardMaterial({
      map: createRotorTexture(),
      metalness: 0.92,
      roughness: 0.18,
      transparent: true,
      side: THREE.DoubleSide,
      envMapIntensity: 2.0
    }),
    strap: new THREE.MeshStandardMaterial({
      color: new THREE.Color(edition.strapColor),
      metalness: edition.strapType === 'metal' ? (edition.caseMetalness ?? 0.98) : 0.05,
      roughness: edition.strapType === 'metal' ? 0.22 : 0.75,
      envMapIntensity: 1.6
    }),
    gearBrass: new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      metalness: 0.95,
      roughness: 0.18,
      envMapIntensity: 2.2
    }),
    gearSteel: new THREE.MeshStandardMaterial({
      color: 0xDFE3EA,
      metalness: 0.98,
      roughness: 0.12,
      envMapIntensity: 2.4
    }),
    gearRuby: new THREE.MeshPhysicalMaterial({
      color: 0xE11D48,
      roughness: 0.08,
      metalness: 0.05,
      transmission: 0.6,
      ior: 1.76,
      transparent: true,
      opacity: 0.95
    }),
    bluedScrew: new THREE.MeshStandardMaterial({
      color: 0x1E40AF,
      metalness: 0.92,
      roughness: 0.16,
      envMapIntensity: 2.2
    }),
    chatonGold: new THREE.MeshStandardMaterial({
      color: 0xF59E0B,
      metalness: 0.96,
      roughness: 0.14,
      envMapIntensity: 2.3
    }),
    gearBridge: new THREE.MeshStandardMaterial({
      color: 0xCBD5E1,
      metalness: 0.92,
      roughness: 0.26,
      envMapIntensity: 1.8
    })
  };

  // Groups for each Exploded Layer
  const layerSapphire = new THREE.Group();
  const layerBezel = new THREE.Group();
  const layerDial = new THREE.Group();
  const layerHands = new THREE.Group();
  const layerMovement = new THREE.Group();
  const layerCase = new THREE.Group();
  const layerCaseback = new THREE.Group();
  const layerRotor = new THREE.Group();

  // Reference collection for the Exploded Controller
  const layers = {
    sapphire: layerSapphire,
    bezel: layerBezel,
    dial: layerDial,
    hands: layerHands,
    movement: layerMovement,
    case: layerCase,
    caseback: layerCaseback,
    rotor: layerRotor
  };

  // -------------------------------------------------------------
  // 1. SAPPHIRE CRYSTAL LAYER (Ultra-Clear Dual Domed)
  // -------------------------------------------------------------
  const sapphireGeom = new THREE.CircleGeometry(2.35, 64);
  const sapphireMesh = new THREE.Mesh(sapphireGeom, materials.sapphire);
  sapphireMesh.position.z = 0.28;
  layerSapphire.add(sapphireMesh);

  // Subtle steel retention rim seated neatly on the sapphire edge (never colliding with bezel hole at r=2.36)
  const rimGeom = new THREE.TorusGeometry(2.345, 0.010, 16, 64);
  const rimMesh = new THREE.Mesh(rimGeom, materials.case);
  rimMesh.position.z = 0.28;
  layerSapphire.add(rimMesh);

  // -------------------------------------------------------------
  // 2. CERAMIC & STEEL BEZEL LAYER (With 6 Authentic Slotted Screws)
  // -------------------------------------------------------------
  // Bezel steel outer ring (HOLLOW ring with radius 2.36 cutout in middle)
  const bezelShape = new THREE.Shape();
  bezelShape.absarc(0, 0, 2.65, 0, Math.PI * 2, false);
  const bezelHole = new THREE.Path();
  bezelHole.absarc(0, 0, 2.36, 0, Math.PI * 2, true);
  bezelShape.holes.push(bezelHole);

  const bezelSteelGeom = new THREE.ExtrudeGeometry(bezelShape, {
    depth: 0.18,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: 0.015,
    bevelThickness: 0.015,
    curveSegments: 64
  });
  const bezelSteelMesh = new THREE.Mesh(bezelSteelGeom, materials.case);
  bezelSteelMesh.position.z = -0.08;
  layerBezel.add(bezelSteelMesh);

  // Ceramic / Steel insert ring (HOLLOW ring from 2.37 to 2.63 with satin finish)
  // Positioned proud at z = 0.122 above bezelSteelMesh top face (0.115) to prevent coplanar z-fighting
  const ceramicGeom = new THREE.RingGeometry(2.37, 2.63, 64);
  const ceramicMesh = new THREE.Mesh(ceramicGeom, materials.bezelInsert);
  ceramicMesh.position.z = 0.122;
  layerBezel.add(ceramicMesh);

  // 6 Authentic Slotted Bezel Screws (matching Royal Oak / 60fps design)
  const screwGeom = new THREE.CylinderGeometry(0.045, 0.045, 0.03, 16);
  const slotGeom = new THREE.BoxGeometry(0.07, 0.012, 0.035);
  const slotMat = new THREE.MeshBasicMaterial({ color: 0x11161F });

  for (let i = 0; i < 6; i++) {
    const angle = ((i * 60 + 30) * Math.PI) / 180;
    const sr = 2.505;
    const sx = Math.cos(angle) * sr;
    const sy = Math.sin(angle) * sr;

    const screwGroup = new THREE.Group();
    screwGroup.position.set(sx, sy, 0.130);
    screwGroup.rotation.z = angle + Math.PI / 4;

    const sMesh = new THREE.Mesh(screwGeom, materials.case);
    sMesh.rotation.x = Math.PI / 2;
    screwGroup.add(sMesh);

    const slMesh = new THREE.Mesh(slotGeom, slotMat);
    slMesh.position.z = 0.012;
    screwGroup.add(slMesh);

    layerBezel.add(screwGroup);
  }

  layerBezel.position.z = 0.24;

  // -------------------------------------------------------------
  // 3. DIAL LAYER (Clean high-resolution guilloché dial)
  // -------------------------------------------------------------
  const dialGeom = new THREE.CircleGeometry(2.35, 64);
  const dialMesh = new THREE.Mesh(dialGeom, materials.dial);
  layerDial.add(dialMesh);

  // Central axle collar
  const dialCollarGeom = new THREE.CylinderGeometry(0.18, 0.18, 0.02, 32);
  const dialCollarMesh = new THREE.Mesh(dialCollarGeom, materials.case);
  dialCollarMesh.rotation.x = Math.PI / 2;
  dialCollarMesh.position.z = 0.01;
  layerDial.add(dialCollarMesh);

  layerDial.position.z = 0.10;

  // -------------------------------------------------------------
  // 4. HANDS LAYER (3D Faceted Dauphine Hands & Cyan Sweep Seconds)
  // -------------------------------------------------------------
  const handsGroup = new THREE.Group();

  // Central Cannon Pinion & Cap
  const pinionGeom = new THREE.CylinderGeometry(0.14, 0.14, 0.16, 32);
  const pinionMesh = new THREE.Mesh(pinionGeom, materials.hands);
  pinionMesh.rotation.x = Math.PI / 2;
  pinionMesh.position.z = 0.10;
  handsGroup.add(pinionMesh);

  // Hour Hand (Faceted 3D Dauphine Hand)
  const hourHandGroup = new THREE.Group();
  const hourShape = new THREE.Shape();
  hourShape.moveTo(0, -0.25);
  hourShape.lineTo(-0.11, 0.35);
  hourShape.lineTo(-0.02, 1.28);
  hourShape.lineTo(0, 1.35);
  hourShape.lineTo(0.02, 1.28);
  hourShape.lineTo(0.11, 0.35);
  hourShape.closePath();

  const hourHandGeom = new THREE.ExtrudeGeometry(hourShape, {
    depth: 0.035,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: 0.012,
    bevelThickness: 0.012
  });
  const hourHandMesh = new THREE.Mesh(hourHandGeom, materials.hands);
  hourHandGroup.add(hourHandMesh);

  // Hour lume insert
  const hourLumeGeom = new THREE.BoxGeometry(0.05, 0.65, 0.04);
  const hourLumeMesh = new THREE.Mesh(hourLumeGeom, materials.lume);
  hourLumeMesh.position.set(0, 0.65, 0.02);
  hourHandGroup.add(hourLumeMesh);
  handsGroup.add(hourHandGroup);

  // Minute Hand (Longer, Sleek, 3D Dauphine Hand)
  const minuteHandGroup = new THREE.Group();
  const minuteShape = new THREE.Shape();
  minuteShape.moveTo(0, -0.3);
  minuteShape.lineTo(-0.09, 0.45);
  minuteShape.lineTo(-0.02, 1.9);
  minuteShape.lineTo(0, 1.98);
  minuteShape.lineTo(0.02, 1.9);
  minuteShape.lineTo(0.09, 0.45);
  minuteShape.closePath();

  const minuteHandGeom = new THREE.ExtrudeGeometry(minuteShape, {
    depth: 0.035,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: 0.012,
    bevelThickness: 0.012
  });
  const minuteHandMesh = new THREE.Mesh(minuteHandGeom, materials.hands);
  minuteHandMesh.position.z = 0.04;
  minuteHandGroup.add(minuteHandMesh);

  // Minute lume insert
  const minuteLumeGeom = new THREE.BoxGeometry(0.045, 1.15, 0.04);
  const minuteLumeMesh = new THREE.Mesh(minuteLumeGeom, materials.lume);
  minuteLumeMesh.position.set(0, 1.05, 0.06);
  minuteHandGroup.add(minuteLumeMesh);
  handsGroup.add(minuteHandGroup);

  // Sweep Seconds Hand (Needle Thin, Cyan Accent, 4Hz Sweep)
  const secondHandGroup = new THREE.Group();
  const secondShape = new THREE.Shape();
  secondShape.moveTo(-0.02, -0.6);
  secondShape.lineTo(0.02, -0.6);
  secondShape.lineTo(0.012, 2.15);
  secondShape.lineTo(0, 2.22);
  secondShape.lineTo(-0.012, 2.15);
  secondShape.closePath();

  const secondGeom = new THREE.ExtrudeGeometry(secondShape, {
    depth: 0.02,
    bevelEnabled: false
  });
  const secondMesh = new THREE.Mesh(secondGeom, materials.secondsHand);
  secondHandGroup.add(secondMesh);

  // Counterweight ring
  const counterweightGeom = new THREE.TorusGeometry(0.12, 0.03, 16, 32);
  const counterweightMesh = new THREE.Mesh(counterweightGeom, materials.secondsHand);
  counterweightMesh.position.y = -0.38;
  secondHandGroup.add(counterweightMesh);

  // Luminous lollipop pip near seconds tip
  const secondLumeGeom = new THREE.CircleGeometry(0.05, 16);
  const secondLumeMesh = new THREE.Mesh(secondLumeGeom, materials.lume);
  secondLumeMesh.position.set(0, 1.7, 0.025);
  secondHandGroup.add(secondLumeMesh);

  secondHandGroup.position.z = 0.08;
  handsGroup.add(secondHandGroup);

  layerHands.add(handsGroup);
  layerHands.position.z = 0.16;

  // -------------------------------------------------------------
  // 5. CALIBRE MOVEMENT ENGINE & INTEGRATED 3D GEAR TRAIN
  // Unified engine layer directly below the clock face (dial),
  // featuring thick machined 3D gears driving the watch hands.
  // -------------------------------------------------------------
  // Movement Mainplate
  const movementPlateGeom = new THREE.CylinderGeometry(2.32, 2.32, 0.22, 64);
  const movementPlateMesh = new THREE.Mesh(movementPlateGeom, materials.movement);
  movementPlateMesh.rotation.x = Math.PI / 2;
  movementPlateMesh.position.z = -0.11;
  layerMovement.add(movementPlateMesh);

  // Group for all motion works gears on the front of the movement plate
  const gearsGroup = new THREE.Group();
  gearsGroup.visible = false; // Concealed when assembled; revealed when exploded
  layerMovement.add(gearsGroup);
  layerMovement.userData.gearsGroup = gearsGroup;

  // Helper: Create circular watch gear profile with realistic cut teeth and spoke cutouts
  function createGearShape({
    teeth = 24,
    outerRadius = 1.0,
    rootRadius = 0.85,
    innerRadius = 0.15,
    spokeCount = 4,
    hubRadius = 0.32,
    rimWidth = 0.10
  }) {
    const shape = new THREE.Shape();
    const dTheta = (Math.PI * 2) / teeth;
    const toothTipRatio = 0.30;
    const toothBaseRatio = 0.58;

    for (let i = 0; i < teeth; i++) {
      const a0 = i * dTheta;
      const a1 = a0 + dTheta * ((1 - toothBaseRatio) * 0.5);
      const a2 = a0 + dTheta * ((1 - toothTipRatio) * 0.5);
      const a3 = a0 + dTheta * (1 - (1 - toothTipRatio) * 0.5);
      const a4 = a0 + dTheta * (1 - (1 - toothBaseRatio) * 0.5);

      const x1 = Math.cos(a1) * rootRadius;
      const y1 = Math.sin(a1) * rootRadius;
      const x2 = Math.cos(a2) * outerRadius;
      const y2 = Math.sin(a2) * outerRadius;
      const x3 = Math.cos(a3) * outerRadius;
      const y3 = Math.sin(a3) * outerRadius;
      const x4 = Math.cos(a4) * rootRadius;
      const y4 = Math.sin(a4) * rootRadius;

      if (i === 0) shape.moveTo(x1, y1);
      else shape.lineTo(x1, y1);
      shape.lineTo(x2, y2);
      shape.lineTo(x3, y3);
      shape.lineTo(x4, y4);
    }
    shape.closePath();

    // Spoke window cutouts (horological skeletonized crossings)
    if (spokeCount > 0 && hubRadius < (rootRadius - rimWidth - 0.05)) {
      const cutoutInnerR = hubRadius + 0.04;
      const cutoutOuterR = rootRadius - rimWidth;
      const windowSpan = (Math.PI * 2) / spokeCount;
      const spokeAngle = 0.22;

      for (let s = 0; s < spokeCount; s++) {
        const aStart = s * windowSpan + spokeAngle * 0.5;
        const aEnd = (s + 1) * windowSpan - spokeAngle * 0.5;
        if (aEnd <= aStart) continue;

        const hole = new THREE.Path();
        hole.absarc(0, 0, cutoutInnerR, aStart, aEnd, false);
        hole.lineTo(Math.cos(aEnd) * cutoutOuterR, Math.sin(aEnd) * cutoutOuterR);
        hole.absarc(0, 0, cutoutOuterR, aEnd, aStart, true);
        hole.closePath();
        shape.holes.push(hole);
      }
    }

    // Central axle hole
    if (innerRadius > 0) {
      const centerHole = new THREE.Path();
      centerHole.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);
      shape.holes.push(centerHole);
    }

    return shape;
  }

  // Thick, substantial 3D gear extrusion with pronounced beveled teeth
  function createGearMesh(shape, depth = 0.055, material, bevelSize = 0.008) {
    const geom = new THREE.ExtrudeGeometry(shape, {
      depth: depth,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: bevelSize,
      bevelThickness: bevelSize,
      curveSegments: 24
    });
    return new THREE.Mesh(geom, material);
  }

  function createLeafPinionMesh(teeth, outerR, rootR, depth = 0.045, material) {
    const shape = new THREE.Shape();
    const dTheta = (Math.PI * 2) / teeth;
    for (let i = 0; i < teeth; i++) {
      const a0 = i * dTheta;
      const a1 = a0 + dTheta * 0.2;
      const a2 = a0 + dTheta * 0.5;
      const a3 = a0 + dTheta * 0.8;
      const x0 = Math.cos(a0) * rootR;
      const y0 = Math.sin(a0) * rootR;
      const x1 = Math.cos(a1) * outerR;
      const y1 = Math.sin(a1) * outerR;
      const x2 = Math.cos(a2) * outerR;
      const y2 = Math.sin(a2) * outerR;
      const x3 = Math.cos(a3) * rootR;
      const y3 = Math.sin(a3) * rootR;
      if (i === 0) shape.moveTo(x0, y0);
      else shape.lineTo(x0, y0);
      shape.lineTo(x1, y1);
      shape.lineTo(x2, y2);
      shape.lineTo(x3, y3);
    }
    shape.closePath();
    const geom = new THREE.ExtrudeGeometry(shape, {
      depth: depth,
      bevelEnabled: false
    });
    return new THREE.Mesh(geom, material);
  }

  function createRubyJewelMesh(x, y, z) {
    const group = new THREE.Group();
    group.position.set(x, y, z);

    const chatonGeom = new THREE.CylinderGeometry(0.09, 0.09, 0.02, 16);
    const chaton = new THREE.Mesh(chatonGeom, materials.chatonGold);
    chaton.rotation.x = Math.PI / 2;
    group.add(chaton);

    const rubyGeom = new THREE.CylinderGeometry(0.060, 0.060, 0.025, 16);
    const ruby = new THREE.Mesh(rubyGeom, materials.gearRuby);
    ruby.rotation.x = Math.PI / 2;
    ruby.position.z = 0.005;
    group.add(ruby);

    const pinGeom = new THREE.CylinderGeometry(0.022, 0.022, 0.035, 12);
    const pin = new THREE.Mesh(pinGeom, materials.gearSteel);
    pin.rotation.x = Math.PI / 2;
    pin.position.z = 0.010;
    group.add(pin);

    // 2 micro blued screws
    const screwGeom = new THREE.CylinderGeometry(0.022, 0.022, 0.02, 10);
    const screw1 = new THREE.Mesh(screwGeom, materials.bluedScrew);
    screw1.rotation.x = Math.PI / 2;
    screw1.position.set(-0.11, 0, 0.005);
    group.add(screw1);

    const screw2 = new THREE.Mesh(screwGeom, materials.bluedScrew);
    screw2.rotation.x = Math.PI / 2;
    screw2.position.set(0.11, 0, 0.005);
    group.add(screw2);

    return group;
  }

  // --- Gear 1: Hour Wheel (Thick 3D Brass Gear directly driving Hour Hand) ---
  const hourWheelGroup = new THREE.Group();
  const hourGearShape = createGearShape({
    teeth: 42,
    outerRadius: 1.05,
    rootRadius: 0.92,
    innerRadius: 0.22,
    spokeCount: 4,
    hubRadius: 0.38,
    rimWidth: 0.09
  });
  const hourGearMesh = createGearMesh(hourGearShape, 0.055, materials.gearBrass, 0.008);
  hourWheelGroup.add(hourGearMesh);

  // Center Hour Pipe / Collar (supports hour hand)
  const hourPipeGeom = new THREE.CylinderGeometry(0.22, 0.22, 0.05, 32);
  const hourPipe = new THREE.Mesh(hourPipeGeom, materials.gearBrass);
  hourPipe.rotation.x = Math.PI / 2;
  hourPipe.position.z = 0.035;
  hourWheelGroup.add(hourPipe);
  hourWheelGroup.position.set(0, 0, 0.035);
  gearsGroup.add(hourWheelGroup);

  // --- Gear 2: Cannon Pinion & Center Wheel (Thick Steel Gear directly driving Minute Hand) ---
  const cannonPinionGroup = new THREE.Group();
  const cannonGearShape = createGearShape({
    teeth: 26,
    outerRadius: 0.62,
    rootRadius: 0.52,
    innerRadius: 0.14,
    spokeCount: 3,
    hubRadius: 0.26,
    rimWidth: 0.07
  });
  const cannonGearMesh = createGearMesh(cannonGearShape, 0.055, materials.gearSteel, 0.007);
  cannonPinionGroup.add(cannonGearMesh);

  // Center Minute Arbor Sleeve (steel tube that reaches minute hand)
  const cannonSleeveGeom = new THREE.CylinderGeometry(0.14, 0.14, 0.055, 32);
  const cannonSleeve = new THREE.Mesh(cannonSleeveGeom, materials.gearSteel);
  cannonSleeve.rotation.x = Math.PI / 2;
  cannonSleeve.position.z = 0.038;
  cannonPinionGroup.add(cannonSleeve);
  cannonPinionGroup.position.set(0, 0, 0.015);
  gearsGroup.add(cannonPinionGroup);

  // --- Gear 3: Fourth Wheel (Thick 3D Wheel directly driving 4Hz Sweep Seconds Hand) ---
  const fourthWheelGroup = new THREE.Group();
  const fourthGearShape = createGearShape({
    teeth: 56,
    outerRadius: 0.92,
    rootRadius: 0.82,
    innerRadius: 0.10,
    spokeCount: 5,
    hubRadius: 0.28,
    rimWidth: 0.08
  });
  const fourthGearMesh = createGearMesh(fourthGearShape, 0.050, materials.gearBrass, 0.007);
  fourthWheelGroup.add(fourthGearMesh);

  // Fine needle arbor for sweep seconds
  const secondsPinGeom = new THREE.CylinderGeometry(0.045, 0.045, 0.08, 16);
  const secondsPin = new THREE.Mesh(secondsPinGeom, materials.gearSteel);
  secondsPin.rotation.x = Math.PI / 2;
  secondsPin.position.z = 0.040;
  fourthWheelGroup.add(secondsPin);
  fourthWheelGroup.position.set(0, 0, -0.015);
  gearsGroup.add(fourthWheelGroup);

  // --- Gear 4: Minute Wheel & Leaf Pinion (Thick Motion Works 12:1 Reduction) ---
  const minuteWheelGroup = new THREE.Group();
  const minuteWheelShape = createGearShape({
    teeth: 32,
    outerRadius: 0.76,
    rootRadius: 0.65,
    innerRadius: 0.09,
    spokeCount: 4,
    hubRadius: 0.28,
    rimWidth: 0.08
  });
  const minuteWheelMesh = createGearMesh(minuteWheelShape, 0.055, materials.gearBrass, 0.007);
  minuteWheelGroup.add(minuteWheelMesh);

  // Stacked thick steel leaf pinion (12 leaves, meshes with hour wheel)
  const leafPinionMesh = createLeafPinionMesh(12, 0.28, 0.20, 0.045, materials.gearSteel);
  leafPinionMesh.position.z = 0.030;
  minuteWheelGroup.add(leafPinionMesh);

  // Polished cap with jewel
  const minCapGeom = new THREE.CylinderGeometry(0.08, 0.08, 0.020, 16);
  const minCap = new THREE.Mesh(minCapGeom, materials.gearSteel);
  minCap.rotation.x = Math.PI / 2;
  minCap.position.z = 0.055;
  minuteWheelGroup.add(minCap);

  minuteWheelGroup.position.set(0.82, -0.48, 0.015);
  gearsGroup.add(minuteWheelGroup);

  // --- Gear 5: Third Wheel (Thick Intermediate Train Wheel) ---
  const thirdWheelGroup = new THREE.Group();
  const thirdWheelShape = createGearShape({
    teeth: 30,
    outerRadius: 0.74,
    rootRadius: 0.63,
    innerRadius: 0.09,
    spokeCount: 4,
    hubRadius: 0.28,
    rimWidth: 0.08
  });
  const thirdWheelMesh = createGearMesh(thirdWheelShape, 0.050, materials.gearBrass, 0.007);
  thirdWheelGroup.add(thirdWheelMesh);

  const thirdPinionMesh = createLeafPinionMesh(10, 0.24, 0.16, 0.040, materials.gearSteel);
  thirdPinionMesh.position.z = -0.035;
  thirdWheelGroup.add(thirdPinionMesh);

  thirdWheelGroup.position.set(-0.78, 0.55, -0.012);
  gearsGroup.add(thirdWheelGroup);

  // --- Gear 6: Escape Wheel & Pallet Assembly (Thick 4Hz Escapement Beat) ---
  const escapeWheelGroup = new THREE.Group();
  const escapeShape = new THREE.Shape();
  const escTeeth = 15;
  const escDTheta = (Math.PI * 2) / escTeeth;
  const escOuterR = 0.50;
  const escRootR = 0.36;
  for (let i = 0; i < escTeeth; i++) {
    const a0 = i * escDTheta;
    const aRoot = a0;
    const aClub = a0 + escDTheta * 0.65;
    const aTip = a0 + escDTheta * 0.75;
    const aDrop = a0 + escDTheta * 0.85;

    const xRoot = Math.cos(aRoot) * escRootR;
    const yRoot = Math.sin(aRoot) * escRootR;
    const xClub = Math.cos(aClub) * (escOuterR * 0.94);
    const yClub = Math.sin(aClub) * (escOuterR * 0.94);
    const xTip = Math.cos(aTip) * escOuterR;
    const yTip = Math.sin(aTip) * escOuterR;
    const xDrop = Math.cos(aDrop) * (escRootR * 1.05);
    const yDrop = Math.sin(aDrop) * (escRootR * 1.05);

    if (i === 0) escapeShape.moveTo(xRoot, yRoot);
    else escapeShape.lineTo(xRoot, yRoot);
    escapeShape.lineTo(xClub, yClub);
    escapeShape.lineTo(xTip, yTip);
    escapeShape.lineTo(xDrop, yDrop);
  }
  escapeShape.closePath();

  for (let s = 0; s < 3; s++) {
    const aStart = s * (Math.PI * 2 / 3) + 0.32;
    const aEnd = (s + 1) * (Math.PI * 2 / 3) - 0.32;
    const hole = new THREE.Path();
    hole.absarc(0, 0, 0.16, aStart, aEnd, false);
    hole.lineTo(Math.cos(aEnd) * 0.30, Math.sin(aEnd) * 0.30);
    hole.absarc(0, 0, 0.30, aEnd, aStart, true);
    hole.closePath();
    escapeShape.holes.push(hole);
  }
  const escCenterHole = new THREE.Path();
  escCenterHole.absarc(0, 0, 0.08, 0, Math.PI * 2, true);
  escapeShape.holes.push(escCenterHole);

  const escapeMesh = createGearMesh(escapeShape, 0.045, materials.gearSteel, 0.006);
  escapeWheelGroup.add(escapeMesh);

  const palletGroup = new THREE.Group();
  const palletBodyGeom = new THREE.BoxGeometry(0.38, 0.07, 0.040);
  const palletBody = new THREE.Mesh(palletBodyGeom, materials.gearSteel);
  palletGroup.add(palletBody);

  const rubyPalletGeom = new THREE.BoxGeometry(0.04, 0.06, 0.045);
  const rubyP1 = new THREE.Mesh(rubyPalletGeom, materials.gearRuby);
  rubyP1.position.set(-0.16, 0.03, 0.005);
  palletGroup.add(rubyP1);
  const rubyP2 = new THREE.Mesh(rubyPalletGeom, materials.gearRuby);
  rubyP2.position.set(0.16, 0.03, 0.005);
  palletGroup.add(rubyP2);

  palletGroup.position.set(0.24, 0.34, 0.005);
  escapeWheelGroup.add(palletGroup);

  escapeWheelGroup.position.set(-1.15, -0.25, -0.012);
  gearsGroup.add(escapeWheelGroup);

  // --- Gear 7: Winding & Crown Transmission Gears (Keyless Works) ---
  const windingGroup = new THREE.Group();
  const crownGearShape = createGearShape({
    teeth: 20,
    outerRadius: 0.48,
    rootRadius: 0.40,
    innerRadius: 0.10,
    spokeCount: 3,
    hubRadius: 0.22,
    rimWidth: 0.06
  });
  const crownGearMesh = createGearMesh(crownGearShape, 0.050, materials.gearSteel, 0.006);
  crownGearMesh.position.set(1.42, 0.22, 0.005);
  windingGroup.add(crownGearMesh);

  const transGearShape = createGearShape({
    teeth: 24,
    outerRadius: 0.40,
    rootRadius: 0.32,
    innerRadius: 0.09,
    spokeCount: 3,
    hubRadius: 0.18,
    rimWidth: 0.05
  });
  const transGearMesh = createGearMesh(transGearShape, 0.045, materials.gearSteel, 0.006);
  transGearMesh.position.set(1.85, 0.06, 0.005);
  windingGroup.add(transGearMesh);

  const windScrew1 = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.030, 16), materials.bluedScrew);
  windScrew1.rotation.x = Math.PI / 2;
  windScrew1.position.set(1.42, 0.22, 0.035);
  windingGroup.add(windScrew1);

  const windScrew2 = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.030, 16), materials.bluedScrew);
  windScrew2.rotation.x = Math.PI / 2;
  windScrew2.position.set(1.85, 0.06, 0.035);
  windingGroup.add(windScrew2);

  gearsGroup.add(windingGroup);

  // --- Motion Works Bridge Plate (Sculpted satin plate under the gears) ---
  const bridgePlateShape = new THREE.Shape();
  bridgePlateShape.absarc(0, 0, 2.30, 0, Math.PI * 2, false);
  const balanceAperture = new THREE.Path();
  balanceAperture.absarc(-0.7, -0.6, 0.65, 0, Math.PI * 2, true);
  bridgePlateShape.holes.push(balanceAperture);

  const bridgePlateGeom = new THREE.ExtrudeGeometry(bridgePlateShape, {
    depth: 0.035,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: 0.015,
    bevelThickness: 0.015,
    curveSegments: 48
  });
  const bridgePlateMesh = new THREE.Mesh(bridgePlateGeom, materials.gearBridge);
  bridgePlateMesh.position.z = -0.040;
  gearsGroup.add(bridgePlateMesh);

  // Authentic Ruby Jewel Bearings on the plate
  gearsGroup.add(createRubyJewelMesh(0.82, -0.48, -0.025));
  gearsGroup.add(createRubyJewelMesh(-0.78, 0.55, -0.025));
  gearsGroup.add(createRubyJewelMesh(-1.15, -0.25, -0.025));
  gearsGroup.add(createRubyJewelMesh(0.55, 0.72, -0.025));

  // Rotating Balance Wheel with hairspring (on back of movement plate)
  const balanceWheelGroup = new THREE.Group();
  const balanceRimGeom = new THREE.TorusGeometry(0.5, 0.03, 16, 32);
  const balanceRimMesh = new THREE.Mesh(balanceRimGeom, materials.balanceWheel);
  balanceWheelGroup.add(balanceRimMesh);

  // Three balance spokes
  for (let s = 0; s < 3; s++) {
    const spokeGeom = new THREE.BoxGeometry(0.04, 0.48, 0.02);
    const spokeMesh = new THREE.Mesh(spokeGeom, materials.balanceWheel);
    spokeMesh.rotation.z = (s * Math.PI * 2) / 3;
    balanceWheelGroup.add(spokeMesh);
  }
  balanceWheelGroup.position.set(-0.7, -0.6, -0.22);
  layerMovement.add(balanceWheelGroup);
  layerMovement.position.z = -0.05;

  // -------------------------------------------------------------
  // 6. MAIN MIDDLE CASE & BRACELET
  // -------------------------------------------------------------
  const caseGroup = new THREE.Group();

  // Hollow Middle Case Shape (from outer 2.65 to inner 2.35)
  const caseShape = new THREE.Shape();
  caseShape.absarc(0, 0, 2.65, 0, Math.PI * 2, false);
  const caseHole = new THREE.Path();
  caseHole.absarc(0, 0, 2.35, 0, Math.PI * 2, true);
  caseShape.holes.push(caseHole);

  const caseBarrelGeom = new THREE.ExtrudeGeometry(caseShape, {
    depth: 0.46,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: 0.015,
    bevelThickness: 0.015,
    curveSegments: 64
  });
  const caseBarrelMesh = new THREE.Mesh(caseBarrelGeom, materials.case);
  caseBarrelMesh.position.z = -0.28;
  caseGroup.add(caseBarrelMesh);

  // 4 Chamfered Lugs (positioned outside the case and behind bezel)
  const lugGeom = new THREE.BoxGeometry(0.32, 1.1, 0.35);
  const lugPositions = [
    { x: -1.45, y: 2.55, z: -0.15 },
    { x: 1.45, y: 2.55, z: -0.15 },
    { x: -1.45, y: -2.55, z: -0.15 },
    { x: 1.45, y: -2.55, z: -0.15 }
  ];
  lugPositions.forEach(pos => {
    const lugMesh = new THREE.Mesh(lugGeom, materials.case);
    lugMesh.position.set(pos.x, pos.y, pos.z);
    lugMesh.rotation.z = (pos.x > 0 ? -1 : 1) * (pos.y > 0 ? 0.18 : -0.18);
    caseGroup.add(lugMesh);
  });

  // Fluted Winding Crown at 3 o'clock
  const crownGeom = new THREE.CylinderGeometry(0.32, 0.32, 0.35, 24);
  const crownMesh = new THREE.Mesh(crownGeom, materials.case);
  crownMesh.rotation.z = Math.PI / 2;
  crownMesh.position.set(2.82, 0, 0);
  caseGroup.add(crownMesh);

  // Crown Guards
  const guardGeom = new THREE.BoxGeometry(0.3, 0.45, 0.35);
  const guardTop = new THREE.Mesh(guardGeom, materials.case);
  guardTop.position.set(2.62, 0.4, 0);
  caseGroup.add(guardTop);
  const guardBottom = new THREE.Mesh(guardGeom, materials.case);
  guardBottom.position.set(2.62, -0.4, 0);
  caseGroup.add(guardBottom);

  // Metallic Oyster Bracelet or Leather Strap
  buildBracelet(caseGroup, materials.strap, edition.strapType);

  layerCase.add(caseGroup);
  layerCase.position.z = -0.05;

  // -------------------------------------------------------------
  // 7. FLAT PLAIN CASEBACK (Engraved "ALUNA" in italic & "A3016")
  // -------------------------------------------------------------
  const casebackGroup = new THREE.Group();

  // Flat plane circular caseback disc with engraved ALUNA and A3016
  const casebackDiscGeom = new THREE.CircleGeometry(2.35, 64);
  const casebackDiscMesh = new THREE.Mesh(casebackDiscGeom, materials.caseback);
  casebackDiscMesh.rotation.y = Math.PI; // Faces directly backward
  casebackDiscMesh.position.z = -0.31;
  casebackGroup.add(casebackDiscMesh);

  // Outer beveled retaining lip
  const casebackRimGeom = new THREE.TorusGeometry(2.35, 0.05, 16, 64);
  const casebackRimMesh = new THREE.Mesh(casebackRimGeom, materials.case);
  casebackRimMesh.position.z = -0.31;
  casebackGroup.add(casebackRimMesh);

  layerCaseback.add(casebackGroup);
  layerCaseback.position.z = 0;

  // -------------------------------------------------------------
  // 8. OSCILLATING ROTOR LAYER (Plate removed per design)
  // -------------------------------------------------------------
  // Keep layerRotor as an empty group so external references stay safe
  layerRotor.position.z = -0.28;

  // Assemble all layers into watch root
  watchRoot.add(layerSapphire);
  watchRoot.add(layerBezel);
  watchRoot.add(layerDial);
  watchRoot.add(layerHands);
  watchRoot.add(layerMovement);
  watchRoot.add(layerCase);
  watchRoot.add(layerCaseback);
  watchRoot.add(layerRotor);

  // Public controllers & animation handles
  return {
    root: watchRoot,
    layers,
    materials,
    hands: {
      hour: hourHandGroup,
      minute: minuteHandGroup,
      second: secondHandGroup
    },
    gears: {
      group: gearsGroup,
      hourWheel: hourWheelGroup,
      cannonPinion: cannonPinionGroup,
      minuteWheel: minuteWheelGroup,
      fourthWheel: fourthWheelGroup,
      thirdWheel: thirdWheelGroup,
      escapeWheel: escapeWheelGroup,
      palletFork: palletGroup
    },
    balanceWheel: balanceWheelGroup,
    rotor: layerRotor,
    updateEdition(newEdition) {
      materials.case.color.set(newEdition.caseColor);
      materials.case.metalness = newEdition.caseMetalness;
      materials.case.roughness = newEdition.caseRoughness;

      // Update outer bezel ring color to match edition
      materials.bezelInsert.color.set(0xffffff);
      materials.bezelInsert.map = createBezelTexture(newEdition);
      materials.bezelInsert.map.needsUpdate = true;
      materials.bezelInsert.roughness = newEdition.caseRoughness ?? 0.18;
      materials.bezelInsert.metalness = newEdition.caseMetalness ?? 0.95;

      materials.caseback.map = createFlatCasebackTexture(newEdition);
      materials.caseback.map.needsUpdate = true;

      materials.dial.map = createDialTexture(newEdition);
      materials.dial.map.needsUpdate = true;

      materials.hands.color.set(newEdition.handsColor);
      materials.secondsHand.color.set(newEdition.accentColor || '#38BDF8');
      materials.secondsHand.emissive.set(newEdition.accentColor || '#38BDF8');
      materials.lume.emissive.set(newEdition.lumeColor);

      materials.strap.color.set(newEdition.strapColor);
      materials.strap.metalness = newEdition.strapType === 'metal' ? newEdition.caseMetalness : 0.05;
      materials.strap.roughness = newEdition.strapType === 'metal' ? 0.3 : 0.8;
    },
    setNightLume(enabled) {
      materials.lume.emissiveIntensity = enabled ? 2.5 : 0.0;
      materials.secondsHand.emissiveIntensity = enabled ? 1.8 : 0.1;
    }
  };
}

function buildBracelet(parentGroup, material, type) {
  // Generates 8 top links and 8 bottom links
  const linkCount = 7;
  for (let dir of [1, -1]) {
    for (let i = 0; i < linkCount; i++) {
      const dist = 2.45 + i * 0.72;
      const angle = dir * (0.05 + i * 0.14);
      const zOffset = -Math.pow(i * 0.28, 1.8);

      if (type === 'metal') {
        // 3-Piece Oyster Links (Left, Center, Right)
        const outerLinkGeom = new THREE.BoxGeometry(0.7, 0.65, 0.22);
        const centerLinkGeom = new THREE.BoxGeometry(0.85, 0.65, 0.24);

        const linkCenter = new THREE.Mesh(centerLinkGeom, material);
        linkCenter.position.set(0, dir * dist, zOffset);
        linkCenter.rotation.x = -dir * (i * 0.18);
        parentGroup.add(linkCenter);

        const linkLeft = new THREE.Mesh(outerLinkGeom, material);
        linkLeft.position.set(-0.85, dir * dist, zOffset);
        linkLeft.rotation.x = -dir * (i * 0.18);
        parentGroup.add(linkLeft);

        const linkRight = new THREE.Mesh(outerLinkGeom, material);
        linkRight.position.set(0.85, dir * dist, zOffset);
        linkRight.rotation.x = -dir * (i * 0.18);
        parentGroup.add(linkRight);
      } else {
        // Continuous stitched leather band segment
        const leatherGeom = new THREE.BoxGeometry(2.35 - i * 0.08, 0.7, 0.2);
        const leatherMesh = new THREE.Mesh(leatherGeom, material);
        leatherMesh.position.set(0, dir * dist, zOffset);
        leatherMesh.rotation.x = -dir * (i * 0.18);
        parentGroup.add(leatherMesh);
      }
    }
  }
}
