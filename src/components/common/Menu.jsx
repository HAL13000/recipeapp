import React from "react";
import "../../styles/Menu.scss";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useShowMenu } from "./MenuContext";
import { useNavigate } from "react-router-dom";
// import { Icon } from "@mui/material";

const Menu = () => {
  const { showMenu, handleOpenMenu, handleCloseMenu } = useShowMenu();
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToAddRecipe = () => {
    navigate("/add-recipe");
  };
  const navigateToMyRecipe = () => {
    navigate("/my-recipe");
  };
  const navigateToFavorites = () => {
    navigate("/favorites");
  };
  return (
    <div className="menu">
      {!showMenu && <MenuIcon onClick={handleOpenMenu} className="menuIcon" />}
      {showMenu === true && (
        <div className="open">
          <CloseIcon onClick={handleCloseMenu} className="closeIcon" />
          <button onClick={navigateToHome}>Home</button>
          <button onClick={navigateToAddRecipe}>Add Recipe</button>
          <button onClick={navigateToMyRecipe}>My Recipe</button>
          <button onClick={navigateToFavorites}>Favorites</button>
        </div>
      )}
    </div>
  );
};

export default Menu;
