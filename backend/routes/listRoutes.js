const express = require('express')
const router = express.Router()
const listsController = require('../controllers/listsController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/')
    .get(listsController.getOneList)
    .post(listsController.createNewList)
    .patch(listsController.updateList)
    .delete(listsController.deleteList)

module.exports = router