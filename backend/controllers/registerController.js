const User = require("../models/User");
const List = require("../models/List")
const bcrypt = require("bcrypt");

// POST
// Register a new User
const postSignup = (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email
      })
      await newUser.save()

      const newList = new List({
        username: newUser.username,
        userId: newUser._id
      })
      await newList.save()

      res.send("User Created")
    }
  });
};

module.exports = {
  postSignup
}