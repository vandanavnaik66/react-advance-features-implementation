import React from 'react'
import {createContext,useState,useEffect} from 'react'

export const modeContext=createContext();


export const Context = ({children}) => {

    const[isDarkMode,setIsDarkMode] =useState(false)

    const theme= isDarkMode ? "dark" : "light" ;

    const themeToggle=()=>{
        setIsDarkMode(!isDarkMode)
    }
   
    useEffect(()=>{
    document.documentElement.setAttribute("data-mode" , theme)
    },[isDarkMode])

  return (

<modeContext.Provider value={{theme,themeToggle}}>
{children}
</modeContext.Provider>

  )
}
