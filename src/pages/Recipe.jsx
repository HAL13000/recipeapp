import React, { useEffect, useState } from "react";
import Menu from "../components/common/Menu";
import { useDispatch, useSelector } from "react-redux";
import { setRecipeSlice } from "../redux/provider/recipeSlice";
import recipeApi from "../api/recipeApi";
import { convertLength } from "@mui/material/styles/cssUtils";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const query = useParams();
  const queryData = useSelector((state) => state.recipe.query);
  const calories = useSelector((state) => state.recipe.calories);
  const image = useSelector((state) => state.recipe.image);
  const ingredients = useSelector((state) => state.recipe.ingredients);
  const ingredientLines = useSelector((state) => state.recipe.query);
  const label = useSelector((state) => state.recipe.label);
  const url = useSelector((state) => state.recipe.url);
  const selectedRecipe = useSelector((state) => state.recipe.selectedRecipe);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const response = await recipeApi.get(query);
        console.log(response);
      } catch (err) {
        console.log("Error visiting Recipe ", err);
      }
    };
  });

  return (
    <div className="recipe">
      <Menu />
      <p>{label}</p>
      {/* <div className="recipeData">
        <h1 className="title">{recipe.title}</h1>
        <ol className="ingredients">
          {recipe.ingredients.map((ingredients) => (
            <li>{ingredients.text}</li>
          ))}
        </ol>
        <p>{recipe.calories}cal</p>
        <img src={recipe.img} alt="recipeImage" />
      </div> */}
    </div>
  );
};

export default Recipe;
