const express = require("express");

const route = express.Router();

route.get(
  "/get-users/:id",
  (req, res, next) => {
    console.log("get middleware-1");
    next();
  },
  (req, res, next) => {
    console.log("get middleware-2");
    next();
  },
  (req, res) => {
    const pathParams = req.params.id;
    console.log(pathParams);
    console.log("get route-handler-1");
    res.send("Get Request");
  }
); // http://localhost:5001/users/get-users/<path-params>

route.get("/user", (req, res) => {
  const queryParams = req.query;
  console.log(queryParams.gender, queryParams.city);

  res.send("query params request");
});
// http://localhost:5001/users/user

route.post(
  "/new-user",
  (req, res, next) => {
    console.log("post middleware-1");
  },
  (req, res) => {
    console.log("post route handler ");
    res.send("post request");
  }
);

// route.put();

// route.delete();

module.exports = route;
