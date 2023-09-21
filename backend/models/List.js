const mongoose = require('mongoose')

//Schema for storing a User's List Data (movieId + isFavorite)
const listSchema = new mongoose.Schema({
    username: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    movieList: [{
        movieId: Number,
        isFavorite: {type: Boolean, default: false}
     }]
})

module.exports = mongoose.model('List', listSchema)