const express = require('express')
const router = express.Router()
const favoriteController = require('../controllers/favoriteController')

router.route('/')
    .patch(favoriteController.updateList)

module.exports = router