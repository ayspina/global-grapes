const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);

// POST /api/orders/cart/wines/:id
router.post('/cart/wines/:id', ordersCtrl.addToCart);

router.post('/cart/checkout', ordersCtrl.checkout);

router.put('/cart/qty', ordersCtrl.setItemQtyInCart);



module.exports = router;