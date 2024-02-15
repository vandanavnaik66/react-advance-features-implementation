import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import '../style.css'
import { cartContext, themeContext } from '../Context'
 
export const Header = () => {
  const{cart,setCart} =useContext(cartContext)
   const{theme,toggleTheme}=  useContext(themeContext);
  return (
    <div className='container'>
        <span className='header'>React Context API Tutorial</span>
        <ul className='nav'>
          <div className='nav-items'> 
            <li>
                <Link to="/">Home</Link>
            </li>
            <li >
            <Link to="/cart">Cart({cart.length})</Link>
            </li>
          </div>
          <div className='switch-mode'>
            <input type='checkbox' 
            id="check"
            onChange={toggleTheme}
            defaultChecked={theme==="light"}/>
            <label for="check" className='slider'></label>
          </div>
            
        </ul>
        <div className='mode-switch'>
         

        </div>
    </div>
  )
}
