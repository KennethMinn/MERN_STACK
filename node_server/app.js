const express = require("express"); //npm install express
const app = express();

//view engine - npm install ejs
app.set("views", "./views"); //folder
app.set("view engine", "ejs"); //file

app.get("/", function (req, res) {
  res.render("home"); //no need extension(ejs) of the file
});

//rendering file
app.get("/about", function (req, res) {
  res.render("about");
});

//redirect url
app.get("/about-us", function (req, res) {
  res.render("about");
});

//404page - node reaches this line only if above routes are not match
app.use((req, res) => {
  res.status(404).render("404"); //short hand of two lines
});

app.listen(3000, () => {
  console.log("app is listening port 3000");
});
