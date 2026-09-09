import * as THREE from 'three';
import { createBookCoverTexture, createBookSpineTexture, createPagesTexture } from './textureGenerator.js';

export function create3DBook(book, options = {}) {
  const width = options.width || 3.4;
  const height = options.height || 4.8;
  const depth = options.depth || 0.7;

  const group = new THREE.Group();
  group.name = `book-${book.id}`;

  const coverTexture = createBookCoverTexture(book);
  const spineTexture = createBookSpineTexture(book);
  const pagesTexture = createPagesTexture();

  // Materials array for BoxGeometry:
  // [0] right (pages fore edge)
  // [1] left (spine)
  // [2] top (pages top edge)
  // [3] bottom (pages bottom edge)
  // [4] front (cover front)
  // [5] back (cover back)

  // Gilded Gold Edges Material
  const gildedPagesMaterial = new THREE.MeshStandardMaterial({
    map: pagesTexture,
    roughness: 0.25,
    metalness: 0.85,
    color: '#FFD700'
  });

  const coverMaterial = new THREE.MeshStandardMaterial({
    map: coverTexture,
    roughness: 0.35,
    metalness: 0.25
  });

  const spineMaterial = new THREE.MeshStandardMaterial({
    map: spineTexture,
    roughness: 0.35,
    metalness: 0.25
  });

  const backMaterial = new THREE.MeshStandardMaterial({
    color: book.coverColor,
    roughness: 0.45,
    metalness: 0.15
  });

  const materials = [
    gildedPagesMaterial, // +X: Gilded Fore-edge
    spineMaterial,       // -X: Spine
    gildedPagesMaterial, // +Y: Gilded Top
    gildedPagesMaterial, // -Y: Gilded Bottom
    coverMaterial,       // +Z: Front cover with gold foil
    backMaterial         // -Z: Back cover
  ];

  const bookGeometry = new THREE.BoxGeometry(width, height, depth);
  const bookMesh = new THREE.Mesh(bookGeometry, materials);
  bookMesh.castShadow = true;
  bookMesh.receiveShadow = true;
  group.add(bookMesh);

  // Silk Ribbon bookmark (Crimson silk with gold tip)
  const ribbonCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, -height / 2, 0),
    new THREE.Vector3(0.15, -height / 2 - 0.4, 0.2),
    new THREE.Vector3(0.3, -height / 2 - 0.9, 0.15),
    new THREE.Vector3(0.2, -height / 2 - 1.3, 0.3)
  ]);

  const ribbonGeo = new THREE.TubeGeometry(ribbonCurve, 24, 0.05, 8, false);
  const ribbonMat = new THREE.MeshStandardMaterial({
    color: '#881337', // Crimson silk
    roughness: 0.3,
    metalness: 0.3
  });
  const ribbonMesh = new THREE.Mesh(ribbonGeo, ribbonMat);
  group.add(ribbonMesh);

  // Little gold charm at end of ribbon
  const charmGeo = new THREE.SphereGeometry(0.1, 16, 16);
  const charmMat = new THREE.MeshStandardMaterial({
    color: '#D4AF37',
    metalness: 0.9,
    roughness: 0.2
  });
  const charmMesh = new THREE.Mesh(charmGeo, charmMat);
  charmMesh.position.set(0.2, -height / 2 - 1.35, 0.3);
  group.add(charmMesh);

  group.userData = {
    book,
    baseY: 0,
    floatOffset: 0
  };

  return group;
}
