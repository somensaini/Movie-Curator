const List = require('../models/List')
const asyncHandler = require('express-async-handler')

// GET
//Get the logged in User's list of movies
const requestList = asyncHandler(async (req, res) => {
    const userList = await List.findOne({ username: req.body.username }).lean()
    if (userList) {
        return res.json(userList.movieList)
    } else {
        res.send("List not found")
    }
})

// PATCH
// Add a new movie to the User's list
const updateList = asyncHandler(async (req, res) => {
    const { username, movieId } = req.body
    try {
        const listLengthCheck = await List.find({'movieList.movieId': movieId})
        
        if (listLengthCheck.length == 0){
            await List.updateOne(
                {username: username},
                {$push: {movieList: {movieId: movieId}}}
            )
            return res.status(201).json({ message: "The movie was added to the user's database." })
        }
    } catch (err) {
        console.log(err);
    }
})

module.exports = {
    requestList,
    updateList,
}