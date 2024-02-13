import React, { useContext } from "react";
import {cartContext} from "../Context"
export const SingleProduct = ({product}) => {
  const {cart,setCart}=useContext(cartContext)

  return (
    <div className="single-product-container">
      <img src="product.image" alt="img" />
      <div className="single-prod-name">
        <span>{product.name}</span>
        <span>{product.price}</span>
      </div>
      {cart.includes(product) ? (
        <button
          onClick={() => {
            setCart(cart.filter((prod) => prod !== product));
          }}
        >
          remove from cart
        </button>
      ) : (
        <button
          onClick={() => {
            setCart([...cart, product]);
            console.log(cart);
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};
