const express = require("express");
const admin_user=require('../Model/admin');
const cors = require("cors");
const Jwt = require('jsonwebtoken');
const jwtKey = 'e-com';
const app = express();
app.use(express.json());
app.use(cors());

const UserRegsister = async (req, resp) => {
    let admin = new admin_user(req.body);
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
        let user = await admin_user.findOne(req.body).select("-password");
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

module.exports = {
    UserRegsister,
    loginFunction,

}
