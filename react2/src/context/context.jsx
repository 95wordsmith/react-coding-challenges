import { useState } from "react";
import { Cartcontext } from "./cart";



const CartProvider = ({children}) => {

const [cart,setCart]= useState()

  const addToCart=(data)=>{
    console.log('addeed')
    setCart(prev=>{
      return {...prev, title:data.title, price:data.price }
    })
  }
  // const removeFromCart=(data)=>{
  //   setCart(prev=>{

  //   })
  // }
  let cartValues ={
    cart:cart,
    addToCart:addToCart
  }

  return ( 
    <Cartcontext.Provider value={{cartValues}}>
      {children}
    </Cartcontext.Provider>
   );
}
 
export default CartProvider;