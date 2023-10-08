const passport = require('passport')

// GET
// Retrieve the logged in User's username
const getDashboard = (req, res, next) => {
  const username = req.user.username
  res.send(`Welcome, ${username}!`)
}

module.exports = {
  getDashboard
}