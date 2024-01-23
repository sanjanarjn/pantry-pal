import { useState } from "react";


export default function Meal({mealData, onMealChange, mealImage}) {
  const [meal, setMeal] = useState(mealData.mealName);
  const placeholder = "Plan for your "+mealData.mealTime+"...";
  const changeMeal = (event) => {
    setMeal(event.target.value);
  };

  return (
    <div className="meal-card">
      <img src={mealImage} alt="Icon" class="icon" />
      <textarea
        type="text"
        contentEditable={true}
        className="meal-description"
        placeholder={placeholder}
        onBlur={(e) =>
          onMealChange(mealData.day, mealData.mealTime, e.target.value)
        }
        value={meal}
        onChange={changeMeal}
      ></textarea>
    </div>
  );
}
