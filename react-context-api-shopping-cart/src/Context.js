import React, { createContext, useState } from 'react'

export const cartContext=createContext();
// 1. create context
// 2. provide that created context
//  3. wrap all the child component inside the provider , below children props takes all child component and render inside children
// 4. go to root file index.js and wrap the app component inside the Context, because context componet returning provider and values
// 5. define useContext() it will take argument of context which you have created cartContext and that will return values what you have passed



export const Context = ({children}) => {
const[cart,setCart]=useState([])
  return (
    <cartContext.Provider value={{cart,setCart}}>
     {children}     
    </cartContext.Provider>
  )
}
