const express = require('express')
const router = express.Router()
const listsController = require('../controllers/listsController')

router.route('/')
    .post(listsController.requestList)
    .patch(listsController.updateList)

module.exports = router