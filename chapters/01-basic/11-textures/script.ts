import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

/**
 * Textures
 */
// const image = new Image();
// const texture = new THREE.Texture(image);

// image.onload = () => {
//   texture.needsUpdate = true;
//   console.log(texture);
// };
// image.src = "/textures/door/color.jpg";
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("/textures/door/color.jpg");
// texture.repeat.x = 2;
// texture.repeat.y = 3;
// texture.wrapS = THREE.MirroredRepeatWrapping;
// texture.wrapT = THREE.MirroredRepeatWrapping;
// texture.offset.x = 0.5;
// texture.offset.y = 0.5;
texture.rotation = Math.PI / 4;
texture.center.x = 0.5;
texture.center.y = 0.5;

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

window.addEventListener("dblclick", () => {
  // for safari, this also work on version 16.4+
  // see https://caniuse.com/?search=requestFullscreen
  if (!document.fullscreenElement) {
    canvas.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

// Cursor
const cursor = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = (event.clientY / sizes.height - 0.5) * -1;
});

const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ map: texture });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Camera

const camera = new THREE.PerspectiveCamera(90, sizes.width / sizes.height);

// const aspectRatio = sizes.width / sizes.height;
// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRatio,
//   1 * aspectRatio,
//   1,
//   -1,
//   0.1,
//   100
// );
// camera.position.set(2, 2, 2);
camera.position.z = 3;
// camera.lookAt(mesh.position);
scene.add(camera);

// Renderer
const canvas: HTMLCanvasElement = document.querySelector("#c")!;
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Controls
const controls = new OrbitControls(camera, canvas);
// controls.enabled = false;
controls.enableDamping = true;

const clock = new THREE.Clock();

function tick() {
  // Update objects
  // mesh.rotation.y = clock.getElapsedTime();

  // Update camera
  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
  // camera.position.y = cursor.y * 5;
  // camera.lookAt(mesh.position);

  controls.update();

  renderer.render(scene, camera);

  requestAnimationFrame(tick);
}

tick();
