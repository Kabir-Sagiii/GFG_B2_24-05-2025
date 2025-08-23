const express = require("express");

const route = express.Router();

route.post(
  "/new-product",
  (req, res, next) => {
    console.log("Post Product Middleware");
    next();
  },
  (req, res) => {
    const data = req.body;
    console.log(data);
    console.log("Post Product Route Handler");
    res.send("Post Request");
  }
);

//http://localhost:5001/product/new-product

module.exports = route;
