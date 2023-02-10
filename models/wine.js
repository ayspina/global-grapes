const mongoose = require('mongoose');
require('./region');
const wineSchema = require('./wineSchema');


module.exports = mongoose.model('Wine', wineSchema);