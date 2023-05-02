import * as THREE from "three";
import gsap from "gsap";

const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Camera
const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Axes Helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// Renderer
const canvas = document.querySelector("#c")!;
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

// const clock = new THREE.Clock();

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });

const tick = () => {
  // const elapsedTime = clock.getElapsedTime();
  // console.log(elapsedTime);

  // const delta = clock.getDelta();
  // console.log(delta);

  // Update objects
  // mesh.position.x += 0.01;
  // mesh.rotation.y += 0.01;
  // mesh.position.y = Math.sin(elapsedTime) * 1.5;
  // mesh.position.x = Math.cos(elapsedTime) * 1.5;

  renderer.render(scene, camera);

  requestAnimationFrame(tick);
};

tick();
