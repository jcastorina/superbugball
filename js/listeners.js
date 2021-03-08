function handleResize() {
  h = window.innerHeight / RESOLUTION_SCALE_DOWN;
  w = window.innerWidth / RESOLUTION_SCALE_DOWN;
  renderer.setSize(w, h);
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  game.camera.aspect = w / h;
  game.camera.updateProjectionMatrix();
}

function handleDocumentMouseMove(event) {
  if (lockedMouse) {
    vmouse.x = (event.clientX / window.innerWidth) * 2 - 1 - vmouseOffset.x;
    vmouse.y = -(event.clientY / window.innerHeight) * 2 + 1 - vmouseOffset.y;
    me.mouse.curr.x += event.movementX / MOUSE_SENSITIVITY;
    me.mouse.curr.y += event.movementY / MOUSE_SENSITIVITY;
  }
}

function handleDocumentMouseDown(event) {
  if (event.button === 0) {
    me.mouse.past.x = me.mouse.curr.x;
    me.mouse.past.y = me.mouse.curr.y;
    me.mouse.down = true;
  }
  if (event.button === 2) {
    me.mouse.past.x = me.mouse.curr.x;
    me.mouse.past.y = me.mouse.curr.y;
    me.mouse.rc = true;
  }
}

function handleDocumentMouseUp(event) {
  if (event.button === 0) {
    me.mouse.down = false;
  }
  if (event.button === 0) {
    me.mouse.rc = false;
  }
}

function handleDocumentKeyDown(event) {
  if (event.which === 27) {
    //ESC
    document.exitPointerLock();
    lockedMouse = false;
    newLockedMouse = true;
  }
  me.keyboard[event.which] = true;
}

function handleDocumentKeyUp(event) {
  me.keyboard[event.which] = false;
}

window.addEventListener("resize", handleResize, false);
window.addEventListener("mousemove", handleDocumentMouseMove, false);
window.addEventListener("keydown", handleDocumentKeyDown, false);
window.addEventListener("keyup", handleDocumentKeyUp, false);
window.addEventListener("mousedown", handleDocumentMouseDown, false);
window.addEventListener("mouseup", handleDocumentMouseUp, false);
