const mongoose = require('mongoose')

//Store the userID and an array of objects (movieID: idnumber, isFavorite: true/false)
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