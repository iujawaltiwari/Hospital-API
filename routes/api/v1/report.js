const express =  require('express');
const router = express.Router();
const passport = require('passport');

//importing report controller
const reportController = require('../../../controllers/report_controller');
// const reportController = require('../../../controllers/report_controller');

//fetching all the reports
router.get('/:status', passport.authenticate('jwt', {session: false}), reportController.status);

module.exports = router;