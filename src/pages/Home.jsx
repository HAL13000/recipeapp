import React, { useEffect, useState } from "react";
import Menu from "../components/common/Menu";
import "../styles/Home.scss";
import SearchIcon from "@mui/icons-material/Search";
import logo_black from "../assets/logo/flavory-high-resolution-logo-black-transparent.png";
import RecipeBox from "../components/common/RecipeBox";
import { useNavigate } from "react-router-dom";
import recipeApi from "../api/RecipeApi";

const Home = () => {
  // const [searchRecipe, setSearchRecipe] = useState("");
  // const [recipes, setRecipes] = useState([]);
  // const [query, setQuery] = useState("banana");
  const navigate = useNavigate();

  //----
  // const getRecipes = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
  //     );
  //     const data = await response.json();
  //     setRecipes(data.hits);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // getRecipe();
  // const getSearch = (e) => {
  //   e.preventDefault();
  //   setQuery(searchRecipe);
  //   setSearchRecipe("");
  // };

  // const handleSearchRecipe = (e) => {
  //   setSearchRecipe(e.target.value);
  // };

  // useEffect(() => {
  //   getRecipe();
  // }, [query]);

  // ----

  useEffect(() => {
    console.log(searchRecipe);
  }, [searchRecipe]);

  // const navigateToRecipe = () => {
  //   navigate("/recipe");
  //   // recipe のページにいく時必ずそのIDと会ったページにいかなきゃいけない
  // };
  return (
    <div className="home">
      <Menu />

      <div className="logo">
        <img src={logo_black} alt="Logo" />
      </div>

      <div className="search">
        <form onSubmit={getSearch}>
          <input
            type="text"
            placeholder="I want to cook..."
            value={searchRecipe}
            onChange={handleSearchRecipe}
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>

      {recipes.map((recipe) => (
        <div className="recipes">
          <RecipeBox
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
