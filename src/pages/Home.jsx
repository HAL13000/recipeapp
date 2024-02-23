import React, { useState } from "react";
import Menu from "../components/common/Menu";
import "../styles/Home.scss";
import SearchIcon from "@mui/icons-material/Search";
// import MenuIcon from "@mui/icons-material/Menu";
const Home = () => {
  const [searchRecipe, setSearchRecipe] = useState("");
  // const [showMenu, setShowMenu] = useState(false);

  const handleSearchRecipe = () => {
    console.log(searchRecipe);
  };

  return (
    <div className="home">
      <Menu />
      <div className="logo">
        <h1>FLAVORY</h1>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search Recipes"
          value={searchRecipe}
          onChange={(e) => searchRecipe(e.target.value)}
        />
        <button onClick={handleSearchRecipe}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default Home;
