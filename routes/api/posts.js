const express = require("express");
const router = express.Router();

// @route GET to api/posts/test
// @desc Tests post route
// @access Public route
router.get("/test", (req, res) => res.json({ msg: "Post Works" }));

module.exports = router;
