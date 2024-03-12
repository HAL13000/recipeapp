import React from "react";
import { useSelector } from "react-redux";
import Menu from "../components/common/Menu";

const Recipe = () => {
  const selectedRecipe = useSelector((state) => state.recipe.selectedRecipe);
  // console.log(selectedRecipe);
  return (
    <section>
      <Menu />
      <p>{selectedRecipe.label}</p>
      <img src={selectedRecipe.image} alt="" />
      <p>{selectedRecipe.ingredientLines}</p>
      <p>{selectedRecipe.url}</p>
      <p>{selectedRecipe.calories}</p>
    </section>
  );
};

export default Recipe;

// import React, { useEffect, useState } from "react";
// import Menu from "../components/common/Menu";
// import { useDispatch, useSelector } from "react-redux";
// import { setRecipeSlice } from "../redux/provider/recipeSlice";
// import recipeApi from "../api/recipeApi";
// import { useParams } from "react-router-dom";

// const Recipe = () => {
//   const query = useParams();
//   const selectedRecipe = useSelector((state) => state.recipe.selectedRecipe);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchRecipeData = async () => {
//       try {
//         console.log(selectedRecipe);
//         const response = await recipeApi.get(query);
//       } catch (err) {
//         console.log("Error visiting Recipe ", err);
//       }
//     }};
//     return (
//       <div>
//         <Menu />
//         <h1>{selectedRecipe.label}</h1>
//       </div>
//     );
//   };

// export default Recipe;

//  {/* {/* <div className="recipeData">
//       <h1 className="title">{recipe.title}</h1>
//       <ol className="ingredients">
//         {recipe.ingredients.map((ingredients) => (
//           <li>{ingredients.text}</li>
//         ))}
//       </ol>
//       <p>{recipe.calories}cal</p>
//       <img src={recipe.img} alt="recipeImage" /> */}
