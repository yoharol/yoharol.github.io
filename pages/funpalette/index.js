
import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';
// import './style.css';

let canvas, camera, scene, renderer, controls;

init_scene();

function init_scene() {
  canvas = document.querySelector(".webgl");
  scene = new THREE.Scene();
  const size = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  camera = new THREE.PerspectiveCamera(75, size.width / size.height, 1, 500);
  camera.position.set(0, 0, 10);
  camera.lookAt(0, 0, 0);
  scene.add(camera);
  renderer = new THREE.WebGL1Renderer({
    canvas: canvas
  });
  renderer.setSize(size.width, size.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  document.body.appendChild(renderer.domElement);
  controls = new OrbitControls(camera, renderer.domElement);
}

const geomertry = new THREE.BoxGeometry(1, 1, 1);
/*const boxMaterial = new THREE.MeshBasicMaterial({
  color: 0xffff00
});*/
const boxMaterial = new THREE.MeshNormalMaterial({});
const mesh = new THREE.Mesh(geomertry, boxMaterial);
scene.add(mesh);

const material = new THREE.LineBasicMaterial({ color: 0x0000ff });


function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate()