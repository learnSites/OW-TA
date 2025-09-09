const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    userCode: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    streetAddress: {
        type: String,
        required: true
    },
    aptUnit: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    alterEmail: {
        type: String,
        required: true
    },
    alterPhone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    nickName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', registerSchema);