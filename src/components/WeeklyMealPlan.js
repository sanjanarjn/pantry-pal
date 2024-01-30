/* global chrome */
import React, { useState, useEffect, useContext } from "react";

import DailyMealPlan from "./DailyMealPlan";
import AddtoGroceryModal from "./AddToGrocery";
import WeeklyMealPlanData from "../data/WeeklyMealPlanData";
import SelectGroceryList from "./SelectGroceryList";
import AddItemsToGroceryList from "./AddItemsToGrocery";

function WeeklyMealPlan() {
  const DaysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [updatedWeeklyMealPlan, setWeeklyMealPlan] = useState(
    WeeklyMealPlanData.getEmptyWeeklyMealPlan()
  );
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGroceryList, setSelectedGroceryList] = useState("");

  const [showGroceryListsModal, setShowGroceryListsModal] = useState(false);
  const toggleShowGroceryListsModal = () => {
    setShowGroceryListsModal(!showGroceryListsModal);
  };

  const [showAddGroceryItemModal, setShowAddGroceryItemModal] = useState(false);
  const toggleShowAddGroceryItemModal = (groceryList) => {
    if(showGroceryListsModal)
      toggleShowGroceryListsModal();

    setSelectedGroceryList(groceryList);
    setShowAddGroceryItemModal(!showAddGroceryItemModal);
  };

  const handleMealChange = (day, mealTime, mealDetails) => {
    const updatedWeeklyMealPlanData = updatedWeeklyMealPlan
      ? WeeklyMealPlanData.getWeeklyMealPlan(updatedWeeklyMealPlan)
      : WeeklyMealPlanData.getEmptyWeeklyMealPlan();

    const dailyMealPlan = updatedWeeklyMealPlan.getMealPlanForDay(day);
    if (dailyMealPlan) {
      dailyMealPlan[mealTime] = mealDetails;
      updatedWeeklyMealPlan.setMealPlan(dailyMealPlan);
      setWeeklyMealPlan(updatedWeeklyMealPlanData);
      saveMealPlan(updatedWeeklyMealPlanData);
    }
  };

  const saveMealPlan = (value) => {
    const chromeValid = typeof chrome !== "undefined" && chrome.storage;
    if (chromeValid) {
      const mealPlans = Array.from(value.mealPlans);
      chrome.storage.local.set({ mealPlan: mealPlans }, function () {
        console.log("Stored meal plan");
        console.log(mealPlans);
      });
    }
  };

  useEffect(() => {
    console.log("Loading meal plans from chrome storage");
    const chromeValid = typeof chrome !== "undefined" && chrome.storage;
    if (chromeValid) {
      // Fetch data from Chrome storage
      chrome.storage.local.get(["mealPlan"], function (result) {
        if (result.mealPlan) {
          console.log(result.mealPlan);
          const updatedWeeklyMealPlanData = new WeeklyMealPlanData();
          updatedWeeklyMealPlanData.mealPlans = new Map(result.mealPlan);
          setWeeklyMealPlan(updatedWeeklyMealPlanData);
          console.log("Set meal plan from storage");
          setIsLoading(false);
        } else {
          setWeeklyMealPlan(WeeklyMealPlanData.getEmptyWeeklyMealPlan());
          setIsLoading(false);
        }
      });
    }
  }, []);

  if (isLoading) {
    return <div className="loader"></div>;
  } else {
    let dailyMealPlans = null;
    if (updatedWeeklyMealPlan) {
      dailyMealPlans = [];
      for (const day in DaysOfWeek) {
        let mealPlanForDay = updatedWeeklyMealPlan.getMealPlanForDay(
          DaysOfWeek[day]
        );
        dailyMealPlans.push(
          <DailyMealPlan
            key={day}
            dailyMealPlan={mealPlanForDay}
            onMealChange={handleMealChange}
            onAddGrocery={toggleShowGroceryListsModal}
          />
        );
      }
    }

    return (
      <div>
        {showGroceryListsModal && <SelectGroceryList toggleGroceryListModal={toggleShowGroceryListsModal} toggleAddGroceryItemModal={toggleShowAddGroceryItemModal}/>}
        {showAddGroceryItemModal && <AddItemsToGroceryList  groceryListName={selectedGroceryList} toggleAddToGroceryModal={toggleShowAddGroceryItemModal}/>}
        {dailyMealPlans}
      </div>
    );
  }
}

export default WeeklyMealPlan;
