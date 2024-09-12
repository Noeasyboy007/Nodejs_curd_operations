const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    adress: {
        type: String,
        required: true
    },
    avatar: {
        type: String // To store avatar URL
    }
},{timestamps: true});

const User = mongoose.model('User', userSchema);
module.exports = User;
