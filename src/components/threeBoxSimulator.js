import * as THREE from 'three';
import { boxBuilder } from './boxBuilder.js';
import { create3DBook } from './bookMeshBuilder.js';
import { createBoxTexture } from './textureGenerator.js';

export function initThreeBoxSimulator(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const width = container.clientWidth || 600;
  const height = 380;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
  camera.position.set(0, 4.6, 9.5);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  // Lighting
  const ambient = new THREE.AmbientLight(0xffffff, 1.1);
  scene.add(ambient);

  const dirLight = new THREE.DirectionalLight(0xffedd5, 2.5);
  dirLight.position.set(6, 12, 8);
  dirLight.castShadow = true;
  scene.add(dirLight);

  const cyanRim = new THREE.DirectionalLight(0x38bdf8, 1.2);
  cyanRim.position.set(-6, 4, -4);
  scene.add(cyanRim);

  const goldGlow = new THREE.PointLight(0xd4af37, 2.0, 10);
  goldGlow.position.set(0, 2, 2);
  scene.add(goldGlow);

  // Main rotating group
  const boxStageGroup = new THREE.Group();
  scene.add(boxStageGroup);

  // ================= 3D OBSIDIAN VAULT TRAY =================
  const boxWidth = 7.4;
  const boxHeight = 1.3;
  const boxDepth = 5.4;

  const boxTexture = createBoxTexture();
  const boxMat = new THREE.MeshStandardMaterial({
    map: boxTexture,
    roughness: 0.5,
    metalness: 0.25
  });

  const trayGeo = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  const trayMesh = new THREE.Mesh(trayGeo, boxMat);
  trayMesh.position.y = -0.65;
  trayMesh.castShadow = true;
  trayMesh.receiveShadow = true;
  boxStageGroup.add(trayMesh);

  // Velvet Crimson Liner
  const linerGeo = new THREE.BoxGeometry(boxWidth - 0.25, 0.1, boxDepth - 0.25);
  const linerMat = new THREE.MeshStandardMaterial({ color: '#4C0519', roughness: 0.85 });
  const linerMesh = new THREE.Mesh(linerGeo, linerMat);
  linerMesh.position.y = 0.05;
  boxStageGroup.add(linerMesh);

  // Books in the 3D vault
  const activeBookMeshes = new Map();
  const slotXPositions = [-2.15, 0, 2.15];

  function syncBooksWithState(state) {
    const currentIds = state.books.map(b => b.id);

    // 1. Remove unselected books
    for (const [id, item] of activeBookMeshes.entries()) {
      if (!currentIds.includes(id)) {
        boxStageGroup.remove(item.mesh);
        activeBookMeshes.delete(id);
      }
    }

    // 2. Add or update meshes for selected books
    state.books.forEach((book, slotIndex) => {
      let item = activeBookMeshes.get(book.id);
      const targetX = slotXPositions[slotIndex] || 0;
      const targetY = 0.4;
      const targetZ = 0;

      if (!item) {
        // Spawn book mesh from high above
        const mesh = create3DBook(book, { width: 1.85, height: 4.3, depth: 0.75 });
        mesh.position.set(targetX, 6.5, targetZ);
        mesh.rotation.set(-Math.PI * 0.45, 0, (Math.random() - 0.5) * 0.08);

        boxStageGroup.add(mesh);

        item = {
          mesh,
          targetY,
          targetX,
          velocity: 0,
          bounceCount: 0
        };
        activeBookMeshes.set(book.id, item);
      } else {
        item.targetX = targetX;
        item.targetY = targetY;
      }
    });
  }

  boxBuilder.subscribe(syncBooksWithState);
  syncBooksWithState(boxBuilder.getState());

  // Interactivity: Drag to rotate
  let isDragging = false;
  let prevX = 0;
  let targetRotY = 0.2;
  let targetRotX = 0.25;

  container.style.cursor = 'grab';

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    prevX = e.clientX;
    container.style.cursor = 'grabbing';
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    container.style.cursor = 'grab';
  });

  window.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const dx = e.clientX - prevX;
      targetRotY += dx * 0.008;
      prevX = e.clientX;
    }
  });

  container.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      prevX = e.touches[0].clientX;
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (isDragging && e.touches.length === 1) {
      const dx = e.touches[0].clientX - prevX;
      targetRotY += dx * 0.008;
      prevX = e.touches[0].clientX;
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  window.addEventListener('resize', () => {
    const w = container.clientWidth || 600;
    camera.aspect = w / height;
    camera.updateProjectionMatrix();
    renderer.setSize(w, height);
  });

  function animate() {
    requestAnimationFrame(animate);

    boxStageGroup.rotation.y += (targetRotY - boxStageGroup.rotation.y) * 0.08;
    boxStageGroup.rotation.x += (targetRotX - boxStageGroup.rotation.x) * 0.08;

    activeBookMeshes.forEach((item) => {
      item.mesh.position.x += (item.targetX - item.mesh.position.x) * 0.12;

      if (item.mesh.position.y > item.targetY) {
        item.velocity -= 0.038;
        item.mesh.position.y += item.velocity;

        if (item.mesh.position.y <= item.targetY) {
          item.mesh.position.y = item.targetY;
          if (item.bounceCount < 2) {
            item.velocity = -item.velocity * 0.35;
            item.bounceCount++;
          } else {
            item.velocity = 0;
          }
        }
      }
    });

    renderer.render(scene, camera);
  }

  animate();
}
