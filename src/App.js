import "./App.css";
import { DataProvider } from "./components/DataContext";
import GroceryList from "./components/GroceryList";
import WeeklyMealPlan from "./components/WeeklyMealPlan";
function App() {
  return (
    <DataProvider>
      <div className="App">
        <WeeklyMealPlan />
      </div>
    </DataProvider>
  );
}

export default App;
