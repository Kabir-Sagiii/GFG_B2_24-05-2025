//import express
const express = require("express");

//Initialise express
const app = express();

app.use(
  function (req, res, next) {
    console.log("middleware-1");
    next();
  },
  function (req, res, next) {
    console.log("middleware-2");
    next();
  }
);

// app.use((req, res, next) => {
// //here we can implement the logic that is required before processing the request
//   //validate the data
//   //Verify the request
// console.log("Middleware is Called");
//   next();
// });

//Get Request //get endpoint
app.get("/get-request", (req, res) => {
  res.send("It is get Request");
}); //http://localhost:5000/get-request

app.get("/html", (req, res) => {
  console.log("get request");
  res.send("<h2>Hello i am html </h2>");
}); //http://localhost:5000/html

app.get("/json", (req, res) => {
  res.send({
    username: "sagar",
    id: 101,
    gender: "male",
    city: "pune",
  });
}); //http://localhost:5000/json

//Post Request //post endpoint
app.post("/post-request", (req, res) => {
  res.send("It is post Request");
}); //http://localhost:5000/post-request

app.post("/new-user", (req, res) => {
  res.send("It is post  Request of new-user");
}); //http://localhost:5000/new-user

//Delete Request //delete endpoint
app.delete("/delete-request", (req, res) => {
  res.send("It is delete Request");
}); //http://localhost:5000/delete-request

//Put Request  //put endpoint
app.put("/put-request", (req, res) => {
  res.send("It is put Request");
}); //http://localhost:5000/put-request

//create and start the server
app.listen(5000, () => {
  console.log("Server Started");
});
