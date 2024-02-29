import React from "react";
import Menu from "../components/common/Menu";

const Recipe = (props) => {
  return (
    <div className="recipe">
      <Menu />
      <div className="recipeData">
        <h1 className="title">{props.title}</h1>
        <ol className="ingredients">
          {props.ingredients.map((ingredients) => (
            <li>{ingredients.text}</li>
          ))}
        </ol>
        <p>{props.calories}cal</p>
        <img src={props.img} alt="recipeImage" />
      </div>
    </div>
  );
};

export default Recipe;
