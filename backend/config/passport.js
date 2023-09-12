const User = require("../models/User");
const bcrypt = require("bcrypt");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.username,
      };
      cb(err, userInformation);
    });
  });
};

// const LocalStrategy = require("passport-local").Strategy;
// const mongoose = require("mongoose");
// const User = require("../models/User");

// module.exports = function (passport) {
//   passport.use(
//     new LocalStrategy((username, password, done) => {
//       User.findOne({ user: username.toLowerCase() }, (err, user) => {
//         if (err) {
//           return done(err);
//         }
//         if (!user) {
//           return done(null, false, { msg: `User ${user} not found.` });
//         }
//         if (!user.password) {
//           return done(null, false, {
//             msg:
//               "Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.",
//           });
//         }
//         user.comparePassword(password, (err, isMatch) => {
//           if (err) {
//             return done(err);
//           }
//           if (isMatch) {
//             return done(null, user);
//           }
//           return done(null, false, { msg: "Invalid user or password." });
//         });
//       });
//     })
//   );

//   passport.serializeUser((user, done) => {
//     done(null, user.id);
//   });

//   passport.deserializeUser((id, done) => {
//     User.findById(id, (err, user) => done(err, user));
//   });
// };