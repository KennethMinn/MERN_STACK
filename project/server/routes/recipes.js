const express = require("express");
const router = express.Router();
const RecipeController = require("../controllers/RecipeController");

router.get("", RecipeController.index);
router.get("/:id", RecipeController.show);
router.post("", RecipeController.store);
router.patch("/:id", RecipeController.update);
router.delete("/:id", RecipeController.destory);

module.exports = router;
