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
  constructor(x, y) {
    this.br = 20;
    this.r = this.br;
    this.x = x || rnd(0 + this.r, screen.width - this.r);
    this.y = y || rnd(0 + this.r, screen.height - this.r);
    this.color = `rgb(${Math.random() * 255},${Math.random() * 255},${
      Math.random() * 255
    })`;
    this.dx = (Math.random() - 0.5) * 1;
    this.dy = Math.random() * 1;
    this.g = 0.04;
    this.f = 0.7;
    this.draw();
  }
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    c.fillStyle = this.color;
    c.fill();
  }
  update() {
    if (this.y + this.dy + this.r > screen.height) {
      this.dy = -this.dy * this.f;
      this.dx = -this.dx * this.f;
    }
    if (this.x + this.dx + this.r > screen.width || this.x + this.dx < 0) {
      this.dx = -this.dx;
    }
    this.y += this.dy;
    this.dy += this.g;
    this.x += this.dx;
    this.draw();
  }
}

class Canvas {
  constructor() {
    this.balls = [];
    for (let i = 0; i < 20; i++) {
      this.balls.push(new Ball());
    }
  }

  animate() {
    c.clearRect(0, 0, screen.width, screen.height);
    this.balls.forEach((ball) => ball.update());
    requestAnimationFrame(this.animate.bind(this));
  }
}

let mycan = new Canvas();
mycan.animate();

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// EventListeners
window.addEventListener("click", (e) =>
  mycan.balls.push(new Ball(e.clientX, e.clientY))
);

window.addEventListener("mousemove", (e) => {
  mycan.balls.forEach((ball) => {
    let d = Math.sqrt(
      Math.pow(e.clientX - ball.x, 2) + Math.pow(e.clientY - ball.y, 2)
    );
    if (d < 100 && ball.r < ball.br * 4) {
      ball.r += 1;
      ball.y -= 4;
    } else if (ball.r > ball.br) {
      ball.r -= 1;
    }
  });
});
