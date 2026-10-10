import * as THREE from 'three';
import {
  createDialTexture,
  createBezelTexture,
  createMovementTexture,
  createRotorTexture,
  createFlatCasebackTexture,
  createLeatherTexture,
  createLeatherBumpMap,
  createLeatherRoughnessMap,
  createLapisSubdialTexture,
  createMinuteRingTexture,
  createSunMoonTexture,
  createBronzeLugEngravingTexture,
  createSwissPlaqueTexture,
  createPowerReserveTexture,
  createMoonPhaseMaskTexture,
  createSkeletonMovementPlateTexture,
  createAstronomicalMovementTexture
} from './watchTextureGenerator.js';

export function create3DWatch(edition) {
  const watchRoot = new THREE.Group();

  // Materials Cache for dynamic edition updating with studio PBR realism
  const materials = {
    case: new THREE.MeshStandardMaterial({
      color: new THREE.Color(edition.caseColor || 0xB87C58),
      metalness: edition.caseMetalness ?? 0.88,
      roughness: edition.caseRoughness ?? 0.28,
      envMapIntensity: 2.0
    }),
    blueBridge: new THREE.MeshStandardMaterial({
      color: 0x084298, // Heated flame-blued titanium & steel
      metalness: 0.94,
      roughness: 0.14,
      envMapIntensity: 2.4
    }),
    roseBridge: new THREE.MeshStandardMaterial({
      color: 0xE8B896, // Champagne 18K rose-gold
      metalness: 0.94,
      roughness: 0.18,
      envMapIntensity: 2.6
    }),
    amethyst: new THREE.MeshPhysicalMaterial({
      color: 0x9333EA, // Royal purple amethyst crystal cabochon
      roughness: 0.05,
      metalness: 0.08,
      transmission: 0.88,
      ior: 1.54,
      thickness: 0.6,
      transparent: true,
      opacity: 0.96,
      envMapIntensity: 2.6
    }),
    lapis: new THREE.MeshStandardMaterial({
      map: createLapisSubdialTexture(),
      roughness: 0.22,
      metalness: 0.10,
      envMapIntensity: 0.8
    }),
    minuteRing: new THREE.MeshStandardMaterial({
      map: createMinuteRingTexture(),
      roughness: 0.28,
      metalness: 0.30,
      envMapIntensity: 1.0
    }),
    sunMoon: new THREE.MeshStandardMaterial({
      map: createSunMoonTexture(),
      roughness: 0.26,
      metalness: 0.20,
      envMapIntensity: 0.9
    }),
    moonMask: new THREE.MeshStandardMaterial({
      map: createMoonPhaseMaskTexture(),
      transparent: true,
      roughness: 0.22,
      metalness: 0.80,
      envMapIntensity: 2.2
    }),
    swissPlaque: new THREE.MeshStandardMaterial({
      map: createSwissPlaqueTexture(),
      roughness: 0.20,
      metalness: 0.92,
      envMapIntensity: 2.4
    }),
    powerReserve: new THREE.MeshStandardMaterial({
      map: createPowerReserveTexture(),
      roughness: 0.22,
      metalness: 0.90,
      envMapIntensity: 2.0
    }),
    skeletonPlate: new THREE.MeshStandardMaterial({
      map: createSkeletonMovementPlateTexture(),
      roughness: 0.44,
      metalness: 0.45,
      envMapIntensity: 1.2
    }),
    rubyGem: new THREE.MeshPhysicalMaterial({
      color: 0xE11D48,
      emissive: 0x9F1239,
      emissiveIntensity: 0.45,
      roughness: 0.02,
      metalness: 0.05,
      transmission: 0.85,
      ior: 1.77,
      thickness: 0.8,
      transparent: true,
      opacity: 0.98,
      envMapIntensity: 3.2
    }),
    bluedPointer: new THREE.MeshStandardMaterial({
      color: 0x084298,
      emissive: 0x06285E,
      emissiveIntensity: 0.25,
      metalness: 0.96,
      roughness: 0.10,
      envMapIntensity: 2.5
    }),
    tourbillonRing: new THREE.MeshStandardMaterial({
      color: 0x084298, // Heated flame-blued titanium
      metalness: 0.95,
      roughness: 0.12,
      envMapIntensity: 2.4
    }),
    caseback: new THREE.MeshStandardMaterial({
      map: createFlatCasebackTexture(edition),
      metalness: edition.caseMetalness ?? 0.96,
      roughness: 0.22,
      envMapIntensity: 1.8
    }),
    bezelInsert: new THREE.MeshStandardMaterial({
      color: 0x1A1C22, // Deep slate anthracite finish
      map: createBezelTexture(edition),
      roughness: 0.58,  // Satin matte so star constellations pop without washing out
      metalness: 0.35,  // Semi-metallic dark slate
      envMapIntensity: 0.8,
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
      color: 0xf0f6ff,
      transparent: true,
      opacity: 0.12,
      roughness: 0.015,
      metalness: 0.05,
      reflectivity: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.02,
      ior: 1.77,
      transmission: 0.92,
      depthWrite: false, // Critical: never obscure hands or dial in depth buffer
      side: THREE.FrontSide
    }),
    movement: new THREE.MeshStandardMaterial({
      map: createAstronomicalMovementTexture(),
      color: 0xFFFFFF,
      metalness: 0.28,
      roughness: 0.38,
      envMapIntensity: 1.4
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
      map: createLeatherTexture(edition),
      bumpMap: createLeatherBumpMap(),
      bumpScale: 0.035,
      roughnessMap: createLeatherRoughnessMap(),
      metalness: edition.strapType === 'metal' ? (edition.caseMetalness ?? 0.98) : 0.03,
      roughness: edition.strapType === 'metal' ? 0.22 : 0.65,
      envMapIntensity: 1.5
    }),
    stitch: new THREE.MeshStandardMaterial({
      color: new THREE.Color(edition.stitchColor || '#FAF5EE'),
      roughness: 0.38,
      metalness: 0.02,
      envMapIntensity: 1.2
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
      map: createAstronomicalMovementTexture(),
      color: 0xFFFFFF,
      metalness: 0.28,
      roughness: 0.38,
      envMapIntensity: 1.4
    })
  };

  // Groups for each Exploded Layer
  const layerSapphire = new THREE.Group();
  const layerBezel = new THREE.Group();
  const layerDial = new THREE.Group();
  const layerGears = new THREE.Group();
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
    gears: layerGears,
    hands: layerHands,
    movement: layerMovement,
    case: layerCase,
    caseback: layerCaseback,
    rotor: layerRotor
  };

  // -------------------------------------------------------------
  // 1. SAPPHIRE CRYSTAL LAYER (Ultra-Clear Dual Domed Synthetic Sapphire)
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
  // 2. SCULPTED CIRCULAR CONSTELLATION BEZEL
  // Dark slate Damascus steel bezel intricately engraved with celestial star maps
  // -------------------------------------------------------------
  const bezelShape = new THREE.Shape();
  bezelShape.absarc(0, 0, 2.68, 0, Math.PI * 2, false);
  const bezelHole = new THREE.Path();
  bezelHole.absarc(0, 0, 2.36, 0, Math.PI * 2, true);
  bezelShape.holes.push(bezelHole);

  const bezelSteelGeom = new THREE.ExtrudeGeometry(bezelShape, {
    depth: 0.18,
    bevelEnabled: true,
    bevelSegments: 3,
    steps: 1,
    bevelSize: 0.016,
    bevelThickness: 0.016,
    curveSegments: 64
  });
  const bezelSteelMesh = new THREE.Mesh(bezelSteelGeom, materials.case);
  bezelSteelMesh.position.z = -0.08;
  layerBezel.add(bezelSteelMesh);

  // Circular Constellation Bezel Top Insert (Dark Damascus with etched star maps)
  const constellationInsertGeom = new THREE.RingGeometry(2.36, 2.67, 64);
  const constellationInsertMesh = new THREE.Mesh(constellationInsertGeom, materials.bezelInsert);
  constellationInsertMesh.position.z = 0.124;
  layerBezel.add(constellationInsertMesh);

  // Fluted Rose Gold Inner Rehaut Ring (Subtle radiant bevel frame)
  const flutedRingGeom = new THREE.TorusGeometry(2.365, 0.014, 16, 64);
  const flutedRingMesh = new THREE.Mesh(flutedRingGeom, materials.hands);
  flutedRingMesh.position.z = 0.120;
  layerBezel.add(flutedRingMesh);

  layerBezel.position.z = 0.24;

  // -------------------------------------------------------------
  // 3. ASTRONOMICAL FOUR CLOCK CIRCLES DIAL LAYER
  // -------------------------------------------------------------
  const dialGroup = new THREE.Group();
  layerDial.add(dialGroup);
  layerDial.position.z = 0.10;

  // -------------------------------------------------------------
  // 3B. COMPLETE SKELETONIZED GEAR TRAIN LAYER
  // -------------------------------------------------------------
  const gearsGroup = new THREE.Group();
  layerGears.add(gearsGroup);
  layerGears.position.z = 0.04;

  // 3A. Open Skeleton Chassis Flange Ring
  const dialChassisShape = new THREE.Shape();
  dialChassisShape.absarc(0, 0, 2.36, 0, Math.PI * 2, false);
  const dialChassisHole = new THREE.Path();
  dialChassisHole.absarc(0, 0, 2.14, 0, Math.PI * 2, true);
  dialChassisShape.holes.push(dialChassisHole);

  const dialChassisGeom = new THREE.ExtrudeGeometry(dialChassisShape, {
    depth: 0.035,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: 0.008,
    bevelThickness: 0.008,
    curveSegments: 64
  });
  const dialChassisMesh = new THREE.Mesh(dialChassisGeom, materials.roseBridge);
  dialChassisMesh.position.z = -0.010;
  dialGroup.add(dialChassisMesh);

  // Helper: Create vertical transmission arbor shaft connecting front dial gears to the back gear layer
  function createConnectingArbor(x, y, zTop = 0.045, zBottom = -0.08, radius = 0.045, hasPinion = true) {
    const group = new THREE.Group();
    group.position.set(x, y, 0);

    const length = zTop - zBottom;
    const arborGeom = new THREE.CylinderGeometry(radius, radius, length, 16);
    const arbor = new THREE.Mesh(arborGeom, materials.gearSteel);
    arbor.rotation.x = Math.PI / 2;
    arbor.position.z = (zTop + zBottom) / 2;
    group.add(arbor);

    // Beveled gold retaining bushing collars
    const collarTop = new THREE.Mesh(new THREE.CylinderGeometry(radius * 1.5, radius * 1.5, 0.018, 16), materials.chatonGold);
    collarTop.rotation.x = Math.PI / 2;
    collarTop.position.z = zTop - 0.009;
    group.add(collarTop);

    const collarBot = new THREE.Mesh(new THREE.CylinderGeometry(radius * 1.5, radius * 1.5, 0.018, 16), materials.chatonGold);
    collarBot.rotation.x = Math.PI / 2;
    collarBot.position.z = zBottom + 0.009;
    group.add(collarBot);

    // Intermediate transfer pinion
    if (hasPinion) {
      const pinGeom = new THREE.CylinderGeometry(radius * 2.6, radius * 2.6, 0.030, 12);
      const pin = new THREE.Mesh(pinGeom, materials.gearBrass);
      pin.rotation.x = Math.PI / 2;
      pin.position.z = (zTop + zBottom) / 2;
      group.add(pin);
    }

    return group;
  }

  // 3E. 3D Transmission Arbors in Gear Layer
  const connectingArbors = [
    createConnectingArbor(-1.22, 0.18, 0.05, -0.07, 0.065, true),
    createConnectingArbor(-1.68, 0.82, 0.03, -0.065, 0.045, true),
    createConnectingArbor(-1.72, -0.42, 0.03, -0.065, 0.045, true),
    createConnectingArbor(-0.68, 0.65, 0.02, -0.060, 0.040, true),
    createConnectingArbor(0.0, 1.12, 0.06, -0.07, 0.075, true),
    createConnectingArbor(-0.58, 1.58, 0.04, -0.065, 0.045, true),
    createConnectingArbor(0.58, 1.58, 0.04, -0.065, 0.045, true),
    createConnectingArbor(0.0, 0.52, 0.03, -0.060, 0.050, true),
    createConnectingArbor(1.22, 0.18, 0.05, -0.07, 0.065, true),
    createConnectingArbor(1.68, 0.82, 0.03, -0.065, 0.045, true),
    createConnectingArbor(1.72, -0.42, 0.03, -0.065, 0.045, true),
    createConnectingArbor(0.68, 0.65, 0.02, -0.060, 0.040, true),
    createConnectingArbor(0.0, -1.04, 0.035, -0.08, 0.075, true),
    createConnectingArbor(-0.28, -0.88, 0.02, -0.065, 0.045, true),
    createConnectingArbor(0.26, -0.90, 0.02, -0.065, 0.045, true),
    createConnectingArbor(0.0, 0.08, 0.025, -0.07, 0.090, true)
  ];
  connectingArbors.forEach(a => gearsGroup.add(a));

  // 3D Angled Mirror-Polished Rehaut Flange
  const rehautGeom = new THREE.CylinderGeometry(2.36, 2.33, 0.08, 64, 1, true);
  const rehautMesh = new THREE.Mesh(rehautGeom, materials.case);
  rehautMesh.rotation.x = Math.PI / 2;
  rehautMesh.position.z = 0.035;
  dialGroup.add(rehautMesh);

  // 3B. Exposed 3D Brass Gears in Skeleton Apertures
  function makeVisibleGear(x, y, z, radius, teeth, spokeCount = 5, material = materials.gearBrass) {
    const shape = new THREE.Shape();
    const dTheta = (Math.PI * 2) / teeth;
    const rootR = radius * 0.86;
    for (let i = 0; i < teeth; i++) {
      const a0 = i * dTheta;
      const a1 = a0 + dTheta * 0.25;
      const a2 = a0 + dTheta * 0.45;
      const a3 = a0 + dTheta * 0.70;
      const a4 = a0 + dTheta * 0.90;
      const x1 = Math.cos(a1) * rootR, y1 = Math.sin(a1) * rootR;
      const x2 = Math.cos(a2) * radius, y2 = Math.sin(a2) * radius;
      const x3 = Math.cos(a3) * radius, y3 = Math.sin(a3) * radius;
      const x4 = Math.cos(a4) * rootR, y4 = Math.sin(a4) * rootR;
      if (i === 0) shape.moveTo(x1, y1);
      else shape.lineTo(x1, y1);
      shape.lineTo(x2, y2);
      shape.lineTo(x3, y3);
      shape.lineTo(x4, y4);
    }
    shape.closePath();

    for (let s = 0; s < spokeCount; s++) {
      const sa = s * (Math.PI * 2 / spokeCount);
      const hole = new THREE.Path();
      hole.absarc(Math.cos(sa) * (radius * 0.52), Math.sin(sa) * (radius * 0.52), radius * 0.22, 0, Math.PI * 2, true);
      shape.holes.push(hole);
    }
    const centerHole = new THREE.Path();
    centerHole.absarc(0, 0, radius * 0.15, 0, Math.PI * 2, true);
    shape.holes.push(centerHole);

    const geom = new THREE.ExtrudeGeometry(shape, {
      depth: 0.032,
      bevelEnabled: true,
      bevelSegments: 1,
      steps: 1,
      bevelSize: 0.005,
      bevelThickness: 0.005
    });
    const mesh = new THREE.Mesh(geom, material);
    mesh.position.set(x, y, z);
    return mesh;
  }

  // 3C. Helper to add decorative blued horology screws
  function addBluedScrew(target, x, y, z, radius = 0.038) {
    const screwGroup = new THREE.Group();
    screwGroup.position.set(x, y, z);

    const headGeom = new THREE.CylinderGeometry(radius, radius, 0.025, 16);
    const head = new THREE.Mesh(headGeom, materials.bluedScrew);
    head.rotation.x = Math.PI / 2;
    screwGroup.add(head);

    const rimGeom = new THREE.TorusGeometry(radius, 0.006, 8, 16);
    const rim = new THREE.Mesh(rimGeom, materials.hands);
    rim.position.z = 0.012;
    screwGroup.add(rim);

    const slotGeom = new THREE.BoxGeometry(radius * 1.5, radius * 0.28, 0.01);
    const slot = new THREE.Mesh(slotGeom, new THREE.MeshBasicMaterial({ color: 0x05070B }));
    slot.position.z = 0.015;
    slot.rotation.z = Math.random() * Math.PI;
    screwGroup.add(slot);

    target.add(screwGroup);
  }

  // 3D. Helper to add gold chaton with glowing ruby bearing
  function addRubyChaton(target, x, y, z, chatonR = 0.08, rubyR = 0.05) {
    const group = new THREE.Group();
    group.position.set(x, y, z);

    const chatonGeom = new THREE.CylinderGeometry(chatonR, chatonR, 0.024, 16);
    const chaton = new THREE.Mesh(chatonGeom, materials.chatonGold);
    chaton.rotation.x = Math.PI / 2;
    group.add(chaton);

    const rubyGeom = new THREE.CylinderGeometry(rubyR, rubyR, 0.030, 16);
    const ruby = new THREE.Mesh(rubyGeom, materials.rubyGem);
    ruby.rotation.x = Math.PI / 2;
    ruby.position.z = 0.006;
    group.add(ruby);

    target.add(group);
  }

  // =========================================================
  // DEDICATED GEAR TRAIN: 1. HOURS CIRCLE (LEFT - 9 O'CLOCK)
  // Visible driving and transmission gears meshed with the Hour complication
  // =========================================================
  const hourDriveGear = makeVisibleGear(-1.68, 0.82, 0.025, 0.28, 20, 4, materials.gearBrass);
  gearsGroup.add(hourDriveGear);
  addRubyChaton(gearsGroup, -1.68, 0.82, 0.044, 0.065, 0.040);

  const hourIntermediateGear = makeVisibleGear(-1.72, -0.42, 0.025, 0.26, 18, 4, materials.gearSteel);
  gearsGroup.add(hourIntermediateGear);
  addBluedScrew(gearsGroup, -1.72, -0.42, 0.044);

  const hourTransferPinion = makeVisibleGear(-0.68, 0.65, 0.020, 0.22, 14, 3, materials.gearBrass);
  gearsGroup.add(hourTransferPinion);
  addRubyChaton(gearsGroup, -0.68, 0.65, 0.040, 0.055, 0.035);

  // =========================================================
  // DEDICATED GEAR TRAIN: 2. MINUTES CIRCLE (TOP - 12 O'CLOCK)
  // Visible transmission and flanking gears driving the Minute complication
  // =========================================================
  const minDriveGearLeft = makeVisibleGear(-0.58, 1.58, 0.035, 0.26, 18, 3, materials.gearSteel);
  gearsGroup.add(minDriveGearLeft);
  addBluedScrew(gearsGroup, -0.58, 1.58, 0.054);

  const minDriveGearRight = makeVisibleGear(0.58, 1.58, 0.035, 0.26, 18, 3, materials.gearSteel);
  gearsGroup.add(minDriveGearRight);
  addBluedScrew(gearsGroup, 0.58, 1.58, 0.054);

  const minIntermediateGear = makeVisibleGear(0.0, 0.52, 0.025, 0.24, 16, 3, materials.gearBrass);
  gearsGroup.add(minIntermediateGear);
  addRubyChaton(gearsGroup, 0.0, 0.52, 0.044, 0.060, 0.038);

  // =========================================================
  // DEDICATED GEAR TRAIN: 3. DAY AND NIGHT CIRCLE (RIGHT - 3 O'CLOCK)
  // Visible 24-hr driving and planetary gears driving the Sunrise/Sunset complication
  // =========================================================
  const dayNightDriveGear = makeVisibleGear(1.68, 0.82, 0.025, 0.28, 20, 4, materials.gearBrass);
  gearsGroup.add(dayNightDriveGear);
  addRubyChaton(gearsGroup, 1.68, 0.82, 0.044, 0.065, 0.040);

  const dayNightPlanetaryGear = makeVisibleGear(1.72, -0.42, 0.025, 0.26, 18, 4, materials.gearSteel);
  gearsGroup.add(dayNightPlanetaryGear);
  addBluedScrew(gearsGroup, 1.72, -0.42, 0.044);

  const dayNightTransferPinion = makeVisibleGear(0.68, 0.65, 0.020, 0.22, 14, 3, materials.gearBrass);
  gearsGroup.add(dayNightTransferPinion);
  addRubyChaton(gearsGroup, 0.68, 0.65, 0.040, 0.055, 0.035);

  // =========================================================
  // CENTRAL MOVEMENT SYNCHRONIZATION GEAR HUB
  // Interlinks the visual train between all four complication circles
  // =========================================================
  const centerHubGear = makeVisibleGear(0.0, 0.08, 0.015, 0.38, 26, 5, materials.gearBrass);
  gearsGroup.add(centerHubGear);
  addRubyChaton(gearsGroup, 0.0, 0.08, 0.036, 0.090, 0.060);

  // =========================================================
  // SUBDIAL 1 (TOP LAYER - LEFT): ROYAL LAPIS LAZULI ROMAN SUB-DIAL (HOURS ONLY)
  // "The left one this hour one, so it should only show the hour with it's hand."
  // Positioned distinctly at 9 o'clock with zero overlap.
  // =========================================================
  const lapisGroup = new THREE.Group();
  const lapisX = -1.22;
  const lapisY = 0.18;
  const lapisR = 0.74;
  lapisGroup.position.set(lapisX, lapisY, 0.07);

  const lapisGeom = new THREE.CircleGeometry(lapisR, 64);
  const lapisMesh = new THREE.Mesh(lapisGeom, materials.lapis);
  lapisGroup.add(lapisMesh);

  // Polished Rose-Gold Beveled Bezel Rim
  const lapisRimGeom = new THREE.TorusGeometry(lapisR, 0.024, 16, 64);
  const lapisRimMesh = new THREE.Mesh(lapisRimGeom, materials.roseBridge);
  lapisRimMesh.position.z = 0.005;
  lapisGroup.add(lapisRimMesh);

  // Outer brass gear teeth around Lapis dial perimeter
  for (let gt = 0; gt < 40; gt++) {
    const gta = (gt * Math.PI * 2) / 40;
    const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.032, 0.020), materials.gearBrass);
    tooth.rotation.z = gta;
    tooth.position.set(Math.sin(gta) * (lapisR + 0.012), Math.cos(gta) * (lapisR + 0.012), 0.004);
    lapisGroup.add(tooth);
  }

  // Center gold chaton & ruby pivot (clean dial face without obstructing gears)
  addRubyChaton(lapisGroup, 0, 0, 0.024, 0.065, 0.042);

  // Dedicated Rose-Gold Hour Hand with Blue Pointer
  const lapisHandGroup = new THREE.Group();
  lapisHandGroup.position.z = 0.035;

  // Arrow Pointer pointing towards current hour
  const lapisPointerShape = new THREE.Shape();
  lapisPointerShape.moveTo(-0.026, 0.0);
  lapisPointerShape.lineTo(-0.020, 0.36);
  lapisPointerShape.lineTo(-0.055, 0.38);
  lapisPointerShape.lineTo(0.0, 0.54); // Point
  lapisPointerShape.lineTo(0.055, 0.38);
  lapisPointerShape.lineTo(0.020, 0.36);
  lapisPointerShape.lineTo(0.026, 0.0);
  lapisPointerShape.closePath();

  const lapisPointerGeom = new THREE.ExtrudeGeometry(lapisPointerShape, {
    depth: 0.022,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: 0.004,
    bevelThickness: 0.004
  });
  const lapisPointerMesh = new THREE.Mesh(lapisPointerGeom, materials.hands);
  lapisHandGroup.add(lapisPointerMesh);

  // Heat-blued arrow tip
  const lapisBlueTipShape = new THREE.Shape();
  lapisBlueTipShape.moveTo(-0.055, 0.38);
  lapisBlueTipShape.lineTo(0.0, 0.54);
  lapisBlueTipShape.lineTo(0.055, 0.38);
  lapisBlueTipShape.closePath();
  const lapisBlueTipMesh = new THREE.Mesh(new THREE.ExtrudeGeometry(lapisBlueTipShape, { depth: 0.024, bevelEnabled: false }), materials.bluedPointer);
  lapisHandGroup.add(lapisBlueTipMesh);

  // Counterbalance tail
  const tailShape = new THREE.Shape();
  tailShape.moveTo(-0.022, 0.0);
  tailShape.lineTo(-0.015, -0.22);
  tailShape.lineTo(0.0, -0.28);
  tailShape.lineTo(0.015, -0.22);
  tailShape.lineTo(0.022, 0.0);
  tailShape.closePath();
  const tailMesh = new THREE.Mesh(new THREE.ExtrudeGeometry(tailShape, { depth: 0.020, bevelEnabled: false }), materials.hands);
  lapisHandGroup.add(tailMesh);

  const lapisCapMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.048, 0.020, 16), materials.hands);
  lapisCapMesh.rotation.x = Math.PI / 2;
  lapisCapMesh.position.z = 0.024;
  lapisHandGroup.add(lapisCapMesh);

  lapisGroup.add(lapisHandGroup);
  dialGroup.add(lapisGroup);

  // =========================================================
  // SUBDIAL 2 (TOP LAYER - CENTER-TOP): RAISED ROSE GOLD MINUTE RING (MINUTES ONLY)
  // "The center piece at the top should only show the minute,
  // the red circle like object there is to show the minutes passing for that hour,
  // so that doesnot need hand."
  // Positioned distinctly at 12 o'clock with zero overlap.
  // =========================================================
  const minuteGroup = new THREE.Group();
  const minX = 0.0;
  const minY = 1.12;
  const minOuterR = 0.74;
  const minInnerR = 0.46;
  minuteGroup.position.set(minX, minY, 0.10);

  const minRingGeom = new THREE.RingGeometry(minInnerR, minOuterR, 64);
  const minRingMesh = new THREE.Mesh(minRingGeom, materials.minuteRing);
  minuteGroup.add(minRingMesh);

  const minOuterRim = new THREE.Mesh(new THREE.TorusGeometry(minOuterR, 0.022, 16, 64), materials.roseBridge);
  minOuterRim.position.z = 0.005;
  minuteGroup.add(minOuterRim);

  const minInnerRim = new THREE.Mesh(new THREE.TorusGeometry(minInnerR, 0.020, 16, 64), materials.roseBridge);
  minInnerRim.position.z = 0.005;
  minuteGroup.add(minInnerRim);

  // 4 Heat-Blued support spokes holding the elevated minute ring
  for (let s = 0; s < 4; s++) {
    const sAngle = (s * Math.PI) / 2 + 0.35;
    const spokeGeom = new THREE.BoxGeometry(0.038, minInnerR - 0.05, 0.024);
    const spokeMesh = new THREE.Mesh(spokeGeom, materials.blueBridge);
    spokeMesh.rotation.z = sAngle;
    spokeMesh.position.set(Math.sin(sAngle) * (minInnerR * 0.5), Math.cos(sAngle) * (minInnerR * 0.5), -0.010);
    minuteGroup.add(spokeMesh);
  }

  // Open-worked brass skeleton gear visible inside the minute ring center
  const minCenterGear = makeVisibleGear(0, 0, -0.010, 0.34, 22, 4);
  minuteGroup.add(minCenterGear);

  // Center arbor chaton with ruby bearing (no hands)
  addRubyChaton(minuteGroup, 0, 0, 0.018, 0.065, 0.040);

  // =========================================================
  // ORBITING RED RUBY GEMSTONE MINUTE INDICATOR
  // The red circle travels along the minute ring track (r = 0.60)
  // to show the minutes passing for that hour.
  // =========================================================
  const minuteRubyCarrier = new THREE.Group();
  minuteRubyCarrier.position.set(0, 0, 0.015);

  const rubyCabochonGroup = new THREE.Group();
  // Seated at r = 0.60 (center of minute track) along positive Y (at 60 mark when angle = 0)
  rubyCabochonGroup.position.set(0, 0.60, 0.014);

  // Polished Rose-Gold Chaton Collar with beveled lip
  const rubyCollarGeom = new THREE.CylinderGeometry(0.10, 0.11, 0.04, 20);
  const rubyCollar = new THREE.Mesh(rubyCollarGeom, materials.roseBridge);
  rubyCollar.rotation.x = Math.PI / 2;
  rubyCabochonGroup.add(rubyCollar);

  // Faceted Large Ruby Jewel Sphere (glowing pigeon-blood crimson ruby)
  const rubySphereGeom = new THREE.SphereGeometry(0.088, 24, 20);
  const rubySphereMesh = new THREE.Mesh(rubySphereGeom, materials.rubyGem);
  rubySphereMesh.position.z = 0.028;
  rubyCabochonGroup.add(rubySphereMesh);

  // 4 Rose Gold Retention Prongs securing the ruby
  for (let pr = 0; pr < 4; pr++) {
    const pra = (pr * Math.PI) / 2 + Math.PI / 4;
    const prong = new THREE.Mesh(new THREE.BoxGeometry(0.020, 0.020, 0.05), materials.roseBridge);
    prong.position.set(Math.cos(pra) * 0.095, Math.sin(pra) * 0.095, 0.025);
    rubyCabochonGroup.add(prong);
  }
  minuteRubyCarrier.add(rubyCabochonGroup);
  minuteGroup.add(minuteRubyCarrier);

  dialGroup.add(minuteGroup);

  // =========================================================
  // SUBDIAL 3 (TOP LAYER - RIGHT): SUNRISE & SUNSET (DAY / NIGHT)
  // "The right one is for the sunrise or the sun set one."
  // Positioned distinctly at 3 o'clock with zero overlap.
  // =========================================================
  const moonGroup = new THREE.Group();
  const moonX = 1.22;
  const moonY = 0.18;
  const moonR = 0.74;
  moonGroup.position.set(moonX, moonY, 0.07);

  const moonRim = new THREE.Mesh(new THREE.TorusGeometry(moonR, 0.024, 16, 64), materials.roseBridge);
  moonGroup.add(moonRim);

  // Outer brass gear teeth
  for (let t = 0; t < 40; t++) {
    const tAngle = (t * Math.PI * 2) / 40;
    const toothMesh = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.030, 0.020), materials.gearBrass);
    toothMesh.rotation.z = tAngle;
    toothMesh.position.set(Math.sin(tAngle) * (moonR + 0.012), Math.cos(tAngle) * (moonR + 0.012), 0.005);
    moonGroup.add(toothMesh);
  }

  // Open Circular Sun & Moonphase disc (rotates for sunrise / sunset)
  const moonDiscGeom = new THREE.CircleGeometry(moonR - 0.02, 64);
  const moonDiscMesh = new THREE.Mesh(moonDiscGeom, materials.sunMoon);
  moonDiscMesh.position.z = 0.006;
  moonGroup.add(moonDiscMesh);

  // Center chaton & ruby pivot (clean dial face without obstructing gears)
  addRubyChaton(moonGroup, 0, 0, 0.024, 0.065, 0.042);

  dialGroup.add(moonGroup);

  // =========================================================
  // POWER RESERVE INDICATOR (BELOW SUNRISE/SUNSET DIAL)
  // Distinct blued steel plate with HIGH/LOW scale.
  // Repositioned neatly to eliminate any overlap with showcase tourbillon ring.
  // =========================================================
  const powerReserveGroup = new THREE.Group();
  const prX = 1.35;
  const prY = -0.58;
  const prR = 0.32;
  powerReserveGroup.position.set(prX, prY, 0.055);

  const prGeom = new THREE.CircleGeometry(prR, 48);
  const prMesh = new THREE.Mesh(prGeom, materials.powerReserve);
  powerReserveGroup.add(prMesh);

  const prRim = new THREE.Mesh(new THREE.TorusGeometry(prR, 0.018, 16, 48), materials.roseBridge);
  prRim.position.z = 0.005;
  powerReserveGroup.add(prRim);

  const prHandGroup = new THREE.Group();
  const prHandShape = new THREE.Shape();
  prHandShape.moveTo(-0.014, -0.04);
  prHandShape.lineTo(-0.016, 0.18);
  prHandShape.lineTo(0, 0.26);
  prHandShape.lineTo(0.016, 0.18);
  prHandShape.lineTo(0.014, -0.04);
  prHandShape.closePath();

  const prHandGeom = new THREE.ExtrudeGeometry(prHandShape, {
    depth: 0.014,
    bevelEnabled: true,
    bevelSegments: 1,
    steps: 1,
    bevelSize: 0.003,
    bevelThickness: 0.003
  });
  const prHandMesh = new THREE.Mesh(prHandGeom, materials.bluedPointer);
  prHandGroup.add(prHandMesh);
  prHandGroup.position.z = 0.016;
  prHandGroup.rotation.z = -0.65;
  powerReserveGroup.add(prHandGroup);

  addRubyChaton(powerReserveGroup, 0, 0, 0.020, 0.045, 0.028);
  // Power Reserve indicator is intentionally hidden — it cluttered the dial
  // dialGroup.add(powerReserveGroup);

  // =========================================================
  // BOTTOM CENTER MECHANICAL SHOWCASE (6 O'CLOCK)
  // "And the buttom center is for the show case only which will have gears and show how gear is moving."
  // Distinctly placed at 6 o'clock with zero overlap.
  // =========================================================
  const tourbillonGroup = new THREE.Group();
  const tourbX = 0.0;
  const tourbY = -1.04;
  const tourbR = 0.84;
  tourbillonGroup.position.set(tourbX, tourbY, 0.045);

  // Flame-Blued Outer Tourbillon Retention Ring
  const tourbillonRimGeom = new THREE.TorusGeometry(tourbR, 0.034, 16, 64);
  const tourbillonRim = new THREE.Mesh(tourbillonRimGeom, materials.tourbillonRing);
  tourbillonGroup.add(tourbillonRim);

  // Stepped inner rose-gold bevel ring
  const tourbillonGoldRim = new THREE.Mesh(new THREE.TorusGeometry(tourbR - 0.07, 0.022, 16, 64), materials.roseBridge);
  tourbillonGroup.add(tourbillonGoldRim);

  // --- Active Showcase Interlocking Gears ---
  const showcaseGear1 = makeVisibleGear(-0.28, 0.16, 0.010, 0.28, 20, 3);
  tourbillonGroup.add(showcaseGear1);

  const showcaseGear2 = makeVisibleGear(0.26, 0.14, 0.010, 0.25, 18, 3);
  tourbillonGroup.add(showcaseGear2);

  const showcaseGear3 = makeVisibleGear(-0.06, -0.32, 0.010, 0.20, 14, 3);
  tourbillonGroup.add(showcaseGear3);

  // --- Rotating Tourbillon Cage Assembly ---
  const tourbillonCageGroup = new THREE.Group();
  tourbillonCageGroup.position.z = 0.018;

  // 1. Glucydur Balance Wheel with 16 Gold Adjustment Timing Screws
  const balanceWheelGeom = new THREE.TorusGeometry(0.56, 0.030, 16, 48);
  const balanceWheelMesh = new THREE.Mesh(balanceWheelGeom, materials.gearBrass);
  tourbillonCageGroup.add(balanceWheelMesh);

  for (let gs = 0; gs < 16; gs++) {
    const gsa = (gs * Math.PI * 2) / 16;
    const gScrew = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.024, 8), materials.chatonGold);
    gScrew.rotation.x = Math.PI / 2;
    gScrew.position.set(Math.cos(gsa) * 0.58, Math.sin(gsa) * 0.58, 0);
    tourbillonCageGroup.add(gScrew);
  }

  // 2. Visible 3D Spiral Flame-Blued Hairspring (5 turns)
  const hairspringCurvePoints = [];
  const totalHairspringTurns = 5.0;
  for (let t = 0; t <= 120; t++) {
    const theta = (t / 120) * (Math.PI * 2 * totalHairspringTurns);
    const r = 0.07 + (t / 120) * 0.42;
    hairspringCurvePoints.push(new THREE.Vector3(Math.cos(theta) * r, Math.sin(theta) * r, 0.008));
  }
  const hairspringCurve = new THREE.CatmullRomCurve3(hairspringCurvePoints);
  const hairspringGeom = new THREE.TubeGeometry(hairspringCurve, 90, 0.008, 6, false);
  const hairspringMesh = new THREE.Mesh(hairspringGeom, materials.blueBridge);
  tourbillonCageGroup.add(hairspringMesh);

  // 3. Tri-Blade Flame-Blued Titanium Cage Structure with Screws at Spoke Ends
  for (let a = 0; a < 3; a++) {
    const armAngle = (a * Math.PI * 2) / 3;
    const armGeom = new THREE.BoxGeometry(0.048, 0.54, 0.030);
    const armMesh = new THREE.Mesh(armGeom, materials.tourbillonRing);
    armMesh.rotation.z = armAngle;
    armMesh.position.set(Math.sin(armAngle) * 0.24, Math.cos(armAngle) * 0.24, 0.024);
    tourbillonCageGroup.add(armMesh);

    // Circular screw pad at end of each spoke
    const padGeom = new THREE.CylinderGeometry(0.040, 0.040, 0.024, 16);
    const padMesh = new THREE.Mesh(padGeom, materials.tourbillonRing);
    padMesh.rotation.x = Math.PI / 2;
    padMesh.position.set(Math.sin(armAngle) * 0.48, Math.cos(armAngle) * 0.48, 0.026);
    tourbillonCageGroup.add(padMesh);

    addBluedScrew(tourbillonCageGroup, Math.sin(armAngle) * 0.48, Math.cos(armAngle) * 0.48, 0.040, 0.024);
  }

  // Central Ruby Endstone in Rose Gold Setting
  addRubyChaton(tourbillonCageGroup, 0, 0, 0.040, 0.10, 0.060);
  tourbillonGroup.add(tourbillonCageGroup);

  // Fixed Rose-Gold Sweeping Bridges Holding the Tourbillon
  const roseTourbBridgeCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.72, 0.34, 0.04),
    new THREE.Vector3(0.0, 0.52, 0.052),
    new THREE.Vector3(0.72, 0.34, 0.04)
  ]);
  const roseTourbBridgeGeom = new THREE.TubeGeometry(roseTourbBridgeCurve, 28, 0.044, 12, false);
  const roseTourbBridgeMesh = new THREE.Mesh(roseTourbBridgeGeom, materials.roseBridge);
  tourbillonGroup.add(roseTourbBridgeMesh);

  // Curved Lower-Right Bridge Plaque with Inscription: "MANUFACTURE EN SUISSE - GENEVE"
  const plaqueArcGeom = new THREE.RingGeometry(tourbR - 0.14, tourbR - 0.03, 32, 1, -Math.PI * 0.42, 0.65);
  const plaqueArcMesh = new THREE.Mesh(plaqueArcGeom, materials.swissPlaque);
  plaqueArcMesh.position.z = 0.038;
  tourbillonGroup.add(plaqueArcMesh);

  addBluedScrew(tourbillonGroup, -0.70, 0.34, 0.052);
  addBluedScrew(tourbillonGroup, 0.70, 0.34, 0.052);

  dialGroup.add(tourbillonGroup);

  // Sweeping interconnecting bridge rods removed per user request for cleaner skeletonized dial view

  layerDial.add(dialGroup);
  layerDial.position.z = 0.10;

  // -------------------------------------------------------------
  // 4. HANDS LAYER (Maintained for public API compatibility)
  // Note: All functional hands are authentically positioned on their
  // dedicated subdials (Lapis hour/minute, Minute ring bronze hand, Power reserve)
  // -------------------------------------------------------------
  const handsGroup = new THREE.Group();

  const hourHandGroup = new THREE.Group();
  hourHandGroup.visible = false;
  handsGroup.add(hourHandGroup);

  const minuteHandGroup = new THREE.Group();
  minuteHandGroup.visible = false;
  handsGroup.add(minuteHandGroup);

  const secondHandGroup = new THREE.Group();
  secondHandGroup.visible = false;
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
  const mpPos = movementPlateGeom.attributes.position;
  const mpUvs = new Float32Array(mpPos.count * 2);
  for (let i = 0; i < mpPos.count; i++) {
    const x = mpPos.getX(i);
    const z = mpPos.getZ(i);
    mpUvs[i * 2] = (x / 2.32) * 0.5 + 0.5;
    mpUvs[i * 2 + 1] = (z / 2.32) * 0.5 + 0.5;
  }
  movementPlateGeom.setAttribute('uv', new THREE.BufferAttribute(mpUvs, 2));

  const movementPlateMesh = new THREE.Mesh(movementPlateGeom, materials.movement);
  movementPlateMesh.rotation.x = Math.PI / 2;
  movementPlateMesh.position.z = -0.11;
  layerMovement.add(movementPlateMesh);

  // Group for all motion works gears on the front of the movement plate
  const movementGearsGroup = new THREE.Group();
  movementGearsGroup.visible = true; // Permanently visible to show the deep skeleton gear train
  layerMovement.add(movementGearsGroup);
  layerMovement.userData.gearsGroup = movementGearsGroup;

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
  hourWheelGroup.position.set(-1.22, 0.18, 0.035);
  movementGearsGroup.add(hourWheelGroup);

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
  cannonPinionGroup.position.set(0.0, 1.12, 0.015);
  movementGearsGroup.add(cannonPinionGroup);

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
  fourthWheelGroup.position.set(0.0, -1.04, -0.015);
  movementGearsGroup.add(fourthWheelGroup);

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

  minuteWheelGroup.position.set(0.48, 1.48, 0.015);
  movementGearsGroup.add(minuteWheelGroup);

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

  thirdWheelGroup.position.set(-0.65, -0.45, -0.012);
  movementGearsGroup.add(thirdWheelGroup);

  // --- Gear 6: Day & Night 24-Hour Calibre Wheel (driving astronomical complication) ---
  const dayNightWheelGroup = new THREE.Group();
  const dayNightWheelShape = createGearShape({
    teeth: 42,
    outerRadius: 1.05,
    rootRadius: 0.92,
    innerRadius: 0.22,
    spokeCount: 4,
    hubRadius: 0.38,
    rimWidth: 0.09
  });
  const dayNightWheelMesh = createGearMesh(dayNightWheelShape, 0.055, materials.gearBrass, 0.008);
  dayNightWheelGroup.add(dayNightWheelMesh);
  dayNightWheelGroup.position.set(1.22, 0.18, 0.035);
  movementGearsGroup.add(dayNightWheelGroup);

  // --- Central Movement Transfer Gear (connecting all branches from movement center) ---
  const grandCenterWheelGroup = new THREE.Group();
  const grandCenterShape = createGearShape({
    teeth: 36,
    outerRadius: 0.82,
    rootRadius: 0.72,
    innerRadius: 0.18,
    spokeCount: 5,
    hubRadius: 0.34,
    rimWidth: 0.08
  });
  const grandCenterMesh = createGearMesh(grandCenterShape, 0.050, materials.gearBrass, 0.007);
  grandCenterWheelGroup.add(grandCenterMesh);
  grandCenterWheelGroup.position.set(0, 0, 0.010);
  movementGearsGroup.add(grandCenterWheelGroup);

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
  movementGearsGroup.add(escapeWheelGroup);

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

  movementGearsGroup.add(windingGroup);

  // --- Motion Works Skeletonized Bridge Framework ---
  const bridgePlateShape = new THREE.Shape();
  bridgePlateShape.absarc(0, 0, 2.30, 0, Math.PI * 2, false);

  // Large skeleton windows exposing the gears and deep movement architecture
  const tourbillonAperture = new THREE.Path();
  tourbillonAperture.absarc(0.0, -1.04, 0.78, 0, Math.PI * 2, true);
  bridgePlateShape.holes.push(tourbillonAperture);

  const balanceAperture = new THREE.Path();
  balanceAperture.absarc(-0.7, -0.6, 0.60, 0, Math.PI * 2, true);
  bridgePlateShape.holes.push(balanceAperture);

  const hourAperture = new THREE.Path();
  hourAperture.absarc(-1.22, 0.18, 0.68, 0, Math.PI * 2, true);
  bridgePlateShape.holes.push(hourAperture);

  const minuteAperture = new THREE.Path();
  minuteAperture.absarc(0.0, 1.12, 0.68, 0, Math.PI * 2, true);
  bridgePlateShape.holes.push(minuteAperture);

  const dayNightAperture = new THREE.Path();
  dayNightAperture.absarc(1.22, 0.18, 0.68, 0, Math.PI * 2, true);
  bridgePlateShape.holes.push(dayNightAperture);

  const centerAperture = new THREE.Path();
  centerAperture.absarc(0.0, 0.08, 0.42, 0, Math.PI * 2, true);
  bridgePlateShape.holes.push(centerAperture);

  const bridgePlateGeom = new THREE.ExtrudeGeometry(bridgePlateShape, {
    depth: 0.035,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: 0.015,
    bevelThickness: 0.015,
    curveSegments: 48
  });

  // Normalize Planar UVs across [-2.30, 2.30] -> [0, 1] so astronomical starmap maps perfectly across the entire bridge sheet
  const bpPos = bridgePlateGeom.attributes.position;
  const bpUvs = new Float32Array(bpPos.count * 2);
  for (let i = 0; i < bpPos.count; i++) {
    const x = bpPos.getX(i);
    const y = bpPos.getY(i);
    bpUvs[i * 2] = (x / 2.30) * 0.5 + 0.5;
    bpUvs[i * 2 + 1] = (y / 2.30) * 0.5 + 0.5;
  }
  bridgePlateGeom.setAttribute('uv', new THREE.BufferAttribute(bpUvs, 2));

  const bridgePlateMesh = new THREE.Mesh(bridgePlateGeom, materials.gearBridge);
  bridgePlateMesh.position.z = -0.040;
  movementGearsGroup.add(bridgePlateMesh);

  // Full Seamless Astronomical Celestial Backplate Plate (Guarantees full starmap artwork is visible beneath all gears)
  const astroBackdropGeom = new THREE.CircleGeometry(2.32, 64);
  const astroBackdropMesh = new THREE.Mesh(astroBackdropGeom, materials.movement);
  astroBackdropMesh.position.z = -0.045; // Sits right underneath the gears and bridges
  movementGearsGroup.add(astroBackdropMesh);

  // Authentic Ruby Jewel Bearings on the plate
  movementGearsGroup.add(createRubyJewelMesh(0.82, -0.48, -0.025));
  movementGearsGroup.add(createRubyJewelMesh(-0.78, 0.55, -0.025));
  movementGearsGroup.add(createRubyJewelMesh(-1.15, -0.25, -0.025));
  movementGearsGroup.add(createRubyJewelMesh(0.55, 0.72, -0.025));

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

  // Middle case barrel integrates cleanly with the luxury strap (protruding horn lugs removed for sleek integrated architecture)

  // Haute-Horlogerie Fluted Gold Crown with Faceted Royal Purple Amethyst at 3 o'clock
  const crownGroup = new THREE.Group();
  const crownAngle = -0.05; // 3 o'clock position matching reference photo
  const crownDist = 2.76;
  crownGroup.position.set(Math.cos(crownAngle) * crownDist, Math.sin(crownAngle) * crownDist, -0.06);
  crownGroup.rotation.z = crownAngle;

  // Crown stem tube collar
  const stemGeom = new THREE.CylinderGeometry(0.22, 0.22, 0.12, 24);
  const stemMesh = new THREE.Mesh(stemGeom, materials.roseBridge);
  stemMesh.rotation.z = Math.PI / 2;
  stemMesh.position.x = -0.12;
  crownGroup.add(stemMesh);

  // Main Fluted Gold Crown Body with 18 knurled teeth
  const crownGeom = new THREE.CylinderGeometry(0.34, 0.34, 0.26, 18);
  const crownMesh = new THREE.Mesh(crownGeom, materials.roseBridge);
  crownMesh.rotation.z = Math.PI / 2;
  crownGroup.add(crownMesh);

  // 12 Micro-machined fluted rib inserts for grip texture
  for (let f = 0; f < 12; f++) {
    const fAngle = (f * Math.PI * 2) / 12;
    const ribGeom = new THREE.BoxGeometry(0.22, 0.045, 0.055);
    const ribMesh = new THREE.Mesh(ribGeom, materials.roseBridge);
    ribMesh.position.set(0, Math.cos(fAngle) * 0.33, Math.sin(fAngle) * 0.33);
    crownGroup.add(ribMesh);
  }

  // Rose Gold beveled setting collar for the cabochon
  const cabochonCollarGeom = new THREE.CylinderGeometry(0.30, 0.34, 0.08, 24);
  const cabochonCollar = new THREE.Mesh(cabochonCollarGeom, materials.roseBridge);
  cabochonCollar.rotation.z = Math.PI / 2;
  cabochonCollar.position.x = 0.16;
  crownGroup.add(cabochonCollar);

  // Multifaceted Royal Purple Amethyst Gemstone Cabochon Crown Tip
  const amethystGeom = new THREE.ConeGeometry(0.28, 0.34, 8); // 8-faceted gemstone cone
  const amethystMesh = new THREE.Mesh(amethystGeom, materials.amethyst);
  amethystMesh.rotation.z = -Math.PI / 2;
  amethystMesh.position.x = 0.33;
  crownGroup.add(amethystMesh);

  caseGroup.add(crownGroup);

  // Ergonomic Chamfered Crown Guards flanking the 4 o'clock crown
  for (let gSide of [-1, 1]) {
    const gAngle = crownAngle + gSide * 0.16;
    const guardMesh = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.38, 0.34), materials.case);
    guardMesh.position.set(Math.cos(gAngle) * 2.62, Math.sin(gAngle) * 2.62, -0.06);
    guardMesh.rotation.z = gAngle + gSide * 0.22;
    caseGroup.add(guardMesh);
  }

  // Integrated Case Architecture: The sculpted antique bronze case barrel connects seamlessly to the thick leather strap

  // Complete Full-Loop Wrist Bracelet / Strap with Deployant Clasp
  const braceletController = buildBracelet(caseGroup, materials, edition);

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

  // Assemble all layers into watch root (layerGears is now between dial and movement)
  watchRoot.add(layerSapphire);
  watchRoot.add(layerBezel);
  watchRoot.add(layerDial);
  watchRoot.add(layerGears);
  watchRoot.add(layerHands);
  watchRoot.add(layerMovement);
  watchRoot.add(layerCase);
  watchRoot.add(layerCaseback);
  watchRoot.add(layerRotor);

  // =========================================================
  // COMPREHENSIVE EXPLODABLE ITEMS — 3D Fan-Out Offsets (X, Y, Z)
  // Covers BOTH the 4 clock circle subdials AND every individual gear.
  // When progress = 1 (fully exploded):
  //   - Each subdial fans out radially away from the center
  //   - Every gear within each sub-layer also fans out with individual depth
  // Positions are RELATIVE to each object's parent group.
  // =========================================================
  const explodableItems = [
    // ---- DIAL LAYER: 4 clock circles radially fan out ----
    // Offsets kept modest (0.42–0.48 units) so circles stay within the bezel rim.
    // The Z lift separates them visually without bursting through the case edge.
    // Lapis Hours (left 9 o'clock) → explodes further left + forward in Z
    { obj: lapisGroup,             offsetX: -0.44, offsetY:  0.0,   offsetZ: 0.9 },
    // Minutes Ring (top 12 o'clock) → explodes upward + forward in Z
    { obj: minuteGroup,            offsetX:  0.0,  offsetY:  0.46,  offsetZ: 1.0 },
    // Day/Night Moon Disc (right 3 o'clock) → explodes further right + Z
    { obj: moonGroup,              offsetX:  0.44, offsetY:  0.0,   offsetZ: 0.9 },
    // Tourbillon Showcase (bottom 6 o'clock) → explodes downward + Z
    { obj: tourbillonGroup,        offsetX:  0.0,  offsetY: -0.44,  offsetZ: 0.75 },

    // ---- GEAR LAYER: Front complication gears (in layerGears) ----
    // Hours gear train — fan left with Lapis subdial
    { obj: hourDriveGear,          offsetX: -0.85, offsetY:  0.5,  offsetZ: 0.7 },
    { obj: hourIntermediateGear,   offsetX: -0.90, offsetY: -0.3,  offsetZ: 0.55 },
    { obj: hourTransferPinion,     offsetX: -0.55, offsetY:  0.4,  offsetZ: 0.6 },
    // Minutes gear train — fan upward with Minute Ring
    { obj: minDriveGearLeft,       offsetX: -0.35, offsetY:  0.85, offsetZ: 0.75 },
    { obj: minDriveGearRight,      offsetX:  0.35, offsetY:  0.85, offsetZ: 0.75 },
    { obj: minIntermediateGear,    offsetX:  0.0,  offsetY:  0.45, offsetZ: 0.5 },
    // Day/Night gear train — fan right with Moon Disc
    { obj: dayNightDriveGear,      offsetX:  0.85, offsetY:  0.5,  offsetZ: 0.7 },
    { obj: dayNightPlanetaryGear,  offsetX:  0.90, offsetY: -0.3,  offsetZ: 0.55 },
    { obj: dayNightTransferPinion, offsetX:  0.55, offsetY:  0.4,  offsetZ: 0.6 },
    // Central synchronization hub — float straight forward
    { obj: centerHubGear,          offsetX:  0.0,  offsetY:  0.0,  offsetZ: 0.45 },

    // ---- MOVEMENT LAYER: Back gear train wheels ----
    // Hour wheel (left cluster)
    { obj: hourWheelGroup,         offsetX: -0.7,  offsetY:  0.1,  offsetZ: 0.38 },
    // Cannon pinion (center-top)
    { obj: cannonPinionGroup,      offsetX:  0.0,  offsetY:  0.65, offsetZ: 0.3 },
    // Minute wheel (upper-right)
    { obj: minuteWheelGroup,       offsetX:  0.3,  offsetY:  0.72, offsetZ: 0.42 },
    // Fourth wheel (bottom seconds)
    { obj: fourthWheelGroup,       offsetX:  0.0,  offsetY: -0.7,  offsetZ: 0.5 },
    // Third wheel (lower-left)
    { obj: thirdWheelGroup,        offsetX: -0.4,  offsetY: -0.35, offsetZ: 0.4 },
    // Escape wheel (far lower-left)
    { obj: escapeWheelGroup,       offsetX: -0.8,  offsetY: -0.2,  offsetZ: 0.55 },
    // Day/Night wheel (right cluster)
    { obj: dayNightWheelGroup,     offsetX:  0.7,  offsetY:  0.1,  offsetZ: 0.38 },
    // Grand center wheel (center)
    { obj: grandCenterWheelGroup,  offsetX:  0.0,  offsetY:  0.0,  offsetZ: 0.28 },
    // Winding / crown transmission group (far right)
    { obj: windingGroup,           offsetX:  1.0,  offsetY:  0.15, offsetZ: 0.45 }
  ];

  // Public controllers & animation handles
  return {
    root: watchRoot,
    layers,
    materials,
    explodableItems,
    lapisHourHand: lapisHandGroup,
    minuteRubyIndicator: minuteRubyCarrier,
    sunMoonDisc: moonDiscMesh,
    hourGears: {
      drive: hourDriveGear,
      intermediate: hourIntermediateGear,
      pinion: hourTransferPinion
    },
    minuteGears: {
      center: minCenterGear,
      left: minDriveGearLeft,
      right: minDriveGearRight,
      intermediate: minIntermediateGear
    },
    dayNightGears: {
      drive: dayNightDriveGear,
      planetary: dayNightPlanetaryGear,
      pinion: dayNightTransferPinion
    },
    showcaseGears: {
      gear1: showcaseGear1,
      gear2: showcaseGear2,
      gear3: showcaseGear3
    },
    centerHubGear: centerHubGear,
    connectingArbors: connectingArbors,
    hands: {
      hour: hourHandGroup,
      minute: minuteHandGroup,
      second: secondHandGroup
    },
    gears: {
      group: movementGearsGroup,
      hourWheel: hourWheelGroup,
      cannonPinion: cannonPinionGroup,
      minuteWheel: minuteWheelGroup,
      fourthWheel: fourthWheelGroup,
      thirdWheel: thirdWheelGroup,
      escapeWheel: escapeWheelGroup,
      palletFork: palletGroup,
      dayNightWheel: dayNightWheelGroup,
      grandCenterWheel: grandCenterWheelGroup,
      crownGear: crownGearMesh,
      transGear: transGearMesh
    },
    balanceWheel: balanceWheelMesh,
    hairspring: hairspringMesh,
    tourbillon: tourbillonCageGroup,
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
      materials.strap.map = createLeatherTexture(newEdition);
      materials.strap.map.needsUpdate = true;
      if (newEdition.strapType === 'metal') {
        materials.strap.bumpScale = 0.005;
        materials.strap.metalness = newEdition.caseMetalness ?? 0.95;
        materials.strap.roughness = newEdition.caseRoughness ?? 0.22;
      } else {
        materials.strap.bumpScale = 0.035;
        materials.strap.metalness = 0.03;
        materials.strap.roughness = 0.65;
      }

      if (materials.stitch) {
        materials.stitch.color.set(newEdition.stitchColor || '#FAF5EE');
      }

      if (braceletController) {
        braceletController.update(newEdition);
      }
    },
    setNightLume(enabled) {
      materials.lume.emissiveIntensity = enabled ? 2.5 : 0.0;
      materials.secondsHand.emissiveIntensity = enabled ? 1.8 : 0.1;
    }
  };
}

