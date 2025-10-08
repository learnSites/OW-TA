const User = require('../models/user');

const getUser = async (req, res) => {
    try{
        const user = await User.find();
        res.json(user);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}

const createUser = async (req, res) => {
    try{

        const maxUserCode = await User.findOne().sort({userCode: -1}).exec();
        const maxCode = maxUserCode ? maxUserCode.userCode : 0;

        const {phoneNo,password,nickName,userName} = req.body;
        const user = await User.create({userCode: maxCode + 1,phoneNo,password,nickName,userName});

        res.status(201).json(user);
    }catch(err){
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

module.exports = { getUser, createUser };