const FPS = 60;

const time = new THREE.Clock(false);
time.start();

const animate = () => {
  stats.begin();
  const delta_norm = FPS / (1 / time.getDelta());
  requestAnimationFrame(animate);
  update(delta_norm);

  renderer.render(scene, game.camera);
  stats.end();
};
animate();
