import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:8000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      response = await response.json();

      // Assuming the structure of the response is an object with properties 'food_items' and 'foodCategory'
      setFoodItem(response.food_items);
      setFoodCat(response?.foodCategory || []);

      console.log("foodCat:", response.foodCategory);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="container">
        {foodCat.length !== 0 ? (
          foodCat.map((data, index) => <div key={index}>Hello World</div>)
        ) : (
          <div>
            <Card />
          </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
