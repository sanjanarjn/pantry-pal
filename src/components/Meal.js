import { useState } from "react";


export default function Meal({mealData, mealImage, onMealChange}) {

  const [updatedMeal, setMeal] = useState(mealData.mealName);
  const placeholder = "Plan for your "+mealData.mealTime+"...";
  const changeMeal = (event) => {
    console.log("Meal change")
    setMeal(event.target.value);
  };

  return (
    <div className="meal-card">
      <img src={mealImage} alt="Icon" className="icon" />
      <textarea
        type="text"
        className="meal-description"
        placeholder={placeholder}
        onBlur={(e) =>
          onMealChange(mealData.day, mealData.mealTime, e.target.value)
        }
        value={updatedMeal}
        onChange={changeMeal}
      ></textarea>
    </div>
  );
}
