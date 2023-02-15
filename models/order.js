const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const wineSchema = require('./wineSchema');

const lineItemSchema = new Schema({
    qty: { type: Number, default: 1 },
    wine: wineSchema
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    lineItems: [lineItemSchema],
    isPaid: { type: Boolean, default: false },
}, {
    timestamps: true
});

orderSchema.statics.getCart = function(userId) {
    return this.findOneAndUpdate(
        // query
        { user: userId, isPaid: false },
        // update - in the case the order (cart) is upserted 
        { user: userId },
        // upsert option creates the doc if it doesn't exist 
        { upsert: true, new: true }
    );
};

orderSchema.methods.addItemToCart = async function(id) {
    // this keyword is bound to the cart (order doc)
    const cart = this;
    // check if the item already exists in the cart 
    const lineItem = cart.lineItems.find(lineItem => lineItem.wine._id.equals(id));
    if (lineItem) {
        // it already exists, so increase the qty
        lineItem.qty += 1;
    } else {
        // get the item from the 'catalog'
        const wine = await mongoose.model('Wine').findById(id);
        // the qty of the new lineItem object being push defaults to 1 
        cart.lineItems.push({ wine });
    }
    return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);