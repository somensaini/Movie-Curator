const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");

const getLogin = (req, res) => {
  if (req.user) {
    return res.redirect("/dashboard");
  }
  res.render("index", {
    title: "Index Page",
  });
};

const postLogin = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isUser(req.body.username))
    validationErrors.push({ msg: "Please enter a valid username." });
  if (validator.isEmpty(req.body.password))
    validationErrors.push({ msg: "Password cannot be blank." });

  if (validationErrors.length) {
    // req.flash("errors", validationErrors);
    return res.redirect("/login");
  }
  // req.body.email = validator.normalizeEmail(req.body.email, {
  //   gmail_remove_dots: false,
  // });

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      // req.flash("errors", info);
      return res.redirect("/login");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      // req.flash("success", { msg: "Success! You are logged in." });
      res.redirect(req.session.returnTo || "/dashboard");
    });
  })(req, res, next);
};

const logout = (req, res) => {
  req.logout(() => {
    console.log('User has logged out.')
  })
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    req.user = null;
    res.redirect("/");
  });
};

const getSignup = (req, res) => {
  if (req.user) {
    return res.redirect("/dashboard");
  }
  res.render("index", {
    title: "Create Account",
  });
};

const postSignup = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (!validator.isLength(req.body.password, { min: 8 }))
    validationErrors.push({
      msg: "Password must be at least 8 characters long",
    });
  // if (req.body.password !== req.body.confirmPassword)
  //   validationErrors.push({ msg: "Passwords do not match" });

  if (validationErrors.length) {
    // req.flash("errors", validationErrors);
    return res.redirect("/register");
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });

  User.findOne(
    { $or: [{ email: req.body.email }, { username: req.body.username }] },
    (err, existingUser) => {
      if (err) {
        return next(err);
      }
      if (existingUser) {
        console.log("Account with that email address or username already exists.")
        // req.flash("errors", {
        //   msg: "Account with that email address or username already exists.",
        // });
        return res.redirect("../register");
      }
      user.save((err) => {
        if (err) {
          return next(err);
        }
        req.logIn(user, (err) => {
          if (err) {
            return next(err);
          }
          res.redirect("/dashboard");
        });
      });
    }
  );
};

module.exports = {
  getLogin,
  postLogin,
  logout,
  getSignup,
  postSignup
}