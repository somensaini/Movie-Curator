const passport = require('passport')

// GET
// Retrieve the logged in User's username
const getDashboard = (req, res, next) => {
  const username = req.user.username
  res.setHeader('Content-Type', 'application/json');
  res.json({username})
}

module.exports = {
  getDashboard
}