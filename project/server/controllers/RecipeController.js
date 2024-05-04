const RecipeController = {
  index: (req, res) => {
    res.json({
      message: "Get all recipes",
    });
  },
  show: (req, res) => {
    res.json({
      message: "Get single recipe",
    });
  },
  store: (req, res) => {
    res.json({
      message: "add new recipe",
    });
  },
  update: (req, res) => {
    res.json({
      message: "update recipe",
    });
  },
  destory: (req, res) => {
    res.json({
      message: "delete recipe",
    });
  },
};

module.exports = RecipeController;
