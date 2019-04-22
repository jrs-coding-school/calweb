var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
  author: String,
  blog: String,
  title: String
});

var Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
