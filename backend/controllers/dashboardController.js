const passport = require('passport')

const getDashboard = (req, res, next) => {
  res.send(req.user)
};

  module.exports = {
    getDashboard
  }