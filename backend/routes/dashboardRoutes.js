const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboardController')
const { ensureAuth } = require('../middleware/auth')

router.route('/')
    // .get(ensureAuth, dashboardController.getDashboard)
    .get('/', (req, res) => {
        // Access the user's username through req.user
        const username = req.user.username;
        
        // You can now use the username in your route handler
        res.send(`Welcome, ${username}!`);
      });
      
module.exports = router