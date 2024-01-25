import "./HomePage.css";
import mealImage from "../images/meal.png";
import groceryImage from "../images/grocery.png";
import groceryCartImage from "../images/grocery-cart.png";

import { useNavigate } from "react-router-dom";

export default function HomePage() {
  let navigate = useNavigate();

  return (
    <>
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
      <div className="logo">
        <div className="logo-icon">
          <img src={groceryCartImage} />
        </div>

        <div className="logo-name">
          <h2>PantryPal</h2>
        </div>
      </div>
    </>
  );
}
