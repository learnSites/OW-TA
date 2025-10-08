const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    userCode: {
        type: Number,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    nickName: {
        type: String,
        required: false
    },
    userName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', registerSchema);