const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

//rendering html file
app.get("/about", function (req, res) {
  res.sendFile("./views/about.html", { root: __dirname });
});

//redirect url
app.get("/about-us", function (req, res) {
  res.redirect("/about");
});

//404page - node reaches this line only if above routes are not match
app.use((req, res) => {
  res.statusCode = 404;
  res.sendFile("./views/404.html", { root: __dirname });
});

app.listen(3000, () => {
  console.log("app is listening port 3000");
});
