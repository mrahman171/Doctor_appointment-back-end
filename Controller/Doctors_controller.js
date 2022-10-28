const express = require("express");
const doctors_user = require('../Model/doctor_list');
const cors = require("cors");
const Jwt = require('jsonwebtoken');
const jwtKey = 'e-com';
const app = express();
app.use(express.json());
app.use(cors());

const UserRegsister = async (req, resp) => {
    let admin = new doctors_user(req.body);

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

const FindDoctors=async (req, resp) => {
    const doctors = await doctors_user.find();
    if (doctors.length > 0) {
        resp.send(doctors)
    } else {
        resp.send({ result: "No Product found" })
    }
}

const SearchDoctors=async (req, resp) => {
    let result = await doctors_user.find({
        "$or": [
            {
                name: { $regex: req.params.key }  
            },
            {
                specialization: { $regex: req.params.key }
            },
             
        ]
    });
    resp.send(result);
}



module.exports = {
    UserRegsister,
    FindDoctors,
    SearchDoctors
}
