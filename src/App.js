import "./App.css";
import { DataProvider } from "./components/DataContext";
import GroceryLists from "./components/GroceryLists";
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
            <Route path="/grocery-lists" element={<GroceryLists />} />
          </Routes>
        </div>
      </HashRouter>
    </DataProvider>
  );
}

export default App;
