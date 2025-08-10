const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/home") {
      //http://localhost:5000/home
      fs.readFile("home.html", "utf-8", (error, data) => {
        if (error) {
          res.end(error.message);
        } else {
          res.end(data);
        }
      });
    } else if (req.url === "/profile") {
      //http://localhost:5000/profile
      fs.readFile("profile.html", "utf-8", (error, data) => {
        if (error) {
          res.end(error.message);
        } else {
          res.end(data);
        }
      });
    } else {
      res.end("Page not found");
    }
  } else if (req.method === "POST") {
    if (req.url === "/home") {
      // Handle POST request for home
      res.end("POST request received for home page");
    }
  } else {
    res.end("Only GET requests are supported");
  }
});

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   res.end("Identify the url request or route paths");
// });

// const server = http.createServer((req, res) => {
//   if (req.method === "GET") {
//     //
//     res.end("Hello from the GET request!");
//   } else if (req.method === "POST") {
//     //
//     res.end("Hello from the POST request!");
//   } else if (req.method === "PUT") {
//     //
//     res.end("Hello from the PUT request!");
//   } else if (req.method === "DELETE") {
//     //
//     res.end("Hello from the DELETE request!");
//   }
// });

// const server = http.createServer((req, res) => {
//   //how to identify the request
//   console.log(req.method);
//   res.end("Hello from the server!");
// });

// const server = http.createServer((req, res) => {
//   fs.readFile("FS.js", "utf-8", (error, data) => {
//     if (error) {
//       res.end(error.message);
//     } else {
//       res.end(data);
//     }
//   });
// });

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
// http://localhost:5000

//http://localhost:5000/get-users

//http://localhost:5000/get-products

//http://localhost:5000/home  : GET request

//http://localhost:5000/home  : POST request
