const express = require('express');
const mongoose = require('mongoose');
const AdminSchema = {
    name:{
        type:String
    },
    email: {
        type: String
    },
    password: {
        type: String,
        trim: true,
        minlength: 5
    }
}

const admin_user = mongoose.model("admins", AdminSchema);
module.exports = admin_user;