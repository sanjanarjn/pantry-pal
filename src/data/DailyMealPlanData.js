class DailyMealPlanData {

    constructor(day, breakfast, lunch, dinner) {
        this.day = day
        this.breakfast = breakfast
        this.lunch = lunch
        this.dinner = dinner
    }

    getDay() {
        return this.day;
    }


}

export default DailyMealPlanData;