import React from "react";
import "../../styles/Menu.scss";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useShowMenu } from "./MenuContext";
import { useNavigate } from "react-router-dom";
import logo_black from "../../assets/logo/flavory-high-resolution-logo-black-transparent.png";
// import { Icon } from "@mui/material";

const Menu = () => {
  const { showMenu, handleOpenMenu, handleCloseMenu } = useShowMenu();
  const navigate = useNavigate();

  const navigateToHome = () => {
    handleCloseMenu();
    navigate("/");
  };
  const navigateToAddRecipe = () => {
    handleCloseMenu();
    navigate("/add-recipe");
  };
  const navigateToMyRecipe = () => {
    handleCloseMenu();
    navigate("/my-recipe");
  };
  const navigateToFavorites = () => {
    handleCloseMenu();
    navigate("/favorites");
  };
  return (
    <nav className="menu">
      {!showMenu && (
        <div className="close">
          <MenuIcon onClick={handleOpenMenu} className="menuIcon" />
          <div className="logo">
            <img src={logo_black} alt="Logo" />
          </div>
        </div>
      )}
      {showMenu === true && (
        <div className="open">
          <div className="menu_content">
            <CloseIcon onClick={handleCloseMenu} className="closeIcon" />
            <button onClick={navigateToHome}>Home</button>
            <button onClick={navigateToAddRecipe}>Add Recipe</button>
            <button onClick={navigateToMyRecipe}>My Recipe</button>
            <button onClick={navigateToFavorites}>Favorites</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Menu;

// {/* <div className="menu_pc">
//         <div className="logo">
//           <img src={logo_black} alt="Logo" />
//         </div>
//         <button onClick={navigateToHome}>Home</button>
//         <button onClick={navigateToAddRecipe}>Add Recipe</button>
//         <button onClick={navigateToMyRecipe}>My Recipe</button>
//         <button onClick={navigateToFavorites}>Favorites</button>
//       </div> */}
