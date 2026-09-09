import * as THREE from 'three';
import { MONTHLY_BOOKS } from '../data/books.js';
import { create3DBook } from './bookMeshBuilder.js';
import { createBoxTexture } from './textureGenerator.js';

export function initThreeHero(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const width = container.clientWidth || 460;
  const height = container.clientHeight || 480;

  // Scene, Camera, Renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
  camera.position.set(0, 3.2, 11);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  // Cinematic Lighting: Moody amber key light + moonlit rim light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xfff1cf, 2.8); // Warm candle/torch glow
  keyLight.position.set(6, 12, 8);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 1024;
  keyLight.shadow.mapSize.height = 1024;
  scene.add(keyLight);

  const moonLight = new THREE.DirectionalLight(0x7dd3fc, 1.4); // Cool nocturnal rim
  moonLight.position.set(-8, 5, -5);
  scene.add(moonLight);

  const goldGlow = new THREE.PointLight(0xd4af37, 2.2, 12);
  goldGlow.position.set(0, 2, 3);
  scene.add(goldGlow);

  // Master Group for mouse rotation
  const masterGroup = new THREE.Group();
  scene.add(masterGroup);

  // ================= 3D OBSIDIAN VAULT BOX =================
  const boxGroup = new THREE.Group();
  masterGroup.add(boxGroup);

  const boxTexture = createBoxTexture();
  const boxMaterial = new THREE.MeshStandardMaterial({
    map: boxTexture,
    roughness: 0.5,
    metalness: 0.2
  });

  // Box Bottom Tray
  const trayWidth = 5.4;
  const trayHeight = 1.4;
  const trayDepth = 6.6;
  const trayGeo = new THREE.BoxGeometry(trayWidth, trayHeight, trayDepth);
  const trayMesh = new THREE.Mesh(trayGeo, boxMaterial);
  trayMesh.position.y = -0.7;
  trayMesh.castShadow = true;
  trayMesh.receiveShadow = true;
  boxGroup.add(trayMesh);

  // Interior Velvet Crimson Bed
  const velvetGeo = new THREE.BoxGeometry(trayWidth - 0.2, 0.2, trayDepth - 0.2);
  const velvetMat = new THREE.MeshStandardMaterial({
    color: '#4C0519', // Deep Crimson Velvet
    roughness: 0.9,
    metalness: 0.1
  });
  const velvetMesh = new THREE.Mesh(velvetGeo, velvetMat);
  velvetMesh.position.y = 0.05;
  boxGroup.add(velvetMesh);

  // Opening Vault Flap (Lid)
  const flapGeo = new THREE.BoxGeometry(trayWidth, 0.12, trayDepth / 2);
  const flapMesh = new THREE.Mesh(flapGeo, boxMaterial);
  flapMesh.position.set(0, 0.06, -trayDepth / 4);
  const flapPivot = new THREE.Group();
  flapPivot.position.set(0, 0, -trayDepth / 2);
  flapPivot.add(flapMesh);
  flapMesh.position.z = trayDepth / 4;
  flapPivot.rotation.x = -Math.PI * 0.48; // Open angle
  boxGroup.add(flapPivot);

  // ================= 3D HARDCOVER TOMES =================
  const booksGroup = new THREE.Group();
  masterGroup.add(booksGroup);

  const sampleBooks = [MONTHLY_BOOKS[0], MONTHLY_BOOKS[1], MONTHLY_BOOKS[2]];
  const bookMeshes = [];

  sampleBooks.forEach((book, i) => {
    const bookMesh = create3DBook(book, { width: 3.2, height: 4.4, depth: 0.65 });

    const yPos = 0.4 + i * 0.65;
    const xPos = (i - 1) * 0.35;
    const rotY = (i - 1) * 0.18;
    const rotZ = (i === 1 ? -0.06 : 0.05);

    bookMesh.position.set(xPos, yPos, (i - 1) * 0.2);
    bookMesh.rotation.set(-Math.PI * 0.36, rotY, rotZ);

    bookMesh.userData.baseY = yPos;
    bookMesh.userData.floatOffset = i * 1.5;

    booksGroup.add(bookMesh);
    bookMeshes.push(bookMesh);
  });

  // ================= CELESTIAL GOLDEN EMBERS / DUST =================
  const particleCount = 60;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 12;
    positions[i + 1] = Math.random() * 7 - 1;
    positions[i + 2] = (Math.random() - 0.5) * 10;
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: '#F59E0B',
    size: 0.16,
    transparent: true,
    opacity: 0.9
  });
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  // ================= INTERACTIVITY (DRAG & PARALLAX) =================
  let mouseX = 0;
  let mouseY = 0;
  let targetRotationY = 0.4;
  let targetRotationX = 0.22;
  let isDragging = false;
  let previousMouseX = 0;
  let previousMouseY = 0;

  container.style.cursor = 'grab';

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    previousMouseX = e.clientX;
    previousMouseY = e.clientY;
    container.style.cursor = 'grabbing';
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    container.style.cursor = 'grab';
  });

  window.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    if (isDragging) {
      const deltaX = e.clientX - previousMouseX;
      const deltaY = e.clientY - previousMouseY;
      targetRotationY += deltaX * 0.01;
      targetRotationX += deltaY * 0.01;
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    } else {
      mouseX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      mouseY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    }
  });

  // Touch controls
  container.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      previousMouseX = e.touches[0].clientX;
      previousMouseY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (isDragging && e.touches.length === 1) {
      const deltaX = e.touches[0].clientX - previousMouseX;
      const deltaY = e.touches[0].clientY - previousMouseY;
      targetRotationY += deltaX * 0.01;
      targetRotationX += deltaY * 0.01;
      previousMouseX = e.touches[0].clientX;
      previousMouseY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  function handleResize() {
    if (!container) return;
    const newWidth = container.clientWidth || 460;
    const newHeight = container.clientHeight || 480;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  }
  window.addEventListener('resize', handleResize);

  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    const parallaxY = !isDragging ? mouseX * 0.35 : 0;
    const parallaxX = !isDragging ? mouseY * 0.2 : 0;

    masterGroup.rotation.y += (targetRotationY + parallaxY - masterGroup.rotation.y) * 0.06;
    masterGroup.rotation.x += (targetRotationX + parallaxX - masterGroup.rotation.x) * 0.06;

    bookMeshes.forEach((mesh) => {
      const float = Math.sin(elapsedTime * 1.6 + mesh.userData.floatOffset) * 0.08;
      mesh.position.y = mesh.userData.baseY + float;
    });

    particles.rotation.y = elapsedTime * 0.06;

    renderer.render(scene, camera);
  }

  animate();
}
