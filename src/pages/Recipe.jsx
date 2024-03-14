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
    <section className="recipe">
      <Menu />
      <div className="recipe_content">
        <h3>{selectedRecipe.label}</h3>

        <img className="recipeImage" src={selectedRecipe.image} alt="" />
        <p className="recipeCalories">
          Calories : {selectedRecipe.calories}kcal
        </p>
        <p className="ingredientLines">{selectedRecipe.ingredientLines}</p>
        <div className="recipeUrl">
          <button
          // onClick={OpenOriginalRecipe}
          >
            Check More about this recipe{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Recipe;
