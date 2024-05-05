const Recipe = require("../model/Recipe");

const RecipeController = {
  index: (req, res) => {
    return res.json({
      message: "Get all recipes",
    });
  },
  show: (req, res) => {
    return res.json({
      message: "Get single recipe",
    });
  },
  store: async (req, res) => {
    const { title, description, ingredients } = req.body;
    try {
      const recipe = await Recipe.create({
        title,
        description,
        ingredients,
      });
      return res.json(recipe);
    } catch (error) {
      return res.status(400).json({ message: "invalid field" });
    }
  },
  update: (req, res) => {
    return res.json({
      message: "update recipe",
    });
  },
  destory: (req, res) => {
    return res.json({
      message: "delete recipe",
    });
  },
};

module.exports = RecipeController;
