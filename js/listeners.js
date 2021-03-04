const handleResize = function () {
  h = window.innerHeight;
  w = window.innerWidth;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
};

window.addEventListener("resize", handleResize);
