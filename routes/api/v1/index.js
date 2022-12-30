const express = require('express');
const router = express.Router();

//doctor route
router.use('/doctor', require('./doctor'));

//patient route
router.use('/patient', require('./patient'));

//report route
router.use('/report', require('./report'));

module.exports = router;