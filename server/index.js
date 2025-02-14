const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json()); // Allow JSON body in requests

app.get("/", (req, res) => {
  res.send("Welcome to my Portfolio API!");
});

// Sample API route for portfolio data
app.get("/api/profile", (req, res) => {
  res.json({
    name: "Your Name",
    role: "Full Stack Developer",
    about: "I love building awesome applications.",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
