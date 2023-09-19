const express = require('express')
const router = express.Router()
const listsController = require('../controllers/listsController')

router.route('/')
    .get(listsController.getOneList)
    .patch(listsController.updateList)
    .delete(listsController.deleteList)

module.exports = router