const express = require("express");
const router = express.Router();
const trackerController = require("../controllers/trackerController");

// Track profile visit
router.post("/profile-visit", trackerController.trackProfileVisit);

module.exports = router;
