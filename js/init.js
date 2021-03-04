let h = window.innerHeight;
let w = window.innerWidth;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

//renderer.setSize(400 * (16 / 9), 400);
renderer.setSize(h, w);
document.body.appendChild(renderer.domElement);
