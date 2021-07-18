import React from 'react'

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.tick = this.tick.bind(this);
  };

  componentDidMount() {
    this.intervalId = setInterval(()=> this.tick(), 1000)
  };
  componentWillUnmount() {
    clearInterval(this.intervalId)
  };

  
  tick() {
    this.setState({ date: new Date()})
  };
  
  render(){
    let hours = this.state.date.getHours()
    let min = this.state.date.getMinutes()
    let sec = this.state.date.getSeconds()
    let amPM = hours < 12 ? 'a.m.' : 'p.m.'
    hours = hours % 12 === 0 ? 12 : hours % 12
    return (
      <div className="calender-widget">
        
        <h2 className='date'>{this.state.date.toDateString()}</h2>
        <h3 className='clock'>{hours}:{min}:{sec}{amPM}</h3>
        

    </div>)
  };
};


