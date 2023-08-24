const express = require('express')
const router = express.Router()
const path = require('path')

// Send the index.html file when the user visits the root page
router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

module.exports = router