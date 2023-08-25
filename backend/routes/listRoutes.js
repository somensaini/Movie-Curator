const express = require('express')
const router = express.Router()
const listsController = require('../controllers/listsController')

router.route('/')
    .get(listsController.getOneList)
    .post(listsController.createNewList)
    .patch(listsController.addNewList)
    .delete(listsController.deleteList)

module.exports = router