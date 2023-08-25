const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    movieId: [{
        type: String,
    }]  
})

module.exports = mongoose.model('List', listSchema)