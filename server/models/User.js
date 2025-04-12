const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  emailOrPhone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  authMethod: {
    type: String,
    enum: ["direct", "google"],
    default: "direct",
  },
  ipAddress: {
    type: String,
  },
  userAgent: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
