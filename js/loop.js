const animate = function () {
  stats.begin();
  requestAnimationFrame(animate);
  update();
  stats.end();

  renderer.render(scene, camera);
};
animate();
