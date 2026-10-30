import homeBite1 from "../assets/food/home-bite-1.jpg";
import homeBite2 from "../assets/food/home-bite-2.jpg";
import homeBite3 from "../assets/food/home-bite-3.jpg";
import homeBite4 from "../assets/food/home-bite-4.jpg";
import homeMeal1 from "../assets/food/home-meal-1.jpg";
import homeMeal2 from "../assets/food/home-meal-2.jpg";
import homeMeal3 from "../assets/food/home-meal-3.jpg";
import homeMeal4 from "../assets/food/home-meal-4.jpg";
import menuBucket from "../assets/food/menu-bucket.jpg";
import menuChicken from "../assets/food/menu-chicken.jpg";
import menuMeal from "../assets/food/menu-meal.jpg";

const foodImages = {
  "Mingles Bucket Meal": homeMeal4,
  "Mixed Zinger Doubles": homeBite2,
  "10pc Strips with Nashville Sauce": menuChicken,
  "5pc Smoky Red Chicken": homeMeal1,
  "2 Veg Krispers Meal": homeMeal3,
  "Veg Zinger Box": menuBucket,
  "Classic Biryani Combo": homeBite3,
  "Pepsi Black Can 330 ml": homeMeal4,
  "Classic Chicken Biryani Bucket": homeBite3,
  "Zinger Tandoori Box": menuBucket,
  "Family Feast": homeMeal2,
  "Large Popcorn": homeBite1,
  "Double Chicken Roll": menuMeal,
  "Veg Zinger Burger": homeBite2,
  "Bucket for Two": homeMeal2,
  "Single Roll Combo for 1": menuMeal,
  "Large Fries": homeBite4,
  "1 pc Smoky Red Chicken": homeMeal1,
  "Choco Mud Pie": homeBite3,
  "Single Chicken Roll": menuMeal,
  "Double Roll Combo for 1": menuBucket,
  "Regular Popcorn": homeBite1,
  "Chick’n Wings Combo": homeMeal4,
};

export const getFoodImage = (title) => foodImages[title] || homeMeal1;