const express = require('express')
const router = express.Router()
const loginController = require('../controllers/loginController.js')

router.route('/')
    .post(loginController.postLogin)

module.exports = router