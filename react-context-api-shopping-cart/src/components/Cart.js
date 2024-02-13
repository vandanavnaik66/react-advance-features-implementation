import React, { useContext } from 'react'
import { SingleProduct } from './SingleProduct'
import '../style.css'
import { cartContext} from "../Context"

export const Cart = () => {
const{cart,setCart}=useContext(cartContext);

 if (cart.length===0)
 { return <h2 style={{textAlign:"center", fontFamily:"sans-serif", marginTop:"100px", color:"green"}}>Cart is empty please add some Products!!!</h2> 
 } 
 else return(
    <div className='cart-container'>
      <div className="cart-inner-container">
        {cart.map((prod)=><SingleProduct product={prod} key={prod.id} />
        )}
      </div>

    </div>
  )
}
