//*****************/
//   Add Demo Camera
//
const devCamera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
devCamera.rotation.order = "YXZ";
devCamera.position.y = 5;
devCamera.name = "devCamera";

//*****************/

//*****************/
//   Add Player Camera
//
window.playerCamera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
playerCamera.name = "playerCamera";

//*****************/
