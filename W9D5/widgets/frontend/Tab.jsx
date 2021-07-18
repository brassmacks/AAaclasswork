import React from 'react'


export const Tab = ({tab, toggleSelected}) => {
  
    return (
      
        <div className='tab' id=""
          onClick = {()=>toggleSelected(tab.Key)} >
          <h3 key={tab.Key} id='tab-title'>Title: {tab.Title}</h3>
          <></>
          </div>
  
      
    );
  };




