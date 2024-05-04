const express = require("express");
const morgan = require("morgan"); //npm i morgan
require("dotenv").config(); //npm i dotenv

const app = express();
app.use(morgan("dev"));

app.listen(process.env.PORT, () => {
  console.log("running");
});
