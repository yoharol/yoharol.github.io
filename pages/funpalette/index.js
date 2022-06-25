
import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';
import { Line2 } from "line2"
import { LineMaterial } from "lineMaterial"
import { LineGeometry } from "lineGeometry"

var cover = document.querySelector(".cover")
cover.parentNode.removeChild(cover)

let canvas, camera, scene, renderer, controls;

const sprite = new THREE.TextureLoader().load('sprite.png');

init_scene();

const color_list = document.querySelector('.colorlist')
var pickr_list = [];

function add_color() {
  const newPickr = document.createElement('div');
  color_list.appendChild(newPickr);
  const pickr = new Pickr({
    el: newPickr,
    default: '#42445A',
    theme: 'classic',
    lockOpacity: true,

    swatches: [
      'rgba(244, 67, 54, 1)',
      'rgba(233, 30, 99, 0.95)',
      'rgba(156, 39, 176, 0.9)',
      'rgba(103, 58, 183, 0.85)',
      'rgba(63, 81, 181, 0.8)',
      'rgba(33, 150, 243, 0.75)',
      'rgba(3, 169, 244, 0.7)',
      'rgba(0, 188, 212, 0.7)',
      'rgba(0, 150, 136, 0.75)',
      'rgba(76, 175, 80, 0.8)',
      'rgba(139, 195, 74, 0.85)',
      'rgba(205, 220, 57, 0.9)',
      'rgba(255, 235, 59, 0.95)',
      'rgba(255, 193, 7, 1)'
    ],

    components: {
      preview: true,
      opacity: true,
      hue: true,

      interaction: {
        hex: true,
        rgba: true,
        hsva: true,
        input: true,
        clear: true,
        save: true
      }
    }
  });
  pickr_list.push(pickr);
  console.log(pickr_list);
}

document.getElementById("add color").onclick = add_color;

console.log('test'+1+'test')


function init_scene() {

  canvas = document.querySelector(".webgl");

  var inwidth = window.innerWidth;
  var inheight = window.innerHeight;

  const size = {
    width: inwidth * 0.485, //window.innerWidth,
    height: inheight * 0.5, // window.innerHeight,
  };

  renderer = new THREE.WebGL1Renderer({
    canvas: canvas,
    antialias: true
  });
  renderer.setSize(size.width, size.height);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x171723, 1.0);
  renderer.shadowMap.enabled = true;
  document.body.appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, size.width / size.height, 1, 1000);
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);
  scene.add(camera);

  controls = new OrbitControls(camera, renderer.domElement);
}

var pointArr = [
  -100, 0, 0,
  -100, 100, 0,
  0, 0, 0,
  100, 100, 0,
  100, 0, 0
];
var colors = []
var col = new THREE.Color();
for (let i = 0; i < 5; i++) {
  const t = i / 5;
  col.setHSL(t, 1.0, 0.5);
  colors.push(col.r, col.g, col.b);
}

var lineGeometry = new LineGeometry();
lineGeometry.setPositions(pointArr);
lineGeometry.setColors(colors);

var lineMaterial = new LineMaterial({
  color: 0xffffff,
  linewidth: 5,
  vertexColors: true
})
lineMaterial.resolution.set(window.innerWidth, window.innerHeight)
var line = new Line2(lineGeometry, lineMaterial)
line.computeLineDistances()
scene.add(line)

var pointGeometry = new THREE.BufferGeometry();
pointGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pointArr), 3));
pointGeometry.setAttribute('color', new THREE.Float32BufferAttribute(new Float32Array(colors), 3));
const pointMaterial = new THREE.PointsMaterial({
  size: 20,
  sizeAttenuation: true,
  map: sprite,
  transparent: true,
  vertexColors: true
});
const pointCloud = new THREE.Points(pointGeometry, pointMaterial);
scene.add(pointCloud);


function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate()