const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/about", function (req, res) {
  res.sendFile("./views/about.html", { root: __dirname }); //rendering html file
});

app.listen(3000, () => {
  console.log("app is listening port 3000");
});
