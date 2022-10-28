const express = require('express');
const router = express.Router();
const Patient = require('../Controller/Patient_controller')

router.post('/resister', Patient.UserRegsister);
router.post('/Login', Patient.loginFunction)
module.exports = router;