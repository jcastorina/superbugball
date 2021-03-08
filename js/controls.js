//controls

//*****************/
//   GLOBAL SETTINGS
//
const MOUSE_SENSITIVITY = 200;
const GRAVITY = 0.05;
//*****************/

const vmouse = new THREE.Vector2();
const vmouseOffset = new THREE.Vector2();
let lockedMouse = false;
let newLockedMouse = true;

const me = {
  keyboard: [],
  mouse: {
    down: false,
    rc: false,
    curr: {
      x: 0,
      y: 0,
    },
    past: {
      x: 0,
      y: 0,
    },
    last: {
      x: 0,
      y: 0,
    },
  },
};

const game = {
  camera: playerCamera,
};

me.mouse.curr.x = 0;
me.mouse.curr.y = 0;

renderer.domElement.onclick = () => {
  renderer.domElement.requestPointerLock();
  if (newLockedMouse) {
    vmouseOffset.x = (event.clientX / window.innerWidth) * 2 - 1;
    vmouseOffset.y = -(event.clientY / window.innerHeight) * 2 + 1;
    newLockedMouse = false;
  }
  lockedMouse = true;
};
