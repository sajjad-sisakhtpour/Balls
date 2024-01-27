let canvas = document.querySelector("canvas");
let screen = {
  width: window.innerWidth,
  height: window.innerHeight,
};
let c = canvas.getContext("2d");
canvas.width = screen.width;
canvas.height = screen.height;

let x = 20;
dx = 0.5 * 1;

function animate() {
  c.beginPath();
  c.clearRect(0, 0, screen.width, screen.height);
  c.arc(x, 100, 20, 0, 2 * Math.PI, false);
  c.fillStyle = "red";
  c.fill();
  x += dx;
  requestAnimationFrame(animate);
}

animate();
