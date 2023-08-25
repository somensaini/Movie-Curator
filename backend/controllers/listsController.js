const User = require('../models/User')
const List = require('../models/List')
const asyncHandler = require('express-async-handler')

//Get a user's list
const getOneList = asyncHandler(async (req, res) => {
    // Get a user's list from MongoDB
    const list = await List.find().lean()

    // If no users 
    // if (!users?.length) {
    //     return res.status(400).json({ message: 'No users found' })
    // }

    res.json(list)
})

// Create a user's list
const createNewList = asyncHandler(async (req, res) => {
    const { user } = req.body

    // Create and store the new user 
    const list = await List.create({ user })

    if (list) { // Created 
        return res.status(201).json({ message: 'New list created' })
    } else {
        return res.status(400).json({ message: 'Invalid list data received' })
    }

})

module.exports = {
    getOneList,
    createNewList
}