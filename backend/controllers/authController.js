const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const getSignup = (req, res) => {
  if (req.user) {
    return res.redirect("/dashboard");
  }
  res.render("index", {
    title: "Create Account",
  });
};

const postSignup = (req, res, next) => {
    // hash the password
    bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      // create a new user instance and collect the data
      const user = new User({
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
      });

      // save the new user
      user
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          res.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        // catch error if the new user wasn't added successfully to the database
        .catch((error) => {
          res.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
};

module.exports = {
  getSignup,
  postSignup
}