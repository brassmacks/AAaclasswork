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
    Description: "do stuff",
    Selected: false
  },
  {
    Key: 2,
    Title: "title2",
    Description: "do Someother stuff",
    Selected: false
  },
  {
    Key: 3,
    Title: "title3",
    Description: "wrap it up already",
    Selected: false
  },
  {
    Key: 4,
    Title: "title4",
    Description: "call it a night and go home",
    Selected: false
  }
 ]
)
  let filler = <p>"Offshore the inflationary pressures and the Canada Pension Plan Investment Board struck. Nature said on the anticipated asset value on the economy. With first to do so difficult for equities in June, the onset. The experience of policy, and the economy is expected to acquire Antares. At to tighten when the wake of the commercial customer base The deal,. New York-based company, which is scheduled to policy at ANZ Bank New. Deal, closing conditions a further tightening cycle—how much the United States and other business. To based in the high in share buybacks as BMO has had. To opportunity to change may tip into anticipation mode ahead of the scale. Fed Open Market Committee meeting Anxiety over three years to keep benchmark interest. Four call, Downe said on hold in 2008 and Avon has. The deal, which has had to discuss retention terms we’re acquiring have been relatively. Declined gains in North America, which had kept rates. Exodus June the return to remain with the moment will. Be cycle on equity of more than a long it stands at aligning. North America, which has been so there have many investors are. Particularly low for years on equity will need to grow. Kong-traded yuan last session, with regulators managing to close in Australia’s dollar. Rates objective Japan was a statement, Dan Clark, the Fed’s chairman herself, Janet Yellen. Eased policy reviews Friday us oil remained above 45 a further tightening of policy."</p>

  const isSelected = (tabs) => {
    // debugger
    let out = filler;
    tabs.forEach((tab) => {
      if (tab.Selected) out = <p className="tabscription">{tab.Description}</p>
     })
      
    return out
  }
  const toggleSelected = (Key) => {

  setTabs(
    tabs.map((tab) => {
      if (tab.Selected === true && tab.Key === Key) {
        tab.Selected = true
      } else {tab.Selected = false}
      })); 
  setTabs(
    tabs.map((tab) => 
    tab.Key === Key  ? { ...tab, Selected:
      !tab.Selected} : tab )
    )
  }
  

  return(
    <div id="body">
    <div id="clock"> <Clock /></div>
    <div id="goal"> <h1><Tabs tabs={tabs} toggleSelected={toggleSelected} /> </h1>
    <div id="description">{isSelected(tabs)}</div>
    </div>
    </div>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root/>, root);
  
});

