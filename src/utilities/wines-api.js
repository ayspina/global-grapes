import { getToken } from './users-service'

// This is the base path of the Express route we'll define
const BASE_URL = '/api/wines';

// export function getAll() {
//     return sendRequest(`${BASE_URL}/wines`);
// }

export function getById(id) {
    return sendRequest(`${BASE_URL}/wines/${id}`);
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
