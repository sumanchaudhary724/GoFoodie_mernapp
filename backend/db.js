const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://gofoodie:gofoodie%4012@cluster0.y1njtgu.mongodb.net/gofoodiemern?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
    const fetched_data = await mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(function (err, data) {
      if (err) console.log(err);
      else console.log(data);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = mongoDB;
