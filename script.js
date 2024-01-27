let canvas = document.querySelector("canvas");
this.screen = {
  width: window.innerWidth,
  height: window.innerHeight,
};
this.mouse = {
  x: screen.width / 2,
  y: screen.height / 2,
};
let c = canvas.getContext("2d");
canvas.width = screen.width;
canvas.height = screen.height;

class Ball {
  constructor() {
    this.r = 20;
    this.x = rnd(0 + this.r, screen.width - this.r);
    this.y = rnd(0 + this.r, screen.height - this.r);
    this.color = `rgb(${Math.random() * 255},${Math.random() * 255},${
      Math.random() * 255
    })`;
    this.dx = (Math.random() - 0.5) * 1;
    this.dy = (Math.random() - 0.5) * 1;
    this.draw();
  }
  draw() {
    c.clearRect(0, 0, screen.width, screen.height);
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    c.fillStyle = this.color;
    c.fill();
  }
  update() {
    this.x += this.dx;
    if (this.x + this.r > screen.width || this.x - this.r < 0) {
      this.dx = -this.dx;
    }
    this.y += this.dy;
    if (this.y + this.r > screen.height || this.y - this.r < 0) {
      this.dy = -this.dy;
    }
    this.draw();
  }
}

class Canvas {
  constructor() {
    this.ball = new Ball();
  }

  animate() {
    this.ball.update();
    requestAnimationFrame(this.animate.bind(this));
  }
}

let mycan = new Canvas();

mycan.animate();

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
