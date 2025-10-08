const express = require('express');
const router = express.Router();
const {googleAuth , googleUserData} = require('../controllers/authController');

// console.log('i am in auth route');
router.get('/google', googleAuth);
router.get('/google/callback', googleUserData);

module.exports = router;