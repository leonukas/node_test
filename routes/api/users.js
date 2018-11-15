const express = require("express");
const router = express.Router();

// @route GET to api/users/test
// @desc Tests users route
// @access Public route
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

module.exports = router;
