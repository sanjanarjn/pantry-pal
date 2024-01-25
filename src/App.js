import "./App.css";
import { DataProvider } from "./components/DataContext";
import GroceryList from "./components/GroceryList";
import HomePage from "./components/HomePage";
import WeeklyMealPlan from "./components/WeeklyMealPlan";
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <HashRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/meal-plans" element={<WeeklyMealPlan />} />
            <Route path="/grocery-lists" element={<GroceryList />} />
          </Routes>
        </div>
      </HashRouter>
    </DataProvider>
  );
}

export default App;
