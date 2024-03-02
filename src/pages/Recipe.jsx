import React from "react";
import Menu from "../components/common/Menu";

const Recipe = (recipe) => {
  return (
    <div className="recipe">
      <Menu />
      <div className="recipeData">
        <h1 className="title">{recipe.title}</h1>
        <ol className="ingredients">
          {recipe.ingredients.map((ingredients) => (
            <li>{ingredients.text}</li>
          ))}
        </ol>
        <p>{recipe.calories}cal</p>
        <img src={recipe.img} alt="recipeImage" />
      </div>
    </div>
  );
};

export default Recipe;
