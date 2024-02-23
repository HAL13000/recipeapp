import React from "react";
import "../../styles/Menu.scss";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useShowMenu } from "./MenuContext";
// import { Icon } from "@mui/material";

const Menu = () => {
  const { showMenu, handleOpenMenu, handleCloseMenu } = useShowMenu();
  return (
    <div className="menu">
      {!showMenu && <MenuIcon onClick={handleOpenMenu} className="menuIcon" />}
      {showMenu === true && (
        <div className="open">
          <CloseIcon onClick={handleCloseMenu} className="closeIcon" />
          <button>Home</button>
          <button>Add Recipe</button>
          <button>My Recipe</button>
          <button>Favorites</button>
        </div>
      )}
    </div>
  );
};

export default Menu;
