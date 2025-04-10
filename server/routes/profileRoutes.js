const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");
// const auth = require("../middleware/auth"); // for if we need authentication middleware

// @route   GET /api/profiles
// @desc    Get all profiles
// @access  Public
router.get("/", profileController.getAllProfiles);

// @route   GET /api/profiles/:username
// @desc    Get profile by username
// @access  Public
router.get("/:username", profileController.getProfileByUsername);

// @route   POST /api/profiles
// @desc    Create or update profile
// @access  Private
// router.post("/", auth, profileController.createProfile);
// For development, let's make this public for now
router.post("/", profileController.createProfile);

// @route   DELETE /api/profiles
// @desc    Delete profile
// @access  Private
// router.delete("/", auth, profileController.deleteProfile);
// For development, let's make this public for now
router.delete("/", profileController.deleteProfile);

module.exports = router;
