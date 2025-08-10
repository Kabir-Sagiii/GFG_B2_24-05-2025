const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    if (req.url === "/") {
      req.on("data", (reqData) => {
        console.log("Data received:", JSON.parse(reqData));
      });
      res.end("Hello World from Node.js Server!");
    } else {
      res.end("Invalid URL");
    }
  } else {
    res.end("Only POST method is allowed");
  }
});

server.listen(3000, () => {
  console.log("Server Started");
});

//http://localhost:3000
