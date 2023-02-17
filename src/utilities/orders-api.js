import { getToken } from './users-service'

const BASE_URL = '/api/orders';

export function getCart() {
  return sendRequest(`${BASE_URL}/orders/cart`);
};

export function addItemToCart(id) {
    // Just send itemId for best security (no pricing)
  return sendRequest(`${BASE_URL}/orders/cart/wines/${id}`, 'POST');
};

export function setItemQtyInCart(id, newQty) {
  return sendRequest(`${BASE_URL}/orders/cart/qty`, 'PUT', { id, newQty });
};

export function checkout() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/orders/cart/checkout`, 'POST');
};

// Helper Functions 

async function sendRequest(url, method = 'GET', payload = null) {
    const options = { method };
    if (payload) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(payload);
    }
    const token = getToken()
    if (token) {
        options.headers = options.headers || {};
        options.headers.Authorization = `Bearer ${token}`;
    }
    const res = await fetch(url, options);
    if (res.ok) return res.json();
    throw new Error('Bad Request');
}
