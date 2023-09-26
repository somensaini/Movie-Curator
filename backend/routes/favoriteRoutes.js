const express = require('express')
const router = express.Router()
const listsController = require('../controllers/favoriteController')

router.route('/')
    .patch(listsController.updateList)

module.exports = router