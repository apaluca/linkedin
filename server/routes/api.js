const express = require("express");
const router = express.Router();
const profileRoutes = require("./profileRoutes");

// Test route
router.get("/test", (req, res) => {
  res.json({ message: "API is working" });
});

// Use profile routes
router.use("/profiles", profileRoutes);

module.exports = router;