/**
 * Builds the complete 360° ergonomic watch strap wrapping fully around the wrist,
 * complete with solid lug end-links, 3-piece articulated links, micro-pins,
 * and a sculpted folding deployant clasp with twin side pushers at the back.
 */
function buildBracelet(parentGroup, materials, edition) {
  const braceletContainer = new THREE.Group();
  parentGroup.add(braceletContainer);

  const metalGroup = new THREE.Group();
  const leatherGroup = new THREE.Group();
  braceletContainer.add(metalGroup);
  braceletContainer.add(leatherGroup);

  metalGroup.visible = (edition.strapType === 'metal');
  leatherGroup.visible = (edition.strapType !== 'metal');

  // Ergonomic Wrist Spline: Natural wrist oval in Y-Z plane
  // Top curve runs from top lug (Y=+2.46, Z=-0.16) around the upper wrist to clasp receiver (Y=+0.75, Z=-3.82)
  const topPts = [
    new THREE.Vector3(0, 2.46, -0.16),
    new THREE.Vector3(0, 2.82, -0.28),
    new THREE.Vector3(0, 3.16, -0.52),
    new THREE.Vector3(0, 3.38, -0.92),
    new THREE.Vector3(0, 3.42, -1.45),
    new THREE.Vector3(0, 3.25, -2.05),
    new THREE.Vector3(0, 2.88, -2.68),
    new THREE.Vector3(0, 2.32, -3.22),
    new THREE.Vector3(0, 1.58, -3.62),
    new THREE.Vector3(0, 0.75, -3.82)
  ];
  const topCurve = new THREE.CatmullRomCurve3(topPts, false, 'centripetal');

  // Bottom curve (symmetrical mirror along Y)
  const botPts = topPts.map(p => new THREE.Vector3(0, -p.y, p.z));
  const botCurve = new THREE.CatmullRomCurve3(botPts, false, 'centripetal');

  const rightVec = new THREE.Vector3(1, 0, 0);
  const basisMatrix = new THREE.Matrix4();
  const numLinks = 13;

  // =========================================================
  // 1. METAL BRACELET (AP Royal Oak / Rolex Oyster 3-Piece Luxury Links)
  // =========================================================
  for (let half of ['top', 'bot']) {
    const isTop = half === 'top';
    const curve = isTop ? topCurve : botCurve;

    for (let i = 0; i < numLinks; i++) {
      const t = (i + 0.5) / numLinks;
      const pt = curve.getPointAt(t);
      const tangent = curve.getTangentAt(t).normalize();
      const normal = isTop
        ? new THREE.Vector3(0, -tangent.z, tangent.y).normalize()
        : new THREE.Vector3(0, tangent.z, -tangent.y).normalize();

      basisMatrix.makeBasis(rightVec, tangent, normal);

      // Smooth taper: from 2.42 at the lugs down to 1.72 at the clasp
      const totalWidth = 2.42 - t * 0.70;
      const centerWidth = totalWidth * 0.44;
      const outerWidth = (totalWidth - centerWidth) * 0.48;
      const linkLen = 0.38;
      const linkThick = 0.22;

      const rowGroup = new THREE.Group();
      rowGroup.position.copy(pt);
      rowGroup.setRotationFromMatrix(basisMatrix);

      // Center Link: slightly raised for luxury 3D texture
      const centerGeom = new THREE.BoxGeometry(centerWidth, linkLen, linkThick + 0.02);
      const centerMesh = new THREE.Mesh(centerGeom, materials.strap);
      rowGroup.add(centerMesh);

      // Left Outer Link
      const outerGeom = new THREE.BoxGeometry(outerWidth, linkLen, linkThick);
      const leftMesh = new THREE.Mesh(outerGeom, materials.strap);
      leftMesh.position.set(-totalWidth / 2 + outerWidth / 2, 0, -0.01);
      rowGroup.add(leftMesh);

      // Right Outer Link
      const rightMesh = new THREE.Mesh(outerGeom, materials.strap);
      rightMesh.position.set(totalWidth / 2 - outerWidth / 2, 0, -0.01);
      rowGroup.add(rightMesh);

      // Articulated Steel Connecting Hinge Pin (in joint between links)
      const pinGeom = new THREE.CylinderGeometry(0.04, 0.04, totalWidth * 0.94, 8);
      const pinMesh = new THREE.Mesh(pinGeom, materials.case);
      pinMesh.rotation.z = Math.PI / 2;
      pinMesh.position.set(0, linkLen / 2, 0);
      rowGroup.add(pinMesh);

      // Solid machined end-link integration flush with watch lugs (at i=0)
      if (i === 0) {
        const endLinkGeom = new THREE.BoxGeometry(2.44, 0.52, 0.26);
        const endLinkMesh = new THREE.Mesh(endLinkGeom, materials.strap);
        endLinkMesh.position.set(0, -0.10, 0);
        rowGroup.add(endLinkMesh);
      }

      metalGroup.add(rowGroup);
    }
  }

  // =========================================================
  // 2. SCULPTED DEPLOYANT CLASP (Back of Wrist at Y=0, Z=-3.85)
  // =========================================================
  const claspGroup = new THREE.Group();
  claspGroup.position.set(0, 0, -3.85);

  // Outer curved clasp cover shell
  const claspShellGeom = new THREE.BoxGeometry(1.74, 1.48, 0.28);
  const claspShell = new THREE.Mesh(claspShellGeom, materials.strap);
  claspGroup.add(claspShell);

  // Raised center medallion with chamfered edge
  const claspMedallionGeom = new THREE.BoxGeometry(1.24, 0.96, 0.04);
  const claspMedallion = new THREE.Mesh(claspMedallionGeom, materials.case);
  claspMedallion.position.set(0, 0, -0.15);
  claspGroup.add(claspMedallion);

  // Embossed ALUNA Signature Inscription Plaque on Clasp
  const claspBrandGeom = new THREE.BoxGeometry(0.85, 0.22, 0.03);
  const claspBrand = new THREE.Mesh(claspBrandGeom, materials.hands);
  claspBrand.position.set(0, 0, -0.18);
  claspGroup.add(claspBrand);

  // Ergonomic Twin Lateral Release Pushers (left & right buttons)
  const pusherGeom = new THREE.BoxGeometry(0.18, 0.36, 0.18);
  const leftPusher = new THREE.Mesh(pusherGeom, materials.case);
  leftPusher.position.set(-0.92, 0, -0.02);
  claspGroup.add(leftPusher);

  const rightPusher = new THREE.Mesh(pusherGeom, materials.case);
  rightPusher.position.set(0.92, 0, -0.02);
  claspGroup.add(rightPusher);

  // Under-Clasp Folding Scissor Blades
  const scissorGeom = new THREE.BoxGeometry(0.48, 1.28, 0.06);
  const scissorBlade1 = new THREE.Mesh(scissorGeom, materials.case);
  scissorBlade1.position.set(0, 0, 0.16);
  claspGroup.add(scissorBlade1);

  // Scissor Hinge Barrel Rivets
  for (let hy of [-0.64, 0, 0.64]) {
    const rivetGeom = new THREE.CylinderGeometry(0.045, 0.045, 0.60, 10);
    const rivetMesh = new THREE.Mesh(rivetGeom, materials.case);
    rivetMesh.rotation.z = Math.PI / 2;
    rivetMesh.position.set(0, hy, 0.16);
    claspGroup.add(rivetMesh);
  }

  metalGroup.add(claspGroup);

  // =========================================================
  // 3. ARTISANAL LEATHER STRAP (Thick Padded Solid & French Saddle Stitching)
  // Continuous smooth organic band with thick luxury padding and zero steps.
  // =========================================================
  function createSmoothLeatherBandGeometry(curve, isTop) {
    const M = 64; // 64 smooth longitudinal slices
    const positions = [];
    const uvs = [];
    const indices = [];

    const rightVec = new THREE.Vector3(1, 0, 0);
    const numCross = 14;

    for (let j = 0; j <= M; j++) {
      const s = j / M;
      const pt = curve.getPointAt(s);
      const tan = curve.getTangentAt(s).normalize();
      const norm = isTop
        ? new THREE.Vector3(0, -tan.z, tan.y).normalize()
        : new THREE.Vector3(0, tan.z, -tan.y).normalize();

      // Width tapers smoothly from 2.45 at lugs down to 1.72 at clasp
      const W = 2.45 - s * 0.73;
      const halfW = W / 2;
      // Substantial thick luxury padding: 0.38 at lugs down to 0.26 at clasp
      const baseThick = 0.38 - s * 0.12;
      // Raised bombé center dome: 0.10 at lugs down to 0.05 at clasp (total 0.48 thickness at lugs!)
      const dome = 0.10 - s * 0.05;

      // Top surface vertices (8 points across bombé face with stitch channel groove)
      for (let p = 0; p <= 7; p++) {
        const u = -1 + (p / 7) * 2; // -1 to +1
        const lx = u * halfW;
        const domeFactor = Math.max(0, 1 - Math.pow(u / 0.76, 2));
        // Subtle recessed stitch channel groove pressed along margins
        const stitchDist = Math.abs(Math.abs(u) - 0.86);
        const stitchDip = Math.exp(-stitchDist * stitchDist * 32) * 0.018;

        const lz = baseThick / 2 + dome * domeFactor - stitchDip;

        const vx = pt.x + lx * rightVec.x + lz * norm.x;
        const vy = pt.y + lx * rightVec.y + lz * norm.y;
        const vz = pt.z + lx * rightVec.z + lz * norm.z;
        positions.push(vx, vy, vz);
        uvs.push((u + 1) * 0.5, s * 6);
      }

      // Bottom surface vertices (inner wrist face: 6 points, flat and silky smooth)
      for (let p = 1; p <= 6; p++) {
        const u = 1 - (p / 6) * 2; // +1 to -1
        const lx = u * (halfW - 0.02);
        const lz = -baseThick / 2;

        const vx = pt.x + lx * rightVec.x + lz * norm.x;
        const vy = pt.y + lx * rightVec.y + lz * norm.y;
        const vz = pt.z + lx * rightVec.z + lz * norm.z;
        positions.push(vx, vy, vz);
        uvs.push((u + 1) * 0.5, s * 6);
      }
    }

    // Connect slices with quad strips
    for (let j = 0; j < M; j++) {
      for (let k = 0; k < numCross; k++) {
        const nextK = (k + 1) % numCross;
        indices.push(j * numCross + k, (j + 1) * numCross + k, j * numCross + nextK);
        indices.push(j * numCross + nextK, (j + 1) * numCross + k, (j + 1) * numCross + nextK);
      }
    }

    // End cap at start (j = 0, lugs)
    for (let k = 1; k < numCross - 1; k++) {
      indices.push(0, k, k + 1);
    }

    // End cap at end (j = M, clasp)
    const offsetM = M * numCross;
    for (let k = 1; k < numCross - 1; k++) {
      indices.push(offsetM, offsetM + k + 1, offsetM + k);
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geom.setIndex(indices);
    geom.computeVertexNormals();
    return geom;
  }

  // 1. Build Top and Bottom Continuous Thick Solid Leather Straps
  const topStrapGeom = createSmoothLeatherBandGeometry(topCurve, true);
  const topStrapMesh = new THREE.Mesh(topStrapGeom, materials.strap);
  leatherGroup.add(topStrapMesh);

  const botStrapGeom = createSmoothLeatherBandGeometry(botCurve, false);
  const botStrapMesh = new THREE.Mesh(botStrapGeom, materials.strap);
  leatherGroup.add(botStrapMesh);

  // Curved Case-Hugging End Fillers (seamless integration between lugs at the 40mm case)
  for (let half of ['top', 'bot']) {
    const isTop = half === 'top';
    const endFillerGeom = new THREE.CylinderGeometry(0.24, 0.24, 2.44, 24);
    const endFiller = new THREE.Mesh(endFillerGeom, materials.strap);
    endFiller.rotation.z = Math.PI / 2;
    endFiller.position.set(0, isTop ? 2.45 : -2.45, -0.16);
    leatherGroup.add(endFiller);
  }

  // 2. Continuous French Saddle Stitching along both sides of Top and Bottom Straps
  const punctureMat = new THREE.MeshBasicMaterial({ color: 0x030508 });
  const stitchGeom = new THREE.CylinderGeometry(0.021, 0.021, 0.13, 8);
  const punchGeom = new THREE.CircleGeometry(0.016, 6);
  const numStitches = 28;

  for (let half of ['top', 'bot']) {
    const isTop = half === 'top';
    const curve = isTop ? topCurve : botCurve;

    for (let k = 0; k < numStitches; k++) {
      const s = (k + 0.6) / (numStitches + 0.2);
      const pt = curve.getPointAt(s);
      const tan = curve.getTangentAt(s).normalize();
      const norm = isTop
        ? new THREE.Vector3(0, -tan.z, tan.y).normalize()
        : new THREE.Vector3(0, tan.z, -tan.y).normalize();

      const basis = new THREE.Matrix4();
      basis.makeBasis(rightVec, tan, norm);

      const W = 2.45 - s * 0.73;
      const halfW = W / 2;
      const baseThick = 0.38 - s * 0.12;
      const dome = 0.10 - s * 0.05;

      for (let side of [-1, 1]) {
        const lx = side * (halfW - 0.14);
        const u = lx / halfW;
        const domeFactor = Math.max(0, 1 - Math.pow(u / 0.76, 2));
        const lz = baseThick / 2 + dome * domeFactor + 0.016;

        const stitchGroup = new THREE.Group();
        stitchGroup.position.copy(pt);
        stitchGroup.setRotationFromMatrix(basis);

        // Slanted 18° French stitch (Point Sellier) with waxed linen thread luster
        const stitchMesh = new THREE.Mesh(stitchGeom, materials.stitch);
        stitchMesh.position.set(lx, 0, lz);
        stitchMesh.rotation.z = side * (isTop ? 0.31 : -0.31);
        stitchGroup.add(stitchMesh);

        // Diamond awl pierced needle puncture dots at ends
        for (let pOffset of [-0.056, 0.056]) {
          const dot = new THREE.Mesh(punchGeom, punctureMat);
          dot.position.set(lx, pOffset, lz - 0.003);
          stitchGroup.add(dot);
        }

        leatherGroup.add(stitchGroup);
      }
    }

    // Double transverse reinforcement lock-stitches at the watch lugs
    for (let lockS of [0.025, 0.055]) {
      const lugPt = curve.getPointAt(lockS);
      const lugTan = curve.getTangentAt(lockS).normalize();
      const lugNorm = isTop
        ? new THREE.Vector3(0, -lugTan.z, lugTan.y).normalize()
        : new THREE.Vector3(0, lugTan.z, -lugTan.y).normalize();
      const lugBasis = new THREE.Matrix4();
      lugBasis.makeBasis(rightVec, lugTan, lugNorm);

      for (let side of [-1, 1]) {
        const lockGroup = new THREE.Group();
        lockGroup.position.copy(lugPt);
        lockGroup.setRotationFromMatrix(lugBasis);

        const lockStitch = new THREE.Mesh(stitchGeom, materials.stitch);
        lockStitch.position.set(side * 0.58, 0, 0.21);
        lockStitch.rotation.z = Math.PI / 2;
        lockGroup.add(lockStitch);

        leatherGroup.add(lockGroup);
      }
    }
  }

  // 3. Perforated sizing punch holes along bottom tail strap
  const holePositions = [0.44, 0.51, 0.58, 0.65, 0.72, 0.79, 0.86];
  for (let hs of holePositions) {
    const pt = botCurve.getPointAt(hs);
    const tan = botCurve.getTangentAt(hs).normalize();
    const norm = new THREE.Vector3(0, tan.z, -tan.y).normalize();
    const basis = new THREE.Matrix4();
    basis.makeBasis(rightVec, tan, norm);

    const holeGroup = new THREE.Group();
    holeGroup.position.copy(pt);
    holeGroup.setRotationFromMatrix(basis);

    const baseThick = 0.38 - hs * 0.12;
    const dome = 0.10 - hs * 0.05;
    const totalThick = baseThick + dome;

    // Dark punched hole interior
    const holeGeom = new THREE.CylinderGeometry(0.048, 0.048, totalThick + 0.04, 12);
    const holeMesh = new THREE.Mesh(holeGeom, punctureMat);
    holeMesh.rotation.x = Math.PI / 2;
    holeGroup.add(holeMesh);

    // Beveled metallic eyelet grommet
    const grommetGeom = new THREE.TorusGeometry(0.052, 0.013, 8, 16);
    const grommetMesh = new THREE.Mesh(grommetGeom, materials.case);
    grommetMesh.position.z = totalThick / 2 + 0.005;
    holeGroup.add(grommetMesh);

    leatherGroup.add(holeGroup);
  }

  // 4. Smooth Leather Keepers
  for (let [ks, isFixed] of [[0.68, true], [0.76, false]]) {
    const pt = botCurve.getPointAt(ks);
    const tan = botCurve.getTangentAt(ks).normalize();
    const norm = new THREE.Vector3(0, tan.z, -tan.y).normalize();
    const basis = new THREE.Matrix4();
    basis.makeBasis(rightVec, tan, norm);

    const keeperGroup = new THREE.Group();
    keeperGroup.position.copy(pt);
    keeperGroup.setRotationFromMatrix(basis);

    const kW = (2.45 - ks * 0.73) + 0.12;
    const kThick = (0.38 - ks * 0.12 + 0.08) + 0.14;

    const keeperGeom = new THREE.BoxGeometry(kW, 0.14, kThick);
    const keeperMesh = new THREE.Mesh(keeperGeom, materials.strap);
    keeperGroup.add(keeperMesh);

    if (isFixed) {
      const keeperStitchGeom = new THREE.BoxGeometry(kW - 0.04, 0.025, 0.02);
      const keeperStitch = new THREE.Mesh(keeperStitchGeom, materials.stitch);
      keeperStitch.position.set(0, 0, kThick / 2 + 0.008);
      keeperGroup.add(keeperStitch);
    }

    leatherGroup.add(keeperGroup);
  }

  // 5. Sculpted Deployant Butterfly Buckle at the back (Y=0, Z=-3.85)
  const leatherBuckleGroup = new THREE.Group();
  leatherBuckleGroup.position.set(0, 0, -3.85);

  const buckleBridgeGeom = new THREE.BoxGeometry(1.78, 0.95, 0.24);
  const buckleBridge = new THREE.Mesh(buckleBridgeGeom, materials.case);
  leatherBuckleGroup.add(buckleBridge);

  const buckleBrandGeom = new THREE.BoxGeometry(0.85, 0.22, 0.04);
  const buckleBrand = new THREE.Mesh(buckleBrandGeom, materials.hands);
  buckleBrand.position.set(0, 0, -0.14);
  leatherBuckleGroup.add(buckleBrand);

  const bPusherGeom = new THREE.BoxGeometry(0.16, 0.32, 0.16);
  const bPusherLeft = new THREE.Mesh(bPusherGeom, materials.case);
  bPusherLeft.position.set(-0.94, 0, -0.02);
  leatherBuckleGroup.add(bPusherLeft);

  const bPusherRight = new THREE.Mesh(bPusherGeom, materials.case);
  bPusherRight.position.set(0.94, 0, -0.02);
  leatherBuckleGroup.add(bPusherRight);

  const bScissorGeom = new THREE.BoxGeometry(0.44, 1.25, 0.05);
  const bScissor = new THREE.Mesh(bScissorGeom, materials.case);
  bScissor.position.set(0, 0, 0.14);
  leatherBuckleGroup.add(bScissor);

  leatherGroup.add(leatherBuckleGroup);

  return {
    update(newEdition) {
      metalGroup.visible = (newEdition.strapType === 'metal');
      leatherGroup.visible = (newEdition.strapType !== 'metal');
    }
  };
}
