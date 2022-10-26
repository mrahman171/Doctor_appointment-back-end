const express = require('express');
const router = express.Router();
const Admin = require('../Controller/Admin_controller')

router.post('/resister', Admin.UserRegsister);
router.post('/Login', Admin.loginFunction)
module.exports = router;