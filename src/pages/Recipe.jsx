import React from "react";
import { useSelector } from "react-redux";
import Menu from "../components/common/Menu";
import "../styles/Recipe.scss";
import { useNavigate } from "react-router-dom";
import { useShowMenu } from "../components/common/MenuContext";
import Footer from "../components/common/Footer";

const Recipe = () => {
  const selectedRecipe = useSelector((state) => state.recipe.selectedRecipe);
  const navigate = useNavigate();
  const { showMenu } = useShowMenu();
  const calories = Math.floor(`${selectedRecipe.calories}`);

  const OpenOriginalRecipe = () => {
    window.open(`${selectedRecipe.url}`);
  };

  // console.log(selectedRecipe);
  return (
    <section className="recipe">
      <Menu />
      <div className="recipe_content">
        <h3>{selectedRecipe.label}</h3>
        <div className="recipe_data">
          <img className="recipeImage" src={selectedRecipe.image} alt="" />

          <p className="recipe_info">
            <p className="recipeCalories">Calories : {calories}kcal</p>
            <div className="ingredientLines">
              {selectedRecipe.ingredientLines.map((ingredient) => (
                <p>
                  {ingredient}
                  <br />
                </p>
              ))}
            </div>
            {/* <p className="ingredientLines">{selectedRecipe.ingredientLines}</p> */}
            <div className="recipeUrl">
              <button onClick={OpenOriginalRecipe}>
                Learn more about this recipe
              </button>
            </div>
          </p>
        </div>
      </div>
      {!showMenu && <Footer />}
    </section>
  );
};

export default Recipe;
