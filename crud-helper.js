// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Region = require('./models/region');
const Wine = require('./models/wine');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, region, wine, order;
let users, regions, wines, orders;
