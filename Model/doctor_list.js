const express = require('express');
const mongoose = require('mongoose');
const DoctorSchema = {
    name: {
        type: String
    },
    specialization: {
        type: String
    },
    doctor_available_start_time: {
        type: String
    },
    doctor_available_end_time: {
        type: String
    }
}

const doctor = mongoose.model("doctor", DoctorSchema);
module.exports = doctor;