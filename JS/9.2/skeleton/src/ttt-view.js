class View {
  constructor(game, el) {
    this.game = game;
    this.el = el; 
  }
  setupBoard() {
    const ul = document.createElement("ul");
    // this.el.appendChild(ul);
    for (let i=0; i<9; i++) {
      let li = document.createElement("li");
     ul.appendChild(li);
    
    }
    this.el.appendChild(ul);
    // add ul - give that id 
    // add lis to ul -label for later reference
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
