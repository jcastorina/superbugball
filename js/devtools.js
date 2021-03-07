// add FPS counter
const stats = new Stats();

document.body.appendChild(stats.dom);

// cam control
window.addEventListener("keypress", (e) => {
  if (e.key === "p") {
    game.camera = playerCamera;
  }
  if (e.key === "o") {
    game.camera = devCamera;
  }
});
