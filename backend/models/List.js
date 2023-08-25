const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    movieList: [{
        name: {
            type: String
        },
        isFavorite: {
            type: Boolean,
            default: false,
        }
    }]  
})

module.exports = mongoose.model('List', listSchema)