const mongoose = require("mongoose");

const Blog = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    post: { type: String, required: true },
  },
  { collection: "Blog" }
);

const model = mongoose.model("BlogData", Blog);
module.exports = model;
