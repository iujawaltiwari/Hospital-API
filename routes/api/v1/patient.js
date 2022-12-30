const express = require('express');
const router = express.Router();
const passport = require('passport');
const Patient = require('../../../models/patient');

//importing patient controller
const patientController = require('../../../controllers/patient_controller');

// show all the patients route
router.get("/", async (req, res) => {
  const patient = await Patient.find({});
  return res.send(patient);
});

//registering a patient
router.post('/register', passport.authenticate('jwt', {session: false}) ,patientController.register);

//create patient report
router.post('/:id/create_report', passport.authenticate('jwt', {session: false}), patientController.createReport);

//get all reports of a particular patient
router.get('/:id/all_reports', passport.authenticate('jwt', {session: false}), patientController.allReports);

module.exports = router;