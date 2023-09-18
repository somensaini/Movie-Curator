const express = require('express')
const router = express.Router()
const logoutController = require('../controllers/logoutController.js')

router.route('/')
    .post(logoutController.postLogout)

module.exports = router