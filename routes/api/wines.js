const express = require('express');
const router = express.Router();
const winesCtrl = require('../../controllers/api/wines');

// GET /api/regions
router.get('/wines', winesCtrl.index);

// GET /api/regions/id
router.get('/wines/:id', winesCtrl.show);



module.exports = router;