import React from 'react';
import ReactDOM from 'react-dom';
import Congrats from './congrats';
import Clock from './frontend/clock'
// import Tabs from './frontend/tabs'

// root should pass the tabs compent to be rendered

function Root() {
  return(
    <div id="clock"> <Clock /></div>
    // <div id="tabs"> <Tabs /></div>
    
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root/>, root);
});
