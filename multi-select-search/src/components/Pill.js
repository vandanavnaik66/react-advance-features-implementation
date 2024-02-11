import React from 'react'
import "./Pills.css"
import { TiDelete } from "react-icons/ti";

export const Pill = ({selected,onClick}) => {
    
  return (
    <div className='pills-container'>
        <img src={selected.image} alt={`${selected.firstName} ${selected.lastName}`}/>
        <span>{selected.firstName} {selected.lastName}  </span>
        <span onClick={()=>onClick(selected)}><TiDelete size= {22} /></span>
   
    </div>
  )
}
