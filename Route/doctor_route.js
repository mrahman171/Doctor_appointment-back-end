const express = require('express');
const router = express.Router();
const Doctor = require('../Controller/Doctors_controller')

router.post('/resister', Doctor.UserRegsister);
router.get('/find', Doctor.FindDoctors);
router.get('/search/:key', Doctor.SearchDoctors);

module.exports = router;