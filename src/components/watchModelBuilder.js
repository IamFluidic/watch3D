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
  // 2. SCULPTED OCTAGONAL BEZEL (Audemars Piguet Royal Oak Architecture)
  // 8-sided geometric bezel with 8 perimeter hexagonal screws & Rolex fluted inner ring
  // -------------------------------------------------------------
  // 8-sided Octagon Outer Profile (Audemars Piguet signature geometry)
  const bezelShape = new THREE.Shape();
  const octR = 2.68;
  for (let i = 0; i < 8; i++) {
    const angle = ((i * 45 + 22.5) * Math.PI) / 180;
    const x = Math.cos(angle) * octR;
    const y = Math.sin(angle) * octR;
    if (i === 0) bezelShape.moveTo(x, y);
    else bezelShape.lineTo(x, y);
  }
  bezelShape.closePath();

  // Inner circular aperture for the crystal and dial
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
    curveSegments: 32
  });
  const bezelSteelMesh = new THREE.Mesh(bezelSteelGeom, materials.case);
  bezelSteelMesh.position.z = -0.08;
  layerBezel.add(bezelSteelMesh);

  // Octagonal Top Insert Ring (ceramic / satin steel)
  const ceramicShape = new THREE.Shape();
  const octInsertR = 2.64;
  for (let i = 0; i < 8; i++) {
    const angle = ((i * 45 + 22.5) * Math.PI) / 180;
    const x = Math.cos(angle) * octInsertR;
    const y = Math.sin(angle) * octInsertR;
    if (i === 0) ceramicShape.moveTo(x, y);
    else ceramicShape.lineTo(x, y);
  }
  ceramicShape.closePath();
  const ceramicHole = new THREE.Path();
  ceramicHole.absarc(0, 0, 2.38, 0, Math.PI * 2, true);
  ceramicShape.holes.push(ceramicHole);

  const ceramicGeom = new THREE.ShapeGeometry(ceramicShape);
  const ceramicMesh = new THREE.Mesh(ceramicGeom, materials.bezelInsert);
  ceramicMesh.position.z = 0.122;
  layerBezel.add(ceramicMesh);

  // Rolex-Inspired Fluted Faceted Ring Accent (sparkling inner rehaut frame)
  const flutedRingGeom = new THREE.TorusGeometry(2.365, 0.014, 12, 64);
  const flutedRingMesh = new THREE.Mesh(flutedRingGeom, materials.hands);
  flutedRingMesh.position.z = 0.118;
  layerBezel.add(flutedRingMesh);

  // 8 Audemars Piguet Hexagonal Screws (at the 8 vertices of the octagon)
  // In AP watches, all 8 hexagonal screws have slots aligned tangentially to form a concentric circle!
  const screwGeom = new THREE.CylinderGeometry(0.052, 0.052, 0.035, 6); // 6-sided hexagon!
  const slotGeom = new THREE.BoxGeometry(0.080, 0.012, 0.040);
  const slotMat = new THREE.MeshBasicMaterial({ color: 0x0A0D14 });

  for (let i = 0; i < 8; i++) {
    const angle = ((i * 45 + 22.5) * Math.PI) / 180;
    const sr = 2.505;
    const sx = Math.cos(angle) * sr;
    const sy = Math.sin(angle) * sr;

    const screwGroup = new THREE.Group();
    screwGroup.position.set(sx, sy, 0.128);
    // Tangential slot alignment tracing a concentric circle (AP signature hallmark)
    screwGroup.rotation.z = angle + Math.PI / 2;

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
  // 3. DIAL LAYER (Haute-Horlogerie Guilloché & 3D Applied Indices)
  // -------------------------------------------------------------
  const dialGeom = new THREE.CircleGeometry(2.35, 64);
  const dialMesh = new THREE.Mesh(dialGeom, materials.dial);
  layerDial.add(dialMesh);

  // 3D Angled Mirror-Polished Rehaut Flange (Inner chapter ring tension well)
  const rehautGeom = new THREE.CylinderGeometry(2.36, 2.33, 0.05, 64, 1, true);
  const rehautMesh = new THREE.Mesh(rehautGeom, materials.case);
  rehautMesh.rotation.x = Math.PI / 2;
  rehautMesh.position.z = 0.025;
  layerDial.add(rehautMesh);

  // Central axle collar
  const dialCollarGeom = new THREE.CylinderGeometry(0.18, 0.18, 0.02, 32);
  const dialCollarMesh = new THREE.Mesh(dialCollarGeom, materials.case);
  dialCollarMesh.rotation.x = Math.PI / 2;
  dialCollarMesh.position.z = 0.01;
  layerDial.add(dialCollarMesh);

  // 3D Applied Faceted Hour Batons with Super-LumiNova Reservoirs
  // (Signature Grand Seiko / Royal Oak 3D diamond-cut indices catching real light)
  const batonGeom = new THREE.BoxGeometry(0.075, 0.28, 0.035);
  const batonLumeGeom = new THREE.BoxGeometry(0.032, 0.18, 0.040);

  for (let h = 1; h <= 12; h++) {
    const angle = (h * 30 * Math.PI) / 180;
    const r = 2.05; // Seated proudly inside the railroad minute track

    // Skip 6 (open-heart tourbillon aperture), 12 has iconic double baton
    if (h === 6) continue;

    if (h === 12) {
      // Iconic Dual Parallel Batons at 12 o'clock
      for (let offset of [-0.055, 0.055]) {
        const markerGroup = new THREE.Group();
        const bx = Math.sin(angle) * r + offset;
        const by = Math.cos(angle) * r;
        markerGroup.position.set(bx, by, 0.018);
        markerGroup.rotation.z = -angle;

        const batonMesh = new THREE.Mesh(batonGeom, materials.hands);
        markerGroup.add(batonMesh);

        const lumeMesh = new THREE.Mesh(batonLumeGeom, materials.lume);
        lumeMesh.position.z = 0.005;
        markerGroup.add(lumeMesh);

        layerDial.add(markerGroup);
      }
    } else {
      // Single Faceted Baton at 1, 2, 3, 4, 5, 7, 8, 9, 10, 11
      const markerGroup = new THREE.Group();
      const bx = Math.sin(angle) * r;
      const by = Math.cos(angle) * r;
      markerGroup.position.set(bx, by, 0.018);
      markerGroup.rotation.z = -angle;

      const batonMesh = new THREE.Mesh(batonGeom, materials.hands);
      markerGroup.add(batonMesh);

      const lumeMesh = new THREE.Mesh(batonLumeGeom, materials.lume);
      lumeMesh.position.z = 0.005;
      markerGroup.add(lumeMesh);

      layerDial.add(markerGroup);
    }
  }

  // -------------------------------------------------------------
  // JACOB & CO FLYING TOURBILLON MECHANICAL CARRIAGE (6 O'CLOCK)
  // Real 3D openwork skeletonized tourbillon cage with ruby jewel
  // -------------------------------------------------------------
  const tourbillonGroup = new THREE.Group();
  tourbillonGroup.position.set(0, -0.71, 0.022);

  // Outer Tourbillon Retention Ring
  const tourbillonRimGeom = new THREE.TorusGeometry(0.28, 0.018, 16, 32);
  const tourbillonRim = new THREE.Mesh(tourbillonRimGeom, materials.chatonGold);
  tourbillonGroup.add(tourbillonRim);

  // 3 Curved Aerodynamic Carriage Arms (Tri-blade skeleton cage)
  for (let a = 0; a < 3; a++) {
    const armAngle = (a * Math.PI * 2) / 3;
    const armGeom = new THREE.BoxGeometry(0.035, 0.26, 0.025);
    const armMesh = new THREE.Mesh(armGeom, materials.hands);
    armMesh.rotation.z = armAngle;
    armMesh.position.set(Math.sin(armAngle) * 0.10, Math.cos(armAngle) * 0.10, 0.005);
    tourbillonGroup.add(armMesh);
  }

  // Center Gold Chaton with Synthetic Pigeon-Blood Ruby Bearing
  const chatonGeom = new THREE.CylinderGeometry(0.08, 0.08, 0.03, 16);
  const chaton = new THREE.Mesh(chatonGeom, materials.chatonGold);
  chaton.rotation.x = Math.PI / 2;
  tourbillonGroup.add(chaton);

  const rubyGeom = new THREE.CylinderGeometry(0.05, 0.05, 0.035, 16);
  const ruby = new THREE.Mesh(rubyGeom, materials.gearRuby);
  ruby.rotation.x = Math.PI / 2;
  ruby.position.z = 0.005;
  tourbillonGroup.add(ruby);

  // Two micro blued adjustment balance screws
  const bScrewGeom = new THREE.CylinderGeometry(0.025, 0.025, 0.02, 12);
  const bScrew1 = new THREE.Mesh(bScrewGeom, materials.bluedScrew);
  bScrew1.rotation.x = Math.PI / 2;
  bScrew1.position.set(-0.22, 0, 0.008);
  tourbillonGroup.add(bScrew1);

  const bScrew2 = new THREE.Mesh(bScrewGeom, materials.bluedScrew);
  bScrew2.rotation.x = Math.PI / 2;
  bScrew2.position.set(0.22, 0, 0.008);
  tourbillonGroup.add(bScrew2);

  layerDial.add(tourbillonGroup);

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

  // Haute-Horlogerie Fluted Winding Crown at 3 o'clock
  const crownGroup = new THREE.Group();
  crownGroup.position.set(2.82, 0, 0);

  // Crown stem tube collar
  const stemGeom = new THREE.CylinderGeometry(0.22, 0.22, 0.12, 24);
  const stemMesh = new THREE.Mesh(stemGeom, materials.case);
  stemMesh.rotation.z = Math.PI / 2;
  stemMesh.position.x = -0.12;
  crownGroup.add(stemMesh);

  // Main Fluted Crown Body with 24 knurled teeth
  const crownGeom = new THREE.CylinderGeometry(0.33, 0.33, 0.28, 24);
  const crownMesh = new THREE.Mesh(crownGeom, materials.case);
  crownMesh.rotation.z = Math.PI / 2;
  crownGroup.add(crownMesh);

  // 12 Micro-machined fluted rib inserts for tactile grip texture
  for (let f = 0; f < 12; f++) {
    const fAngle = (f * Math.PI * 2) / 12;
    const ribGeom = new THREE.BoxGeometry(0.24, 0.04, 0.05);
    const ribMesh = new THREE.Mesh(ribGeom, materials.case);
    ribMesh.position.set(0, Math.cos(fAngle) * 0.32, Math.sin(fAngle) * 0.32);
    crownGroup.add(ribMesh);
  }

  // Polished Domed Outer Cap
  const crownCapGeom = new THREE.SphereGeometry(0.28, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
  const crownCapMesh = new THREE.Mesh(crownCapGeom, materials.case);
  crownCapMesh.rotation.z = -Math.PI / 2;
  crownCapMesh.position.x = 0.14;
  crownGroup.add(crownCapMesh);

  // Embossed ALUNA Seal Disc on crown tip
  const crownSealGeom = new THREE.CircleGeometry(0.16, 24);
  const crownSealMesh = new THREE.Mesh(crownSealGeom, materials.hands);
  crownSealMesh.rotation.y = Math.PI / 2;
  crownSealMesh.position.x = 0.24;
  crownGroup.add(crownSealMesh);

  caseGroup.add(crownGroup);

  // Ergonomic Chamfered Crown Guards
  const guardGeom = new THREE.BoxGeometry(0.32, 0.42, 0.35);
  const guardTop = new THREE.Mesh(guardGeom, materials.case);
  guardTop.position.set(2.62, 0.38, 0);
  guardTop.rotation.z = -0.22;
  caseGroup.add(guardTop);

  const guardBottom = new THREE.Mesh(guardGeom, materials.case);
  guardBottom.position.set(2.62, -0.38, 0);
  guardBottom.rotation.z = 0.22;
  caseGroup.add(guardBottom);

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
    tourbillon: tourbillonGroup,
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
      materials.strap.metalness = newEdition.strapType === 'metal' ? (newEdition.caseMetalness ?? 0.95) : 0.05;
      materials.strap.roughness = newEdition.strapType === 'metal' ? (newEdition.caseRoughness ?? 0.22) : 0.75;

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
  // 3. LEATHER STRAP (Hand-Stitched French Calfskin & Deployant Buckle)
  // =========================================================
  const stitchMat = new THREE.MeshStandardMaterial({
    color: 0xF8FAFC,
    roughness: 0.9,
    metalness: 0.02
  });

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

      const totalWidth = 2.40 - t * 0.68;
      const linkLen = 0.39;

      const leatherRow = new THREE.Group();
      leatherRow.position.copy(pt);
      leatherRow.setRotationFromMatrix(basisMatrix);

      // Padded leather base
      const padGeom = new THREE.BoxGeometry(totalWidth, linkLen, 0.22);
      const padMesh = new THREE.Mesh(padGeom, materials.strap);
      leatherRow.add(padMesh);

      // Raised bombé center ridge
      const ridgeGeom = new THREE.BoxGeometry(totalWidth * 0.86, linkLen, 0.04);
      const ridgeMesh = new THREE.Mesh(ridgeGeom, materials.strap);
      ridgeMesh.position.set(0, 0, 0.12);
      leatherRow.add(ridgeMesh);

      // Left & Right Contrast Perimeter Stitches
      const stitchGeom = new THREE.BoxGeometry(0.04, linkLen * 0.75, 0.03);
      const leftStitch = new THREE.Mesh(stitchGeom, stitchMat);
      leftStitch.position.set(-totalWidth / 2 + 0.10, 0, 0.12);
      leatherRow.add(leftStitch);

      const rightStitch = new THREE.Mesh(stitchGeom, stitchMat);
      rightStitch.position.set(totalWidth / 2 - 0.10, 0, 0.12);
      leatherRow.add(rightStitch);

      // Adjustment sizing punch holes along center on bottom tail strap
      if (!isTop && i >= 6 && i <= 11) {
        const holeGeom = new THREE.CylinderGeometry(0.04, 0.04, 0.06, 8);
        const holeMesh = new THREE.Mesh(holeGeom, new THREE.MeshBasicMaterial({ color: 0x05070A }));
        holeMesh.rotation.x = Math.PI / 2;
        holeMesh.position.set(0, 0, 0.12);
        leatherRow.add(holeMesh);
      }

      // Fixed & Floating Leather Keepers
      if (!isTop && (i === 10 || i === 11)) {
        const keeperGeom = new THREE.BoxGeometry(totalWidth + 0.12, 0.14, 0.32);
        const keeperMesh = new THREE.Mesh(keeperGeom, materials.strap);
        leatherRow.add(keeperMesh);
      }

      leatherGroup.add(leatherRow);
    }
  }

  // Deployant buckle for leather strap at the back
  const leatherBuckleGroup = new THREE.Group();
  leatherBuckleGroup.position.set(0, 0, -3.85);
  const buckleGeom = new THREE.BoxGeometry(1.80, 0.85, 0.30);
  const buckleMesh = new THREE.Mesh(buckleGeom, materials.case);
  leatherBuckleGroup.add(buckleMesh);
  leatherGroup.add(leatherBuckleGroup);

  return {
    update(newEdition) {
      metalGroup.visible = (newEdition.strapType === 'metal');
      leatherGroup.visible = (newEdition.strapType !== 'metal');
    }
  };
}
