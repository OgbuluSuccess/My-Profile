const mongoose = require("mongoose");
const ProfileSchema = new mongoose.Schema({
  name: { type: String, require: true },
  role: { type: String, require: true },
  about: { type: string, require: true },
});

module.exports = mongoose.model("Profile", ProfileSchema);
