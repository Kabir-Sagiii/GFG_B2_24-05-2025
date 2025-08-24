const express = require("express");
const User = require("../model/userSchema"); //importing model

const route = express.Router();

route.get("/users-data", (req, res) => {
  //Write the code to perform read action
  User.find()
    .then((data) => {
      res.send({ ok: true, results: data });
    })
    .catch((error) => {
      res.send({ ok: false, error: error.message });
    });

  //object called model---> ModelClass ----->Schema
});
//http://localhost:5001/users/users-data

route.post("/create-user", (req, res) => {
  //Access the data from request
  const userdata = req.body;

  const newuser = new User(userdata);

  newuser
    .save()
    .then(() => {
      res.send({ ok: true, result: "User Created successfully" });
    })
    .catch((error) => {
      res.send({ ok: false, error: error.message });
    });
});
//http://localhost:5001/users/create-user

module.exports = route;
