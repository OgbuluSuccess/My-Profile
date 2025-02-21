const profile = require("../models/Profile");

const getProfile = async () => {
  return await profile.findOne();
};

const createProfile = async (data) => {
  console.log(data, "fghjkl");
  const newProfile = new profile(data);
  return await newProfile.save();
};

module.exports = { getProfile, createProfile };
