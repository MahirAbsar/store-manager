require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, console.log(`Server is listening on PORT ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
