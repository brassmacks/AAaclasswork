import React from 'react'
import {Tab} from './Tab'



export const Tabs = ({tabs}) => {
  // debugger
  return (
    <>

      {tabs.map((tab) => (
        <Tab 
        key={tab.key}
        tab={tab} />))}
      
      </>
  )
}
