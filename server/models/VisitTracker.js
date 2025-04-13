const mongoose = require("mongoose");

const VisitTrackerSchema = new mongoose.Schema({
  profileId: {
    type: String,
    required: true,
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
  timezone: {
    type: String,
  },
  screenResolution: {
    width: Number,
    height: Number,
  },
  browserLanguage: {
    type: String,
  },
  geographicLocation: {
    country: String,
    city: String,
    region: String,
    ll: [Number], // [longitude, latitude]
  },
  networkInfo: {
    type: {
      type: String,
    },
    isp: {
      type: String,
    },
  },
  fingerprint: {
    type: String,
  },
  rawData: {
    type: Object, // For any additional data
  },
});

module.exports = mongoose.model("VisitTracker", VisitTrackerSchema);
