import React from "react";
import "../../styles/RecipeBox.scss";
import logoOrange from "../../assets/logo/logo-color.png";
import { useNavigate } from "react-router-dom";
import { setRecipeSlice } from "../../redux/provider/recipeSlice";
import { useDispatch } from "react-redux";

// dispatch function by using setSelectedRecipe

const RecipeBox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // recipesをどうやってreduxの中から持ってくればいいのか
  const recipes = dispatch(setRecipeSlice());

  const navigateToThisRecipe = () => {
    navigate("/recipe");
  };
  return (
    <div className="recipeBox">
      {recipes.map((recipe) => (
        <div
          className="recipeBox_container"
          onClick={navigateToThisRecipe}
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        >
          <div className="recipeBox_content">
            <p className="title">
              Title Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="caption">
              Caption Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="recipeBox_image">
            <img src={logoOrange} alt="" />
          </div>
        </div>
      ))}
      {/* <div className="recipeBox_container" onClick={navigateToThisRecipe}>
        <div className="recipeBox_content">
          <p className="title">
            Title Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="caption">
            Caption Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="recipeBox_image">
          <img src={logoOrange} alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default RecipeBox;
