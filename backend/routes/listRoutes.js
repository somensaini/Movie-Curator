const express = require('express')
const router = express.Router()
const listsController = require('../controllers/listsController')

router.route('/')
    .post(listsController.requestList)
    .patch(listsController.updateList)
    .delete(listsController.deleteList)

module.exports = router