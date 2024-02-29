import React, { useEffect, useState } from "react";
import Menu from "../components/common/Menu";
import "../styles/Home.scss";
import SearchIcon from "@mui/icons-material/Search";
import logo_black from "../assets/logo/flavory-high-resolution-logo-black-transparent.png";
import RecipeBox from "../components/common/RecipeBox";
import { getRecipes } from "../api/index";

const Home = () => {
  const [searchRecipe, setSearchRecipe] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearchRecipe = (e) => {
    setSearchRecipe(e.target.value);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  useEffect(() => {
    console.log(searchRecipe);
  }, [searchRecipe]);

  return (
    <div className="home">
      <Menu />

      <div className="logo">
        <img src={logo_black} alt="Logo" />
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="I want to cook..."
          value={searchRecipe}
          onChange={handleSearchRecipe}
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </div>

      <div className="recipes">
        <RecipeBox />
      </div>
    </div>
  );
};

export default Home;
