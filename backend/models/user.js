const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    userCode: {
        type: Number,
        required: true
    },
    phoneNo: {
        type: String,
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
    },
    email: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('User', registerSchema);