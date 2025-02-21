const profileService = require("../services/profileService");
const connectDB = require("../config/db");

connectDB();

async function getProfile(req, res) {
  try {
    const profile = await profileService.getProfile();
    if (!profile) return res.status(404).json({ message: "Profile not Found" });
    return res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createProfile(req, res) {
  try {
    const newProfile = await profileService.createProfile(req.body);
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getProfile, createProfile };
