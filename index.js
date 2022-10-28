const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const Jwt = require('jsonwebtoken');
const jwtKey = 'e-com';
const app = express();
const Admin_ruter = require('./Route/admin_route');
const patient_ruter = require('./Route/patient_route');
const Doctor_ruter = require('./Route/doctor_route');
app.use(express.json());
app.use(cors());

const url_l = "mongodb+srv://mrahman171:nVtb7E9gLBzT8Ihz@cluster0.b3elaga.mongodb.net/test"
const config = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(url_l, config);

app.use('/Doctor', Doctor_ruter);
app.use('/Admin', Admin_ruter);
app.use('/Patient', patient_ruter)
app.listen(3000);

//npx kill-port 3000