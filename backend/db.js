const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://gofoodie:gofoodie%4012@cluster0.y1njtgu.mongodb.net/?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = mongoDB;
