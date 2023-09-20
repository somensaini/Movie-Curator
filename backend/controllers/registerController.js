const User = require("../models/User");
const List = require("../models/List")
const bcrypt = require("bcrypt");

// const postSignup = (req, res, next) => {
//     // hash the password
//     bcrypt
//     .hash(req.body.password, 10)
//     .then((hashedPassword) => {
//       // create a new user instance and collect the data
//       const user = new User({
//         username: req.body.username,
//         password: hashedPassword,
//         email: req.body.email,
//       });

//       // save the new user
//       user
//         .save()
//         // return success if the new user is added to the database successfully
//         .then((result) => {
//           res.status(201).send({
//             message: "User Created Successfully",
//             result,
//           });
//         })
//         // catch error if the new user wasn't added successfully to the database
//         .catch((error) => {
//           res.status(500).send({
//             message: "Error creating user",
//             error,
//           });
//         });
//     })
//     // catch error if the password hash isn't successful
//     .catch((e) => {
//       response.status(500).send({
//         message: "Password was not hashed successfully",
//         e,
//       });
//     });
// };

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