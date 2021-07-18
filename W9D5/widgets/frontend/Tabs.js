import React from 'react'
import {Tab} from './Tab'



export const Tabs = ({tabs, toggleSelected}) => {

  // debugger
  return (
    <div className="tab-display">

      {tabs.map((tab) => (
        <Tab 
        key={tab.Key}
        tab={tab} 
        toggleSelected={toggleSelected}
        {...tab}/>
        ))}
      
      </div>
  )
}
