const express = require("express");
const patient_user = require('../Model/patient_list');
const cors = require("cors");
const Jwt = require('jsonwebtoken');
const jwtKey = 'e-com';
const app = express();
app.use(express.json());
app.use(cors());

const UserRegsister = async (req, resp) => {
    let admin = new patient_user(req.body);

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

const loginFunction = async (req, resp) => {
    if (req.body.password && req.body.email) {
        let user = await patient_user.findOne(req.body).select("-password");
        if (user) {
            Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
                if (err) {
                    resp.send("Something went wrong")
                }
                resp.send({ user, auth: token })
            })
        } else {
            resp.send({ result: "No User found" })
        }
    } else {
        resp.send({ result: "No User found" })
    }
}

const UpdateInfo = async (req, resp) => {
    let result = await patient_user.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    resp.send(result)
}

const FindPatient = async (req, resp) => {
    let result = await patient_user.findOne({ _id: req.params.id })
    if (result) {
        resp.send(result)
    } else {
        resp.send({ "result": "No Record Found." })
    }
}



module.exports = {
    UserRegsister,
    loginFunction,
    UpdateInfo,
    FindPatient
}
