const http = require("http");
const fs = require("fs");

//create server
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  let filename;

  //req.url - route
  switch (req.url) {
    case "/":
      filename = "home.html";
      res.statusCode = 200;
      break;
    case "/about":
      filename = "about.html";
      res.statusCode = 200;
      break;
    case "/about-us":
      res.statusCode = 301; //redirect url code
      res.setHeader("Location", "/about"); //redirecting url
      break;
    default:
      filename = "404.html";
      res.statusCode = 404;
      break;
  }

  //rendering html file to client
  fs.readFile(`./views/${filename}`, (err, data) => {
    if (err) {
      console.log(err);
    } else res.write(data);
    res.end();
  });
});

//listen to client at localhost port 3000
server.listen(3000, "localhost", () => {
  console.log("server listening on port 3000");
});
