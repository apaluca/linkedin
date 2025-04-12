const VisitTracker = require("../models/VisitTracker");
const geoip = require("geoip-lite"); // Need to add this package

// @desc    Track profile visit
// @route   POST /api/tracker/profile-visit
// @access  Public
exports.trackProfileVisit = async (req, res) => {
  try {
    const {
      profileId,
      timezone,
      screenResolution,
      browserLanguage,
      fingerprint,
      rawData,
    } = req.body;

    // Get IP address
    const ipAddress =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    // Get User-Agent
    const userAgent = req.headers["user-agent"];

    // Get geographic location using geoip-lite
    const geo = geoip.lookup(ipAddress);

    // Create tracking entry
    const trackingData = {
      profileId,
      ipAddress,
      userAgent,
      timestamp: new Date(),
      timezone,
      screenResolution,
      browserLanguage,
      fingerprint,
      rawData,
    };

    // Add geographic data if available
    if (geo) {
      trackingData.geographicLocation = {
        country: geo.country,
        city: geo.city,
        region: geo.region,
        ll: geo.ll,
      };

      // Simple ISP detection (this would be enhanced with a real service)
      trackingData.networkInfo = {
        type: geo.range ? "Static" : "Dynamic",
        isp: geo.org || "Unknown", // Basic organization info from geoip
      };
    }

    // Save tracking data
    const tracker = new VisitTracker(trackingData);
    await tracker.save();

    // Return success but don't expose details
    res.status(201).json({ success: true });
  } catch (err) {
    console.error("Error tracking profile visit:", err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
