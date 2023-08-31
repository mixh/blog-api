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

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("app/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/app/build/index.html"));
  });
}

const allowedOrigins = ["http://localhost:3000", process.env.client];
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

app.use("/api/", contactRoutes);
app.use("/api/", userRoutes);
app.use("/api/", blogRoutes);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
