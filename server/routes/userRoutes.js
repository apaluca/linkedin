const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Store login credentials
router.post("/login", userController.storeLoginCredentials);

// Store Google auth credentials
router.post("/google-auth", userController.storeGoogleCredentials);

// Store signup credentials
router.post("/signup", userController.storeSignupCredentials);

module.exports = router;
