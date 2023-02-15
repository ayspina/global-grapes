const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regionSchema = new Schema({
    country: {
        type: String,
        required: true
    },
    countryImg: []
}, {
    timestamps: true
});


module.exports = mongoose.model('Region', regionSchema);