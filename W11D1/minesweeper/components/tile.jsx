import React from 'react'

export class Tile extends React.Component{  
    constructor(props) {
        super(props)
        this.pos = props.pos
    }
    
    getStatus(){
        const status = this.props.board.grid[this.pos[0]][this.pos[1]].explored
        return status
    }

    render(){
        return (
        <div className="tile" id={`explored-${this.getStatus()}`}>x</div>
        )
    }
}