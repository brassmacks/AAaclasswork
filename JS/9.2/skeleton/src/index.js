const View = require("./ttt-view.js"); // require appropriate file
const Game = require("./../ttt_node/game.js")
// require appropriate file

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const g = new Game();
  const figure = document.querySelector(".ttt");
  const v = new View(g, figure);
  v.setupBoard();
});
