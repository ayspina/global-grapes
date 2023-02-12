const express = require('express');
const router = express.Router();
const regionsCtrl = require('../../controllers/api/regions');

// GET /api/regions
router.get('/regions', regionsCtrl.index);

module.exports = router;