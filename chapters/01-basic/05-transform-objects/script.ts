import * as THREE from "three";

const scene = new THREE.Scene();

function makeCube(color: THREE.Color, x: number) {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = x;
  return mesh;
}

// Red Cube
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: "red" });
// const mesh = new THREE.Mesh(geometry, material);
// // mesh.position.set(0.7, -0.6, 1);
// mesh.scale.set(2, 0.5, 1);

// mesh.rotation.y = Math.PI * 0.5;
// mesh.rotation.x = Math.PI * 0.5;
// mesh.rotation.z = Math.PI * 0.5;

// scene.add(mesh);

// Group
const group = new THREE.Group();

const cube1 = makeCube(new THREE.Color("red"), -2);
group.add(cube1);
const cube2 = makeCube(new THREE.Color("green"), 0);
group.add(cube2);
const cube3 = makeCube(new THREE.Color("blue"), 2);
group.add(cube3);

group.position.set(0, 1, 0);
group.scale.x = 0.5;

scene.add(group);

// Axes Helper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

// Camera
const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.x = 1;
// camera.position.y = 1;
scene.add(camera);

// camera.lookAt(mesh.position);

// Renderer
const canvas = document.querySelector("#c")!;
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
