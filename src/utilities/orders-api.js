import { getToken } from './users-service'

const BASE_URL = '/api/orders';

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
};

export function addItemToCart(id) {
    // Just send itemId for best security (no pricing)
    return sendRequest(`${BASE_URL}/cart/wines/${id}`, 'POST');
  }

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
    console.log(res);
    throw new Error('Bad Request');
}
