const mongoDB = require('mongoose');

const connectDB = async () => {
    try{
        await mongoDB.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
    }catch(error){
        console.error("MongoDB connection error:", error);
    }
};

module.exports = connectDB;
