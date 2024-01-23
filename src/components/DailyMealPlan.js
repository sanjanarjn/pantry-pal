// MealPlan.js
import React, { useState } from "react";
import "./DailyMealPlan.css";
import Meal from "./Meal"
import MealData from "../data/MealData"

import breakfastImage from "../images/pancakes.png";
import lunchImage from "../images/lunch-2.png";
import dinnerImage from "../images/dinner.png";

import groceryCartImage from "../images/add-to-cart-2.png";


const DailyMealPlan = ({ dailyMealPlan, onMealChange, onAddGrocery }) => {
  
  
  const day = dailyMealPlan.day;
  const breakfast = new MealData(day, "breakfast", dailyMealPlan.breakfast);
  const lunch = new MealData(day, "lunch", dailyMealPlan.lunch);
  const dinner = new MealData(day, "dinner", dailyMealPlan.dinner);

  return (
    <div className="day-container">
      <div className="day-header">{day}</div>
      <div className="meal-container">
        <Meal mealData={breakfast} onMealChange={onMealChange} mealImage={breakfastImage}></Meal>
        <Meal mealData={lunch} onMealChange={onMealChange} mealImage={lunchImage}></Meal>
        <Meal mealData={dinner} onMealChange={onMealChange} mealImage={dinnerImage}></Meal>
        <img src={groceryCartImage} alt="Icon" class="cart-icon" />

      </div>
    </div>
  );
};

export default DailyMealPlan;
