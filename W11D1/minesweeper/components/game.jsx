import React from 'react'
import ReactDOM from 'react-dom'
import Board from './board'
import * as Minesweeper from '../minesweeper' 


export class Game extends React.Component {
  constructor(props){
    super(props)
    // debugger
    this.state = { board: new Minesweeper.Board(9, 5) }
    // debugger
    // this.state.board = this.state.board.bind(this)
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
      <Board board={this.state.board} update={this.updateGame} />
    </div>
    )
    }
}

