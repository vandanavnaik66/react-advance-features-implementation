import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productContex } from '../Context';
import '../App.css'


export const SingleItem = () => {
  const {id}= useParams();


const{product,setProduct}=useContext(productContex);

   return (
    <div>
   {(product.filter((prod)=>{console.log(prod.id=== Number(id))
    return  prod.id===Number(id)}
)).map((item)=>
<div className='single-product-container'>
   <idv  style={{width:"40%"}}>

   
   <img src={item.thumbnail} style={{width:"100%",objectFit:"cover"}}/>
   <div className='single-product-container-details' style={{width:"100%"}}>
   <span>Model : {item.title}</span>
   <span>Price : {item.price}</span>
   <span> rating : {item.rating} </span>
   <span>{item.description}</span>
   </div>
   </idv>
</div>) }

       </div>
  )
}
