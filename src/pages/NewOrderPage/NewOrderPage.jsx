import './NewOrderPage.css';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import LineItems from '../../components/LineItems/LineItems';

export default function NewOrderPage() {  
    const [cart, setCart] = useState(null);

    const navigate = useNavigate();


  useEffect(function() {
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);


  async function handleChangeQty(id, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(id, newQty);
    setCart(updatedCart);
  };

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  };

  if (cart) {
    const lineItems = cart.lineItems.map(item =>
        <LineItems
          lineItem={item}
          isPaid={cart.isPaid}
          key={item._id}
          handleChangeQty={handleChangeQty}
        />
    );
    return (
        <div className="NewOrderPage">
        <h1>My Cart</h1> 
        <div className="order">
        {lineItems.length ?
          <>
            {lineItems}
            <section className="total">
              {cart.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >CHECKOUT</button>
              }
              <span>{cart.totalQty}</span>
              <span className="right">${cart.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="thirsy">Thirsty?</div>
        }
      </div>
        

        </div>
    
    )
}
}