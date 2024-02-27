import React, { useEffect, useState } from "react";
import Menu from "../components/common/Menu";
import "../styles/Home.scss";
import SearchIcon from "@mui/icons-material/Search";
import logo_black from "../assets/logo/flavory-high-resolution-logo-black-transparent.png";
import RecipeBox from "../components/common/RecipeBox";

const Home = () => {
  const APP_ID = "0c8eb085";
  const APP_KEY = "137ccd862a7a33918e3a316299f8f288";

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q="banana"&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const [searchRecipe, setSearchRecipe] = useState("");

  const handleSearchRecipe = (e) => {
    setSearchRecipe(e.target.value);
  };
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
