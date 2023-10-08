const express = require('express')
const router = express.Router()
const passport = require('passport');
const loginController = require('../controllers/loginController.js')

router.route('/')
    .post(loginController.postLogin)

module.exports = router