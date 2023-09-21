const mongoose = require('mongoose')

// Schema for storing a User's information
const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    }
})

module.exports = mongoose.model('User', userSchema)