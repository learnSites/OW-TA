const express = require('express');
const router = express.Router();

const {getUser, createUser} = require('../controllers/userController');

router.get('/getUser', getUser);
router.post('/register', createUser);

module.exports = router;
