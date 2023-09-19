const User = require('../models/User')
const List = require('../models/List')
const asyncHandler = require('express-async-handler')

//Get a user's list of movies
const getOneList = asyncHandler(async (req, res) => {
    const userList = await List.findOne({ username: req.body.username }).lean()
    
    if (userList) {
        return res.json(userList.movieList)
    } else {
        res.send("List not found")
    }
})

// Add an entry to a user's list
const updateList = asyncHandler(async (req, res) => {
    const { username, movieId } = req.body
    try {
        await List.updateOne(
            {username: username},
            {$push: {movieList: {movieId: movieId}}}
        )
        return res.status(201).json({ message: "The movie was added to the user's database." })
    } catch (err) {
        console.log(err);
    }
})

// Delete a list
const deleteList = asyncHandler(async (req, res) => {
    const { id } = req.body

    // Confirm note exists to delete 
    const list = await List.findById(id).exec()

    if (!list) {
        return res.status(400).json({ message: 'List not found' })
    }

    const result = await list.deleteOne()

    const reply = `List deleted`

    res.json(reply)
})

module.exports = {
    getOneList,
    updateList,
    deleteList
}