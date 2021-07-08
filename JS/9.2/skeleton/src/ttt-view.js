class View {
  constructor(game, el) {
    this.game = game;
    this.el = el; 
    this.setupBoard();
    this.handleClick = this.handleClick.bind(this);
    // this.makeMove = this.makeMove.bind(this);

  }
  setupBoard() {
    const ul = document.createElement("ul");
    // this.el.appendChild(ul);
    for (let i = 0; i < 9; i++) {
      let li = document.createElement("li");
      li.setAttribute("id", `s${i}`);
      ul.appendChild(li);
    }
    this.el.appendChild(ul);
    // add ul - give that id 
    // add lis to ul -label for later reference
  }
  
  bindEvents() {
    this.el.addEventListener("click", this.handleClick);

  }

  handleClick(e) {
    
    let id = parseInt(e.target.id[1]);
    let x = id % 3;
    let y;
    if (id < 3) {
      y = 0;
    } else if (id > 5) {
      y = 2;
    } else { y = 1;}
    let pos = [x,y];
    this.game.playMove(pos);
    this.makeMove(e.target);
  }

  makeMove(square) {
    let mark = (this.game.currentPlayer).toUpperCase();
    square.classList.toggle(`selected${mark}`);
    square.innerHTML = mark;
    if (this.game.winner()) {
      let winBanner = document.querySelector("h2");
      winBanner.innerHTML = `${mark} HAS WON!`;
      winBanner.classList.toggle(`${mark}`)
      this.el.removeEventListener("click", this.handleClick)
    }
  }

}

module.exports = View;
