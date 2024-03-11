import React from "react";
import "../../styles/RecipeBox.scss";
// import logoOrange from "../../assets/logo/logo-color.png";
import { useNavigate } from "react-router-dom";
import { setSelectedRecipe } from "../../redux/provider/recipeSlice";
import { useDispatch } from "react-redux";

// dispatch function by using setSelectedRecipe
const RecipeBox = ({ key, title, ingredients, image }) => {
  const navigate = useNavigate();

  return (
    <div className="recipeBox">
      <div className="recipeBox_container" key={key}>
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
    </div>
  );
};

export default RecipeBox;
