import pantryPalLogo from "../images/pantry-pal-logo.png";
import homeLogo from "../images/home-icon.png";
import { useNavigate } from "react-router-dom";

import "./AppHeader.css"
const AppHeader = () => {

 let navigate = useNavigate();
  return (
    <div className="logo-panel">
      <div className="logo-panel-home">
        <img className="home-icon" src={homeLogo} onClick={() => navigate("/")} />
      </div>
      <div className="logo-panel-app-icon">
        <img className="app-icon" src={pantryPalLogo} />
      </div>
    </div>
  );
};

export default AppHeader;
