const animate = () => {
  stats.begin();
  requestAnimationFrame(animate);
  update();
  stats.end();

  if (game) {
    renderer.render(scene, game.camera);
  }
};
animate();
