const mongoose = require("mongoose");
const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  about: { type: String, required: true },
});

module.exports = mongoose.model("Profile", ProfileSchema);
