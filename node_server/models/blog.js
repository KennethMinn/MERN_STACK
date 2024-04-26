const mongoose = require("mongoose");

//schema
const BlogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  intro: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

//model - blogs collection -> Blog (naming convention)
const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
