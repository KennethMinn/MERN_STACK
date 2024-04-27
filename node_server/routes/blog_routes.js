const express = require("express");
const BlogController = require("../controllers/BlogController");
const router = express.Router();

//get all blogs & sorting(desc)
router.get("", BlogController.index);

//get a single blog - dynamic
router.get("/:id", BlogController.show);

//create a blog
router.get("/add-blog", BlogController.store);

//delete a single blog - dynamic
router.get("/:id/delete", BlogController.destory);

module.exports = router;
