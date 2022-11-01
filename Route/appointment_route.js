const express = require('express');
const router = express.Router();
const Appointment_route = require('../Controller/Appointment_controller')

router.post('/appointment', Appointment_route.Appointment_task);
router.get('/find', Appointment_route.FindAppointment);
router.get('/search/:key', Appointment_route.SearchAppointment);
router.delete('/delete/:id', Appointment_route.DeleteAppiontment);
 
module.exports = router;