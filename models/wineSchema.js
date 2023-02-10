const Schema = require('mongoose').Schema;

const wineSchema = new Schema({
    grape: {
        type: String,
        required: true
    },
    producer: {
        type: String,
        required: true
    },
    vintage: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true, 
    },
    wineImg: [],
    region: { type: Schema.Types.ObjectId, ref: 'Region' },
    price: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = wineSchema;