require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const productRouter = require("./routes/products");
const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/error-handler");
const connectDB = require("./db/connect");

app.use(express.json());
app.use("/api/v1/products", productRouter);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on PORT ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
