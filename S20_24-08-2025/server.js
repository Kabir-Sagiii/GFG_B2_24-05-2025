const express = require("express");
const createConnection = require("./connection/connection");
const UserRoute = require("./routes/userRoute");
const ProductRoute = require("./routes/productRoute");

const app = express();

//middleware
//this configuration we have to do, to access data from request body
app.use(express.json());

app.use("/users", UserRoute);
app.use("/product", ProductRoute);

app.listen(5001, () => {
  console.log("Server Started");
  createConnection();
});
