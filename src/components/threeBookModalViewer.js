import * as THREE from 'three';
import { create3DBook } from './bookMeshBuilder.js';

export function render3DBookModalViewer(containerId, book) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const width = container.clientWidth || 280;
  const height = 360;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
  camera.position.set(0, 0.5, 9);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  // Lighting for rich foil reflection
  const ambient = new THREE.AmbientLight(0xffffff, 1.4);
  scene.add(ambient);

  const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
  keyLight.position.set(5, 8, 6);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xb6beff, 1.0);
  fillLight.position.set(-6, -2, -4);
  scene.add(fillLight);

  const goldAccent = new THREE.PointLight(0xd4af37, 2.2, 16);
  goldAccent.position.set(3, 4, 4);
  scene.add(goldAccent);

  const bookGroup = new THREE.Group();
  scene.add(bookGroup);

  const book3D = create3DBook(book, { width: 3.4, height: 4.8, depth: 0.7 });
  bookGroup.add(book3D);

  // Interactivity: Drag to spin 360
  let isDragging = false;
  let prevX = 0;
  let prevY = 0;
  let targetRotY = -0.35; // Slight 3/4 front view
  let targetRotX = 0.05;

  container.style.cursor = 'grab';

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    prevX = e.clientX;
    prevY = e.clientY;
    container.style.cursor = 'grabbing';
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    if (container) container.style.cursor = 'grab';
  });

  window.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      targetRotY += dx * 0.012;
      targetRotX += dy * 0.012;
      prevX = e.clientX;
      prevY = e.clientY;
    }
  });

  // Touch controls
  container.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      prevX = e.touches[0].clientX;
      prevY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (isDragging && e.touches.length === 1) {
      const dx = e.touches[0].clientX - prevX;
      const dy = e.touches[0].clientY - prevY;
      targetRotY += dx * 0.012;
      targetRotX += dy * 0.012;
      prevX = e.touches[0].clientX;
      prevY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  let running = true;
  function animate() {
    if (!running) return;
    requestAnimationFrame(animate);

    // Idle spin if not dragged
    if (!isDragging) {
      targetRotY += 0.005;
    }

    bookGroup.rotation.y += (targetRotY - bookGroup.rotation.y) * 0.08;
    bookGroup.rotation.x += (targetRotX - bookGroup.rotation.x) * 0.08;

    renderer.render(scene, camera);
  }

  animate();

  return {
    destroy() {
      running = false;
      renderer.dispose();
      container.innerHTML = '';
    }
  };
}
