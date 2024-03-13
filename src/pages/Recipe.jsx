import React from "react";
import { useSelector } from "react-redux";
import Menu from "../components/common/Menu";
import "../styles/Recipe.scss";
import { useNavigate } from "react-router-dom";

const Recipe = () => {
  const selectedRecipe = useSelector((state) => state.recipe.selectedRecipe);
  const navigate = useNavigate();

  // const OpenOriginalRecipe = () => {
  //   console.log(selectedRecipe.url);
  //   navigate(${selectedRecipe.url});
  // };
  // console.log(selectedRecipe);
  return (
    <section>
      <Menu />
      <div className="recipe_content">
        <h2>{selectedRecipe.label}</h2>
        <img className="recipeImage" src={selectedRecipe.image} alt="" />
        <p className="ingredientLines">{selectedRecipe.ingredientLines}</p>
        <div className="recipeUrl">
          <button
          // onClick={OpenOriginalRecipe}
          >
            Visit{" "}
          </button>
        </div>
        <p className="recipeCalories">{selectedRecipe.calories}</p>
      </div>
    </section>
  );
};

export default Recipe;
