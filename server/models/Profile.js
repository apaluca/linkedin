const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
  },
  duration: {
    type: String,
  },
  location: {
    type: String,
  },
  description: {
    type: String,
  },
});

const EducationSchema = new mongoose.Schema({
  school: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
  },
  logo: {
    type: String,
  },
  duration: {
    type: String,
  },
  description: {
    type: String,
  },
});

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  location: {
    type: String,
  },
  followers: {
    type: Number,
    default: 0,
  },
  connections: {
    type: Number,
    default: 0,
  },
  bannerImage: {
    type: String,
  },
  profileImage: {
    type: String,
  },
  experience: [ExperienceSchema],
  education: [EducationSchema],
  skills: [String],
  about: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Profile", ProfileSchema);
