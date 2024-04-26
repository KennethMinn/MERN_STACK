const express = require("express"); //npm install express
let morgan = require("morgan"); //npm install morgan - middleware package

const mongoose = require("mongoose"); //npm install mongoose
const Blog = require("./models/blog");
const app = express();

//db url
let mongoUrl =
  "mongodb+srv://mtk:mtk123@cluster0.yilh14y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//connecting to database
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("connect to db");
    //server should only run after connecting to database
    app.listen(3000, () => {
      console.log("app is listening port 3000");
    });
  })
  .catch((e) => {
    console.log(e);
  });

//view engine - npm install ejs
app.set("views", "./views"); //folder
app.set("view engine", "ejs"); //file

app.use(morgan("dev")); //logging req.method and req.originalUrl
app.use(express.static("public")); //telling static files are inside public folder - can navigate to '.nyi.png'

//create a blog
app.get("/add-blog", async (req, res) => {
  let blog = new Blog({
    title: "blog title 1",
    intro: "blog intro 1",
    body: "blog body 1",
  });

  //save in atlas
  await blog.save(); //below lines will wait this line
  res.send("blog created");
});

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

//404page - node reaches this line only if above routes are not match or function didn't respond
app.use((req, res) => {
  res.status(404).render("404"); //short hand of two lines
});
