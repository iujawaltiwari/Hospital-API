const express =  require('express');
const router = express.Router();

//importing doctors controller
const doctorController = require('../../../controllers/doctor_controller');

//register a doctor
router.post('/register', doctorController.createDoctor);

//login a doctor
router.post('/login', doctorController.createSession);

module.exports = router;