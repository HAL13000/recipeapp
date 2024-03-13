import React, { useEffect, useState } from "react";
import Menu from "../components/common/Menu";
import "../styles/Home.scss";
import SearchIcon from "@mui/icons-material/Search";
// import logo_black from "../assets/logo/flavory-high-resolution-logo-black-transparent.png";
import RecipeBox from "../components/common/RecipeBox";
import { useNavigate } from "react-router-dom";
import recipeApi from "../api/recipeApi";
import { useDispatch, useSelector } from "react-redux";
import {
  setQuery,
  setQueryRecipes,
  setSelectedRecipe,
} from "../redux/provider/recipeSlice";
import { useShowMenu } from "../components/common/MenuContext";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipe.value);
  const queryRecipes = useSelector((state) => state.recipe.queryRecipes);
  const query = useSelector((state) => state.recipe.query);
  const { showMenu, handleOpenMenu, handleCloseMenu } = useShowMenu();

  const getSearch = async () => {
    try {
      const data = await recipeApi.getRecipeFromQuery(query);
      // console.log(data);
      // setRecipes(data.hits);
      dispatch(setQueryRecipes(data.hits));
    } catch (err) {
      console.log("Error Searching Recipe ", err);
    }
  };

  const handleSearchRecipe = (e) => {
    dispatch(setQuery(e.target.value));
    getSearch();
  };
  const navigateToThisRecipe = (recipe) => {
    // console.log(recipe);
    dispatch(setSelectedRecipe(recipe));
    navigate(`/recipe`);
  };

  return (
    <div className="home">
      <Menu />
      {!showMenu && (
        <div className="search">
          <form>
            <input
              type="text"
              placeholder="I want to cook..."
              value={query}
              onChange={handleSearchRecipe}
            />
            <button type="button" onClick={getSearch}>
              <SearchIcon />
            </button>
          </form>
        </div>
      )}
      {showMenu === true && <div></div>}
      {!showMenu &&
        queryRecipes &&
        queryRecipes.map((recipe, i) => (
          <div
            key={i}
            className="recipe"
            onClick={() => navigateToThisRecipe(recipe.recipe)}
          >
            <RecipeBox
              // !! key
              // key={recipe.recipe.key}
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

/* <div className="search">
  <form>
    <input
      type="text"
      placeholder="I want to cook..."
      value={query}
      onChange={handleSearchRecipe}
    />
    <button type="button" onClick={getSearch}>
      <SearchIcon />
    </button>
  </form>
</div> */

/* {queryRecipes &&
  queryRecipes.map((recipe, i) => (
    <div
      key={i}
      className="recipe"
      onClick={() => navigateToThisRecipe(recipe.recipe)}
    >
      <RecipeBox
        // !! key
        // key={recipe.recipe.key}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
      />
    </div>
  ))} */
