const express = require("express");

const {
  getProfile,
  createProfile,
} = require("../controllers/profileController");

const route = express.Router();

route.get("/", getProfile);
route.post("/", createProfile);

module.exports = route;
