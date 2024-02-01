import "./HomePage.css";
import mealImage from "../images/meal.png";
import groceryImage from "../images/grocery.png";
import pantryPalLogo from "../images/pantry-pal-logo.png";

import { useNavigate } from "react-router-dom";
import AppHeader from "./AppHeader";

export default function HomePage() {
  let navigate = useNavigate();

  return (
    <>
      <AppHeader/>
      <div className="home-page">
        <div className="home-page-tile" onClick={() => navigate("/meal-plans")}>
          <img src={mealImage} />
          <h4>Plan your meals</h4>
        </div>
        <div
          className="home-page-tile"
          onClick={() => navigate("/grocery-lists")}
        >
          <img src={groceryImage} />
          <h4>Grocery lists</h4>
        </div>
      </div>
    </>
  );
}
