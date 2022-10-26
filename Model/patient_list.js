const express = require('express');
const mongoose = require('mongoose');
const PatientSchema = {
    name: {
        type: String
    },
    contact: {
        type: String
    },
    patient_ID: {
        type: String
    },
    appointment_ID: {
        type: String
    }
}

const patient_user = mongoose.model("patient", PatientSchema);
module.exports = patient_user;