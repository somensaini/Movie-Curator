const passport = require('passport')

// POST
// Authenticate the user
const postLogin = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (!user) {
      return res.status(401).json({ error: "Authentication Failed" });
    } else {
      req.logIn(user, (err) => {
        if (err) {
          return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.status(200).json({ message: "Successfully Authenticated", user });
      });
    }
  })(req, res, next);
};

// (passport.authenticate('local', {
//   successRedirect: '/dashboard',
//   failureRedirect: '/login',
// }));

module.exports = {
  postLogin  
}