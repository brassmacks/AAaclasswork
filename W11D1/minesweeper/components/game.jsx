import React from 'react'
import Board from './board'
import * as Minesweeper from '../minesweeper' 

export class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = { board: new Minesweeper.Board(9, 5) }
    this.updateGame = this.updateGame.bind(this)
    console.log(this.state.board)
  }

  updateGame(){
    
  }

  render() {
    return(
    <div className='board'>
      <h1>Minesweeper</h1>
      <p>Click to explore a tile.</p>
      <p>Alt + Click to flag a Tile</p>
      <Board board={this.state.board} update={this.updateGame} />
    </div>
    )
    }
}

