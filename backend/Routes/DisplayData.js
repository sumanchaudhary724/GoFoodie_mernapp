const express = require("express");
const router = express.Router();

router.post("/foodData", async (req, res) => {
  try {
    console.log({
      food_items: global.food_items,
      foodCategory: global.foodCategory,
    });
    res.json({
      food_items: global.food_items,
      foodCategory: global.foodCategory,
    });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
