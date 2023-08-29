require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/users");
const blogRoutes = require("./routes/blog");
const contactRoutes = require("./routes/contact");

mongoose.connect(process.env.URI);

const allowedOrigins = ["http://localhost:8081", process.env.CLIENT_ORIGIN];
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use("/", contactRoutes);
app.use("/", userRoutes);
app.use("/", blogRoutes);

const port = process.env.NODE_DOCKER_PORT || 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Export the Express API
module.exports = app;
