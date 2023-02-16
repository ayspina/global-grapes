import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './WineDetailPage.css';
import * as winesAPI from '../../utilities/wines-api';
import * as ordersAPI from '../../utilities/orders-api';

export default function WineDetailPage({ wine, cart, setCart }) {
    const [wineItem, setWineItem] = useState([]);
    let { id } = useParams();

    useEffect(function() {
        async function getWine(id) {
            const wineItem = await winesAPI.getById(id);
            setWineItem(wineItem);
        }
        getWine(id);
    }, []);

    async function handleAddToOrder(id) {
        alert(`add item: ${id}`);
        const cart = await ordersAPI.addItemToCart(id);
        setCart(cart);
      };

 
    return (
        <>
        <div className="WineDetailPage">
            <div className="description">
                <p>{wineItem.type}</p>
                <p>{wineItem.vintage}</p>
                <p>{wineItem.grape}</p>
            </div>
            <div className="image">
                <img src={wineItem.wineImg} alt="" className="wine-img" />
            </div>
            <div className="purchase">
                <p>{wineItem.producer}</p>
                <p>${wineItem.price}</p>
                <button onClick={() => handleAddToOrder(wineItem._id)}>Add to Cart</button>
            </div>
        </div>
        
        </>
    
    )
};