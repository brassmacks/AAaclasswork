const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;
const Asteroid = require("./asteroid.js");
window.Asteroid = Asteroid;
const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 10,
    color: "#00FF00"
  });
const stroid = new Asteroid(20,20);
const to = new MovingObject({
    pos: [60, 30],
    vel: [10, 10],
    radius: 10,
    color: "#00FF00"
});
document.addEventListener("DOMContentLoaded", function(){
    const screen = document.getElementById("game-canvas");
    const ctx = screen.getContext("2d");
      mo.draw(ctx);
      mo.move();
    to.draw(ctx);
      
});
