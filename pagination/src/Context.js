import React, { createContext ,useState} from 'react'


export const productContex=createContext();

export const Context = ({children}) => {
  const [product, setProduct] = useState();

  return (
      <productContex.Provider value={{product,setProduct}}>
       {children}
      </productContex.Provider>
    )
}
