const express = require("express");
const appointment_list = require('../Model/appointment');
const cors = require("cors");
const Jwt = require('jsonwebtoken');
const jwtKey = 'e-com';
const app = express();
app.use(express.json());
app.use(cors());


const Appointment_task = async (req, resp) => {
    let admin = new appointment_list(req.body);

    let result = await admin.save();
    result = result.toObject();
    delete result.password
    Jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
            resp.send("Something went wrong")
        }
        resp.send({ result, auth: token })
    })
}

const FindAppointment=async (req, resp) => {
    const doctors = await appointment_list.find();
    if (doctors.length > 0) {
        resp.send(doctors)
    } else {
        resp.send({ result: "No Doctors found" })
    }
}

const DeleteAppiontment=async (req, resp) => {
    let result = await appointment_list.deleteOne({ _id: req.params.id });
    resp.send(result)
}

const SearchAppointment=async (req, resp) => {
    let result = await appointment_list.find({
        "$or": [
            {
                name: { $regex: req.params.key }  
            },
            {
                specialization: { $regex: req.params.key }
            },
            {
                name1: { $regex: req.params.key }  
            }
             
        ]
    });
    resp.send(result);
}

module.exports ={
    Appointment_task,
    FindAppointment,
    SearchAppointment,
    DeleteAppiontment
}