const Blog = require("../models/Blog");

const BlogController = {
  index: async function (req, res) {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  },
  show: async (req, res) => {
    console.log(req.params); //{id : "662bc6642ccd5b138a42484c"}
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  },
  store: async (_req, res) => {
    let blog = new Blog({
      title: "blog title 1",
      intro: "blog intro 1",
      body: "blog body 1",
    });

    //save in atlas
    await blog.save(); //below lines will wait this line
    res.send("blog created");
  },
  destroy: async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect("/blogs");
  },
};

module.exports = BlogController;
