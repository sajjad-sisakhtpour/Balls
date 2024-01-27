let canvas = document.querySelector("canvas");
let screen = {
  width: window.innerWidth,
  height: window.innerHeight,
};
let c = canvas.getContext("2d");
canvas.width = screen.width;
canvas.height = screen.height;

let r = 20;
let x = rnd(0+r,screen.width-r);
let y = rnd(0+r,screen.height-r);
let color=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
dx = (Math.random()-0.5) * 1;
dy = (Math.random()-0.5) * 1;


function animate() {
  c.beginPath();
  c.clearRect(0, 0, screen.width, screen.height);
  c.arc(x, y, r, 0, 2 * Math.PI, false);
  c.fillStyle = color;
  c.fill();
  x += dx;
  if (x + r > screen.width || x - r < 0) {
    dx = -dx;
  }
  y += dy;
  if (y + r > screen.height || y - r < 0) {
    dy = -dy;
  }
  requestAnimationFrame(animate);
}

animate();

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}