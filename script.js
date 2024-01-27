let canvas = document.querySelector("canvas");
let screen = {
  width: window.innerWidth,
  height: window.innerHeight,
};
let c = canvas.getContext("2d");
canvas.width = screen.width;
canvas.height = screen.height;

let r = 20;
let x = 20;
dx = 0.5 * 1;
let y = 20;
dy = 0.5 * 1;

function animate() {
  c.beginPath();
  c.clearRect(0, 0, screen.width, screen.height);
  c.arc(x, y, r, 0, 2 * Math.PI, false);
  c.fillStyle = "red";
  c.fill();
  // x += dx;
  // if (x + r > screen.width || x - r < 0) {
  //   dx = -dx;
  // }
  y += dy;
  if (y + r > screen.height || y - r < 0) {
    dy = -dy;
  }
  requestAnimationFrame(animate);
}

animate();
