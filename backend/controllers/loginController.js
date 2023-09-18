const passport = require('passport')

const postLogin = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
      });
    }
  })(req, res, next);
};


// const passport = require("passport");
// const validator = require("validator");
// const User = require("../models/User");
// const bcrypt = require("bcrypt");

// const getLogin = (req, res) => {
//   if (req.user) {
//     return res.redirect("/dashboard");
//   }
//   res.render("index", {
//     title: "Index Page",
//   });
// };

// const postLogin = async (req, res) => {
//     const { username, password } = req.body

//     if (!username || !password) {
//         return res.status(400).json({ message: 'All fields are required' })
//     }

//     const foundUser = await User.findOne({ username }).exec()

//     if (!foundUser) {
//         return res.status(401).json({ message: 'Unable to find User' })
//     }

//     const match = await bcrypt.compare(password, foundUser.password)

//     if (!match) return res.status(401).json({ message: 'Passwords do not match' })

//     // Passport
//     passport.authenticate("local", (err, user, info) => {
//         if (err) {
//           return next(err);
//         }
//         if (!user) {
//           return res.status(500).send({
//             message: "Unable to match user in database."
//           });
//         }
//         req.logIn(user, (err) => {
//           if (err) {
//             return next(err);
//           }
//           console.log("Login successful.")
//           res.redirect(req.session.returnTo || "/profile");
//         });
//       })(req, res);
// }

// const logout = (req, res) => {
//   req.logout(() => {
//     console.log('User has logged out.')
//   })
//   req.session.destroy((err) => {
//     if (err)
//       console.log("Error : Failed to destroy the session during logout.", err);
//     req.user = null;
//     res.redirect("/");
//   });
// };

module.exports = {
  postLogin  
}