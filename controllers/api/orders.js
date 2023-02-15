const Order = require('../../models/order');
// const Item = require('../../models/item');

module.exports = {
  cart,
  addToCart
};

// A cart is the unpaid order for a user
async function cart(req, res) {
  // A cart is the unpiad order for a user 
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
};

async function addToCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id);
    res.json(cart);
  }