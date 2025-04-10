const Profile = require("../models/Profile");

// @desc    Get profile by username
// @route   GET /api/profiles/:username
// @access  Public
exports.getProfileByUsername = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      username: req.params.username,
    });

    if (!profile) {
      return res.status(404).json({ msg: "Profile not found" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Create or update profile
// @route   POST /api/profiles
// @access  Private
exports.createProfile = async (req, res) => {
  const {
    username,
    name,
    title,
    location,
    bannerImage,
    profileImage,
    experience,
    education,
    skills,
    about,
  } = req.body;

  // Build profile object
  const profileFields = {};
  profileFields.user = req.user.id;
  if (username) profileFields.username = username;
  if (name) profileFields.name = name;
  if (title) profileFields.title = title;
  if (location) profileFields.location = location;
  if (bannerImage) profileFields.bannerImage = bannerImage;
  if (profileImage) profileFields.profileImage = profileImage;
  if (about) profileFields.about = about;
  if (skills) {
    profileFields.skills = skills.split(",").map((skill) => skill.trim());
  }

  // Build experience array
  if (experience) {
    profileFields.experience = experience;
  }

  // Build education array
  if (education) {
    profileFields.education = education;
  }

  try {
    // Check if profile exists
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      // Update profile
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );

      return res.json(profile);
    }

    // Create profile
    profile = new Profile(profileFields);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Get all profiles
// @route   GET /api/profiles
// @access  Public
exports.getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc    Delete profile
// @route   DELETE /api/profiles
// @access  Private
exports.deleteProfile = async (req, res) => {
  try {
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });

    res.json({ msg: "Profile deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
