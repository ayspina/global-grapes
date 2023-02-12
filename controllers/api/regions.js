const Region = require('../../models/region');
const Wine = require('../../models/wine');

module.exports = {
    index
};

async function index(req, res) {
    const regions = await Region.find({});
    res.json(regions);
}