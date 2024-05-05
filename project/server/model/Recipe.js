const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true, // cratedAt and updatedAt will be included
  }
);

module.exports = mongoose.model("Recipe", RecipeSchema);
