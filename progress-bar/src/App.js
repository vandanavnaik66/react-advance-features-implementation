import React, { useEffect, useState } from 'react'
import './App.css';
import { MAX,MIN } from './constant';

export const App = () => {
  const[value,setValue]=useState(0);
  const[percent,setPercent]=useState(value)

  useEffect(()=>{
      setPercent(Math.min(MAX,Math.max(value,MIN)))
  },[value])


  useEffect(()=>{
 const interval=setInterval(()=>{
   setValue((pre)=>pre+1)
},100);

return ()=>{
  clearInterval(interval)
}
  },[])

  return (
    <div className='App'>
      <span className='title'>Progress Bar</span>
      <div className='progess-container'> 
        <span style={{color:percent>=49 ? "white" : "black"}}>{percent}%</span>
        <div 
        // style={{width:`${percent}%`}}
        style={{transform:`scaleX(${percent/MAX})`,
      transformOrigin:"left"}}
        />
      </div>
    </div>
  )
}
