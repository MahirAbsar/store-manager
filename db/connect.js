const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = (MONGO_URI) => {
  try {
    return mongoose.connect(MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
