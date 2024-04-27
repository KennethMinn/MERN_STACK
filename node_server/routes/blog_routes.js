const express = require("express");
const Blog = require("../models/blog");
const router = express.Router();

//create a blog
router.get("/add-blog", async (req, res) => {
  let blog = new Blog({
    title: "blog title 1",
    intro: "blog intro 1",
    body: "blog body 1",
  });

  //save in atlas
  await blog.save(); //below lines will wait this line
  res.send("blog created");
});

//get all blogs & sorting(desc)
router.get("", async function (req, res) {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

//get a single blog - dynamic
router.get("/:id", async (req, res) => {
  console.log(req.params); //{id : "662bc6642ccd5b138a42484c"}
  const blog = await Blog.findById(req.params.id);
  res.json(blog);
});

//delete a single blog - dynamic
router.get("/:id/delete", async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.redirect("/blogs");
});

module.exports = router;
