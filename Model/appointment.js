const express = require('express');
const mongoose = require('mongoose');
const AppointmentSchema = {
    name1: {
        type: String
    },
    contact: {
        type: String
    },
    age: {
        type: String
    },
    name: {
        type: String
    },
    specialization: {
        type: String
    },
    Appoinment_date_time: {
        type: String
    },
     
}

const Appointment = mongoose.model("appointments", AppointmentSchema);
module.exports = Appointment;