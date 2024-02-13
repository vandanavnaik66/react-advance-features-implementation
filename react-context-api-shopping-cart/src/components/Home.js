import {faker} from '@faker-js/faker'
import { useState } from 'react'
import { SingleProduct } from './SingleProduct'
import '../style.css'

faker.seed(100);
export const Home = () => {

  const productArray= [...Array(20)].map(()=>(
    {
      id:faker.string.uuid(),
    name:faker.commerce.productName(),
    price: faker.commerce.price(),
    image:faker.image.url()
   }))

  const[stateArr]=useState(productArray)
  return (
    <div className='product-container'>
   {stateArr.map((prod)=>
   <SingleProduct 
   key={prod.id} 
   product={prod} 
   />)}

    </div>
  )
}
