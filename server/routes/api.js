const express = require("express");
const router = express.Router();
const profileRoutes = require("./profileRoutes");
const userRoutes = require("./userRoutes");

// Test route
router.get("/test", (req, res) => {
  res.json({ message: "API is working" });
});

// Use profile routes
router.use("/profiles", profileRoutes);

// Use user routes
router.use("/users", userRoutes);

module.exports = router;
