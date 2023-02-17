const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET /api/orders/cart
router.get('/orders/cart', ordersCtrl.cart);

// POST /api/orders/cart/wines/:id
router.post('/orders/cart/wines/:id', ordersCtrl.addToCart);

router.post('/orders/cart/checkout', ordersCtrl.checkout);

router.put('/orders/cart/qty', ordersCtrl.setItemQtyInCart);



module.exports = router;