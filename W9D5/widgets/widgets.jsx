import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import Clock from './frontend/clock'
import {Tabs} from './frontend/Tabs';





function Root() {


 const [tabs, setTabs] = useState([
  { 
    Key: 1,
    Title: "title1",
    Description: "do stuff"
  },
  {
    Key: 2,
    Title: "title2",
    Description: "do Someother stuff"
  }
 ]
)

  return(
    <div id="body">
    <div id="clock"> <Clock /></div>
    <div id="goal"> <h1><Tabs tabs={tabs}/> </h1></div>
    </div>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root/>, root);
  
});

