const express = require('express');
const { append } = require('express/lib/response');

const router = express.Router();

console.log('Router Loaded');

//api
router.use('/api', require('./api'));

module.exports = router;