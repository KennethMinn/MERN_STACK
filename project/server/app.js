require("dotenv").config(); //npm i dotenv
const express = require("express");
const morgan = require("morgan"); //npm i morgan
const mongoose = require("mongoose"); //npm i mongoose
const RecipeRouters = require("./routes/recipes");

const app = express();

mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("running");
  });
});

app.use(express.json()); //parsing json data from req
app.use(morgan("dev")); //logging routes middleware like nextjs

app.use("/api/recipes", RecipeRouters);
