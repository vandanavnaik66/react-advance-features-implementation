import React from 'react'
import {Link} from "react-router-dom"
import '../styles.css'
import {useContext} from 'react'
import {modeContext} from '../Context'

export const NavBar = () => {

    const {theme,themeToggle} =useContext(modeContext);

  return (
    <div className='nav-container'>
    <div className="nav">
        <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about" >About Us</Link></li>
            <li><Link to="/contact" >Contact Us</Link></li>
        </ul>
    </div>
    <div className="switch-mode">
        <input type='checkbox' id="check" onChange={themeToggle}/>
        <label for="check" className='slider-btn'></label>
    </div>
    </div>
  )
}
