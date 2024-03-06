import React from "react";
import "../../styles/RecipeBox.scss";
import logoOrange from "../../assets/logo/logo-color.png";
import { useNavigate } from "react-router-dom";
import { setRecipeSlice } from "../../redux/provider/recipeSlice";
import { useDispatch } from "react-redux";

// dispatch function by using setSelectedRecipe

const RecipeBox = ({ key, title, ingredients, image }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // recipesをどうやってreduxの中から持ってくればいいのか
  // const recipes = dispatch(setRecipeSlice());

  const navigateToThisRecipe = () => {
    navigate("/recipe");
  };
  return (
    <div className="recipeBox">
      <div
        className="recipeBox_container"
        onClick={navigateToThisRecipe}
        key={key}
        // title={title}
        // calories={recipe.recipe.calories}
        // image={image}
        // ingredients={ingredients}
      >
        <div className="recipeBox_content">
          <p className="title">{title}</p>
          <p className="caption">
            {ingredients.map((ingredient) => (
              <div className="ingredients">{ingredient.text}</div>
            ))}
          </p>
        </div>
        <div className="recipeBox_image">
          <img src={image} alt="" />
        </div>
      </div>
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
