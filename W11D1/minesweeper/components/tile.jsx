import React from 'react'

export class Tile extends React.Component{  
    constructor(props) {
        super(props)
        console.log(this.props.tile.explored)
        this.getStatus = this.getStatus.bind(this)
    }
    
    getStatus(){
      
      if (this.props.tile.flagged) {return "flagged"}
      if (this.props.tile.explored) {
        if (this.props.tile.bombed) return "bombed"
        return "explored"
      } 
      return "unexplored"      
    }

    handleClick(e){
      
      this.props.tile.explore();
      this.props.update()
      
    }
    render(){
        return (
          <div className={`tile ${this.getStatus()}`} onClick = {(e)=>{this.handleClick(e)}} ></div>
        )
    }
}