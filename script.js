let canvas = document.querySelector("canvas");
let screen = {
  width: window.innerWidth,
  height: window.innerHeight,
};
canvas.width = screen.width;
canvas.height = screen.height;
let c = canvas.getContext("2d");

c.arc(100,100,20,0,2*Math.PI,false)
c.fillStyle='red'
c.fill()
