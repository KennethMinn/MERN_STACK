const http = require("http");

//create server
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  res.write("<h1>Hello world<h1/>");
  res.end();
});

//listen to client at localhost port 3000
server.listen(3000, "localhost", () => {
  console.log("server listening on port 3000");
});
