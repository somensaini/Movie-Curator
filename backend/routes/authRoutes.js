const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.route('/')
    .get(authController.getSignup)
    .post(authController.postSignup)

module.exports = router