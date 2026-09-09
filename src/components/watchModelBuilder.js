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
      envMapIntensity: 1.6
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
  const sapphireGeom = new THREE.CircleGeometry(2.36, 64);
  const sapphireMesh = new THREE.Mesh(sapphireGeom, materials.sapphire);
  sapphireMesh.position.z = 0.28;
  layerSapphire.add(sapphireMesh);

  // Subtle steel retention rim
  const rimGeom = new THREE.TorusGeometry(2.37, 0.03, 16, 64);
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
    depth: 0.20,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: 0.02,
    bevelThickness: 0.02,
    curveSegments: 64
  });
  const bezelSteelMesh = new THREE.Mesh(bezelSteelGeom, materials.case);
  bezelSteelMesh.position.z = -0.10;
  layerBezel.add(bezelSteelMesh);

  // Ceramic / Steel insert ring (HOLLOW ring from 2.37 to 2.64 with satin finish)
  const ceramicGeom = new THREE.RingGeometry(2.37, 2.64, 64);
  const ceramicMesh = new THREE.Mesh(ceramicGeom, materials.bezelInsert);
  ceramicMesh.position.z = 0.12;
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
    screwGroup.position.set(sx, sy, 0.13);
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
  // 5. CALIBRE MOVEMENT LAYER
  // -------------------------------------------------------------
  const movementPlateGeom = new THREE.CylinderGeometry(2.32, 2.32, 0.28, 64);
  const movementPlateMesh = new THREE.Mesh(movementPlateGeom, materials.movement);
  movementPlateMesh.rotation.x = Math.PI / 2;
  layerMovement.add(movementPlateMesh);

  // Rotating Balance Wheel with hairspring
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
  balanceWheelGroup.position.set(-0.7, -0.6, -0.15);
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
    depth: 0.50,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: 0.02,
    bevelThickness: 0.02,
    curveSegments: 64
  });
  const caseBarrelMesh = new THREE.Mesh(caseBarrelGeom, materials.case);
  caseBarrelMesh.position.z = -0.30;
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
