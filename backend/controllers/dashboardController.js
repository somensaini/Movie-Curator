const passport = require('passport')

// GET
// Retrieve the logged in User's username
const getDashboard = (req, res, next) => {
    res.send(req.user)
}

module.exports = {
  getDashboard
}