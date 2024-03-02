import React, { useEffect, useState } from "react";
import Menu from "../components/common/Menu";
import "../styles/Home.scss";
import SearchIcon from "@mui/icons-material/Search";
import logo_black from "../assets/logo/flavory-high-resolution-logo-black-transparent.png";
import RecipeBox from "../components/common/RecipeBox";
import { useNavigate } from "react-router-dom";
import { getRecipe } from "../api/RecipeApi";

const Home = () => {
  const [searchRecipe, setSearchRecipe] = useState("");
  const [recipes, setRecipes] = useState([]);
  // const [query, setQuery] = useState("banana");
  const navigate = useNavigate();

  const getSearch = () => {
    // ☆
    getRecipe(searchRecipe)
      .then((data) => {
        console.log(data);
        // update recipes with new data .. data.hits = recipes(useState)
        setRecipes(data.hits);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSearchRecipe = (e) => {
    setSearchRecipe(e.target.value);
  };

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
        <form>
          <input
            type="text"
            placeholder="I want to cook..."
            value={searchRecipe}
            onChange={handleSearchRecipe}
          />
          <button type="button" onClick={getSearch}>
            <SearchIcon />
          </button>
        </form>
      </div>

      {recipes &&
        recipes.map((recipe) => (
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
