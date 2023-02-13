const Region = require('../../models/region');
const Wine = require('../../models/wine');

module.exports = {
    index,
    show,
    getAllWines
};

async function index(req, res) {
    const regions = await Region.find({});
    res.json(regions);
};

async function show(req, res) {
    const region = await Region.findById(req.params.id);
    res.json(region);
};

async function getAllWines(req, res) {
    const wines = await Wine.find({}).populate('region').exec();
    res.json(wines);

    
    console.log(wines);
};