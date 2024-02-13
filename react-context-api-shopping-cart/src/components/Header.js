import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import '../style.css'
import { cartContext } from '../Context'
 
export const Header = () => {
  const{cart,setCart} =useContext(cartContext)
  return (
    <div className='container'>
        <span className='header'>React Context API Tutorial</span>
        <ul className='nav'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li >
            <Link to="/cart">Cart({cart.length})</Link>
            </li>
        </ul>
    </div>
  )
}
