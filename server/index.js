const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const yaml = require("js-yaml");
const fs = require("fs");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json()); // Allow JSON body in requests

// Load Swagger documentation
const swaggerDocument = yaml.load(fs.readFileSync("./swagger.yaml", "utf8"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Welcome to my Portfolio API!");
});

// Sample API route
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
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});
