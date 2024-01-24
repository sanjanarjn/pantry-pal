// MealPlan.js
import React, { useState } from "react";
import "./DailyMealPlan.css";
import Meal from "./Meal";
import MealData from "../data/MealData";

import breakfastImage from "../images/pancakes.png";
import lunchImage from "../images/lunch-2.png";
import dinnerImage from "../images/dinner.png";

import groceryCartImage from "../images/add-to-cart-2.png";

import {useNavigate } from 'react-router-dom';


const DailyMealPlan = ({ dailyMealPlan, onMealChange, onAddGrocery }) => {

  let navigate = useNavigate();
  const goToGroceryList = () => {
    navigate('/grocery-lists');
  };

  const day = dailyMealPlan.day;
  const breakfast = new MealData(day, "breakfast", dailyMealPlan.breakfast);
  const lunch = new MealData(day, "lunch", dailyMealPlan.lunch);
  const dinner = new MealData(day, "dinner", dailyMealPlan.dinner);


  return (
    <div className="day-container">
      <div className="day-header">{day}</div>
      <div className="meal-container">
        <Meal
          mealData={breakfast}
          mealImage={breakfastImage}
          onMealChange={onMealChange}
        ></Meal>
        <Meal
          mealData={lunch}
          mealImage={lunchImage}
          onMealChange={onMealChange}
        ></Meal>
        <Meal
          mealData={dinner}
          mealImage={dinnerImage}
          onMealChange={onMealChange}
        ></Meal>
        <div className="cart" onClick={onAddGrocery}>
          <img src={groceryCartImage} alt="Icon" className="cart-icon" />
        </div>
      </div>
    </div>
  );
};

export default DailyMealPlan;
