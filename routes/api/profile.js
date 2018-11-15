const express = require("express");
const router = express.Router();

// @route GET to api/profile/test
// @desc Tests profile route
// @access Public route
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
