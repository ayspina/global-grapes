import { useState, useEffect } from "react"
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from "../../components/NavBar/NavBar";
import AllRegionsPage from "../AllRegionsPage/AllRegionsPage";
import RegionDetailPage from "../RegionDetailPage/RegionDetailPage";
import WineDetailPage from '../WineDetailPage/WineDetailPage';
import * as ordersAPI from '../../utilities/orders-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState(null);

  useEffect(function() {
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);
  
  return (
    <main className="App">
      {user ? 
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path='/orders/cart' element={<NewOrderPage cart={cart} setCart={setCart} />} />
            <Route path='/orders/' element={<OrderHistoryPage />} />    
            <Route path='/regions/' element={<AllRegionsPage />} />
            <Route path={`/regions/:id`} element={<RegionDetailPage />} />
            <Route path={`/wines/:id`} element={<WineDetailPage cart={cart} setCart={setCart} />} />
            <Route path="/*" element={<Navigate to="/regions" />} />

          </Routes>
        </>
        : 
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

 
