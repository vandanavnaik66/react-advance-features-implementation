import React, { createContext, useEffect, useState } from 'react'



export const cartContext=createContext();
export const themeContext=createContext();


export const Context = ({children}) => {

const[cart,setCart]=useState([])

const[isDarkMode,setIsDarkMode] =useState(true);
const theme= isDarkMode? "dark" : "light";

const toggleTheme=()=>{
  console.log("clicked")
  setIsDarkMode(prevState=>!prevState)
}

useEffect(()=>{
   document.documentElement.setAttribute("data-theme", theme)  /* set attribute is like giving id or className to html elements, inside the document what all the elements are there for those setting attribute so that change the color, this we can check inside inspect->element-->inside html tag you can see data-theme="dark"  */
},[isDarkMode])

  return (
    <cartContext.Provider value={{cart,setCart}}>
      <themeContext.Provider value={{theme,toggleTheme}}>
     {children}    
     </themeContext.Provider>
    </cartContext.Provider>
  )
}
