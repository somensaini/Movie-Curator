const List = require('../models/List')
const asyncHandler = require('express-async-handler')

// PATCH
// Change the 'isFavorite' property of a movie that is already in the User's list.
const updateList = asyncHandler(async (req, res) => {
    const { username, movieId } = req.body
    try {
        await List.updateOne(
            {'username': username, 'movieList.movieId': movieId},
            {$set: {
                'movieList.$.isFavorite': true
            }}
        )
        return res.status(201).json({ message: "The movie was added to the user's database." })
    } catch (err) {
        console.log(err);
    }
})

module.exports = {
    updateList
}