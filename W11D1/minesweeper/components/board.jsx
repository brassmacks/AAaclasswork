import React from "react"
import {Tile} from "./tile.jsx"

class Board extends React.Component {
    constructor(props) {
      super(props)
      // props = board, update game
    }  

    renderBoard() {
      return this.props.board.grid.map((row, idx) => {
      
       return <div className="rows" key={idx}>{
       this.renderTile(row,idx)
       }</div>
       
      }
      )
    }

  renderTile(row, idx) {
    return row.map((tile, idx2) => {
      return <div className="tile" key={idx,idx2}><Tile tile={tile} board={this.props.board}  update={this.props.update} /></div>
    }) 
  }
    render(){
      return (
        <div>
           {this.renderBoard()} 

         </div>
    )
  }
}

export default Board