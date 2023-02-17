const express = require('express');
const router = express.Router();
const regionsCtrl = require('../../controllers/api/regions');

// GET /api/regions
router.get('/', regionsCtrl.index);

// GET /api/regions/id
router.get('/regions/:id', regionsCtrl.show);

router.get('/regions/:id/wines', regionsCtrl.getAllWines);

module.exports = router;