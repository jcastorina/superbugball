let RESOLUTION_SCALE_DOWN = 1;
let h = window.innerHeight / RESOLUTION_SCALE_DOWN;
let w = window.innerWidth / RESOLUTION_SCALE_DOWN;
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
renderer.domElement.style.width = "100%";
renderer.domElement.style.height = "100%";
const container = document.querySelector("div#canvas-container");
container.appendChild(renderer.domElement);

//skybox section
const loadSkybox = () => {
  var path = "../assets/skyboxes/foodcourt_";
  var format = ".png";
  var urls = [
    path + "xp" + format,
    path + "xn" + format,
    path + "yp" + format,
    path + "yn" + format,
    path + "zp" + format,
    path + "zn" + format,
  ];
  var reflectionCube = new THREE.CubeTextureLoader().load(urls);
  reflectionCube.format = THREE.RGBFormat;
  scene.background = reflectionCube;
  var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
  hemiLight.color.setHSL(0.6, 1, 0.6);
  hemiLight.groundColor.setHSL(0.095, 1, 0.75);
  hemiLight.position.set(0, 500, 0);
  scene.add(hemiLight);
};

loadSkybox();
