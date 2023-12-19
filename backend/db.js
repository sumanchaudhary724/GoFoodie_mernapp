const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://gofoodie:gofoodie%4012@cluster0.y1njtgu.mongodb.net/gofoodiemern?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");

    const db = mongoose.connection.db;

    const foodItemsCollection = db.collection("food_items");
    const foodCategoryCollection = db.collection("foodCategory");

    const data = await foodItemsCollection.find({}).toArray();
    const catData = await foodCategoryCollection.find({}).toArray();

    global.food_items = data;
    global.foodCategory = catData;

    console.log("Retrieved data:", data);
    console.log("Retrieved food categories:", catData);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = mongoDB;
