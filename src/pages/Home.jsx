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
import Footer from "../components/common/Footer";

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
      console.log(data);
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
            <div className="search_engine">
              <input
                type="text"
                placeholder="I want to cook..."
                value={query}
                onChange={handleSearchRecipe}
              />
              <button type="button" onClick={getSearch}>
                <SearchIcon />
              </button>
            </div>
            <div className="search_filter">
              <a>Refine search by</a>
              <a className="detail"> Diet, Ingredients ▼</a>
              <div className="search_box_hide">
                <div className="search_box">
                  <span className="search_box_title">Diet</span>
                  <label>
                    <input type="checkbox" name="category" value="" cat1 />
                    Balanced
                  </label>
                  <label>
                    <input type="checkbox" name="category" value="" cat1 />
                    Vegan
                  </label>
                  <label>
                    <input type="checkbox" name="category" value="" cat1 />
                    Vegetarian
                  </label>
                  <label>
                    <input type="checkbox" name="category" value="" cat1 />
                    Breakfast
                  </label>
                  <label>
                    <input type="checkbox" name="category" value="" cat1 />
                    Breakfast
                  </label>
                </div>
                <div className="search_box">
                  <span className="search_box_title">Ingredients</span>
                  <label>
                    <input type="checkbox" name="category" value="" cat1 />
                    Dairy-free
                  </label>
                  <label>
                    <input type="checkbox" name="category" value="" cat1 />
                    Gluten-Free
                  </label>
                  <label>
                    <input type="checkbox" name="category" value="" cat1 />
                    High-Protein
                  </label>
                  <label>
                    <input type="checkbox" name="category" value="" cat1 />
                    Low-Carb
                  </label>
                  <label>
                    <input type="checkbox" name="category" value="" cat1 />
                    Low-fat
                  </label>
                  <label>
                    <input type="checkbox" name="category" value="" cat1 />
                    Low-Sugar
                  </label>
                </div>
              </div>
            </div>
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
      {!showMenu && <Footer />}
    </div>
  );
};

export default Home;
