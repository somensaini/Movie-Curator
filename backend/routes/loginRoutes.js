const express = require('express')
const router = express.Router()
const loginController = require('../controllers/loginController.js')

router.route('/')
    .get(loginController.getLogin)
    .post(loginController.postLogin)

module.exports = router