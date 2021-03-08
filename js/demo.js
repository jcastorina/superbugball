//*****************/
//   Add Skybox
//
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

//*****************/

//*****************/
//   Add Player (Pathopper)
//
window.player = new THREE.Object3D();

const player_texture = new THREE.TextureLoader().load(
  "../assets/textures/pathopper1.png"
);
const player_geometry = new THREE.PlaneBufferGeometry(6, 6);
const player_material = new THREE.MeshBasicMaterial({
  map: player_texture,
  side: THREE.DoubleSide,
  transparent: true,
});
window.player_sprite = new THREE.Mesh(player_geometry, player_material);
player_sprite.rotation.order = "ZYX";
player_sprite.position.y = 3;
player_sprite.position.x = 2;
player_sprite.position.z = -10;
player_sprite.rotation.z = Math.PI / 2;
player_sprite.rotation.y = Math.PI / 2;
//player_sprite.rotation.x = Math.PI / 2;
//player_sprite.rotation.y = -Math.PI / 2;

// vars
player.isJumping = false;
player.hasBall = true;
player.fallAcceleration = 0;
player.isBoosted = false;
// constants
player.JUMP_FORCE = 1.2;
player.POWER = 2;
player.BASE_SPEED = 0.5;
player.BOOST_SPEED = 0.5;
// position
player.rotation.order = "YXZ";
player.add(player_sprite);
0;
scene.add(player);
//*****************/

//*****************/
//   Add Player Cam Mount
//
window.cameraMount = new THREE.Object3D();
cameraMount.rotation.order = "YXZ";
cameraMount.position.y = 55;
//cameraMount.position.x = 65;
cameraMount.rotation.y = Math.PI / 2;
//cameraMount.rotation.x = -0.9;
cameraMount.rotation.x = -Math.PI / 2;

cameraMount.add(playerCamera);
scene.add(cameraMount);

//*****************/

//*****************/
//   Add Court
//
const court_texture = new THREE.TextureLoader().load(
  "../assets/textures/court1.jpg"
);
const court_geometry = new THREE.PlaneBufferGeometry(100, 100);
const court_material = new THREE.MeshBasicMaterial({
  map: court_texture,
  side: THREE.DoubleSide,
});
const court = new THREE.Mesh(court_geometry, court_material);
court.rotation.order = "YXZ";
court.rotateX(-Math.PI / 2);
court.position.y = 0;
court.scale.setX(1.5);
scene.add(court);
//*****************/

//*****************/
//   Add Ball
//
const ball_texture = new THREE.TextureLoader().load(
  "../assets/textures/basketball1.jpg"
);
const ball_geometry = new THREE.SphereGeometry(0.3, 32, 32);
const ball_material = new THREE.MeshBasicMaterial({ map: ball_texture });
const ball = new THREE.Mesh(ball_geometry, ball_material);
ball.isHeld = true;
ball.isFalling = true;
ball.isShot = false;
ball.fallAcceleration = 0;
ball.scale.set(3, 3, 3);
scene.add(ball);
const launchVec = new THREE.Vector3(0, 0, 0);
const ballWorldMat = new THREE.Matrix4();
//*****************/

//*****************/
//   Add Hoop Assembly
//
const post_geometry = new THREE.CylinderGeometry(0.5, 1, 12, 32);
const post_material = new THREE.MeshBasicMaterial({ color: 0x123456 });
const post = new THREE.Mesh(post_geometry, post_material);
post.position.x = 72;
post.position.y = 6;
const arm_geometry = new THREE.CylinderGeometry(0.5, 0.5, 12, 32);
const arm_material = new THREE.MeshBasicMaterial({ color: 0x123456 });
const arm = new THREE.Mesh(arm_geometry, arm_material);
arm.position.y = 7.5;
arm.position.x = -5.5;
arm.rotation.z = 1.3;
const backboard_texture = new THREE.TextureLoader().load(
  "../assets/textures/backboard1.png"
);
const backboard_geometry = new THREE.PlaneBufferGeometry(10, 10);
const backboard_material = new THREE.MeshBasicMaterial({
  map: backboard_texture,
  side: THREE.DoubleSide,
  transparent: true,
});
const backboard = new THREE.Mesh(backboard_geometry, backboard_material);
backboard.rotateY(-Math.PI / 2);
backboard.scale.setX(1.3);
backboard.position.x = -11.4;
backboard.position.y = 10;
const hoop_geometry = new THREE.TorusGeometry(1.5, 0.1, 8, 24);
const hoop_material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const hoop = new THREE.Mesh(hoop_geometry, hoop_material);
hoop.rotateX(-Math.PI / 2);
hoop.position.x = -14;
hoop.position.y = 7;
post.add(arm);
post.add(backboard);
post.add(hoop);
scene.add(post);
//*****************/
