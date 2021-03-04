const animate = function () {
  stats.begin();
  requestAnimationFrame(animate);
  stats.end();
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};
animate();
