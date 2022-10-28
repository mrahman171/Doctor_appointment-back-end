const express = require('express');
const mongoose = require('mongoose');
const PatientSchema = {
    name: {
        type: String
    },
    contact: {
        type: String
    },
    age: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String,
        trim: true,
        minlength: 5
    }
    // patient_ID: {
    //     type: String
    // }
    // appointment_ID: {
    //     type: String
    // }
}

const patient_user = mongoose.model("patients", PatientSchema);
module.exports = patient_user;