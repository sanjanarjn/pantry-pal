import DailyMealPlanData from "./DailyMealPlanData";

const DaysOfWeek = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

class WeeklyMealPlanData {

    constructor() {
        this.mealPlans = new Map();
    }

    addMealPlan(dailyMealPlan) {
        this.mealPlans.set(dailyMealPlan.day, dailyMealPlan);
    }

    setMealPlan(dailyMealPlan) {
        this.mealPlans.set(dailyMealPlan.day, dailyMealPlan);
    }

    getMealPlanForDay(day) {
       return this.mealPlans.get(day)
    }

    static getWeeklyMealPlan(initialWeeklyMealPlan) {
        let weeklyMealPlan = new WeeklyMealPlanData();
        weeklyMealPlan.mealPlans = new Map(initialWeeklyMealPlan.mealPlans);
        return weeklyMealPlan;
    }

    static getEmptyWeeklyMealPlan() {
        let emptyWeeklyMealPlanData = new WeeklyMealPlanData();
        for (const day in DaysOfWeek) {
            emptyWeeklyMealPlanData.addMealPlan(
            new DailyMealPlanData(DaysOfWeek[day], "", "", "")
            );
        }
        return emptyWeeklyMealPlanData;
    }
}

export default WeeklyMealPlanData;