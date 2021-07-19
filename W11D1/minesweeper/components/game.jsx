import React from 'react'
import ReactDOM from 'react-dom'

class Game extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
    <h1>tester</h1> 
      )
    }
}

document.addEventListener("DOMContentLoaded",function(){
  const root = document.querySelector(".root")
  ReactDOM.render(<Game />, root)
})