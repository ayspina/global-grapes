import { useState, useEffect } from "react"
import * as ordersAPI from '../../utilities/orders-api';

export default function NewOrderPage() {  
    const [cart, setCart] = useState(null);


  useEffect(function() {
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  if (cart) {
    return (
        <>
        <h1>My Cart</h1> 
        <p>{cart.lineItems[0].wine.grape}</p>
        

        </>
    
    )
}
}