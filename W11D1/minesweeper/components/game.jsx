import React from 'react'
import ReactDOM from 'react-dom'
import {Board} from './board.jsx'


class Game extends React.Component {
  constructor(props){
    super(props)
    this.state.board = new Board(9, 81)
    this.state.board = this.state.board.bind(this)
    this.updateGame = this.updateGame.bind(this)
  }

  updateGame(){

  }

  render() {
    return(
    <div>
      <h1>Minesweeper</h1>
      <p>Click to explore a tile.</p>
      <p>Alt + Click to flag a Tile</p>
      <Board state={this.state.board} update={this.updateGame} />
    </div>
    )
    }
}

document.addEventListener("DOMContentLoaded",function(){
  const root = document.querySelector(".root")
  ReactDOM.render(<Game />, root)
})