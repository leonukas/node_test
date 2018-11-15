const express = require("express");
const router = express.Router();

// Load User model
const user = require("../../models/User");

// @route GET to api/users/test
// @desc Tests users route
// @access Public route
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// @route GET to api/users/register
// @desc Register a user
// @access Public access (you nned to register a user, duh!)
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exsists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });
    }
  });
});

// GRAVATAR INSTALATION

module.exports = router;
