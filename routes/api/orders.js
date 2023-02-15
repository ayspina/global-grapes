const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);

// POST /api/orders/cart/wines/:id
router.post('/cart/wines/:id', ordersCtrl.addToCart);

module.exports = router;