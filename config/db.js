const mongoose = require('mongoose');

const database = async()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Mongodb Connected ${process.env.MONGODB_URL}`.bgGreen);
    } catch (error) {
        console.log(`Mongodb error ${error.message}`.bgRed);
    }
}

module.exports = database;