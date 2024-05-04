const express = require("express");
const morgan = require("morgan"); //npm i morgan
require("dotenv").config(); //npm i dotenv

const RecipeRouters = require("./routes/recipes");

const app = express();
app.use(morgan("dev")); //logging routes middleware like nextjs

app.use("/api/recipes", RecipeRouters);

app.listen(process.env.PORT, () => {
  console.log("running");
});
