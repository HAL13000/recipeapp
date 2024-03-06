import React, { useEffect, useState } from "react";
import Menu from "../components/common/Menu";
import "../styles/Home.scss";
import SearchIcon from "@mui/icons-material/Search";
import logo_black from "../assets/logo/flavory-high-resolution-logo-black-transparent.png";
import RecipeBox from "../components/common/RecipeBox";
import { useNavigate } from "react-router-dom";
import recipeApi from "../api/recipeApi";
import { useDispatch, useSelector } from "react-redux";
import {
  setRecipeSlice,
  setSelectedRecipe,
} from "../redux/provider/recipeSlice";

const Home = () => {
  const [searchRecipe, setSearchRecipe] = useState("");
  const [recipes, setRecipes] = useState([]);
  // const [query, setQuery] = useState("banana");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipe.value);
  // const [selectedRecipe, setSelectedRecipe] = useState(false);

  const getSearch = async () => {
    try {
      const data = await recipeApi.getRecipeFromQuery(searchRecipe);
      console.log(data);
      setRecipes(data.hits);
      dispatch(setRecipeSlice(data.hits));

      // dispatch-> navigate
      // give all the data of recipe to redux
      // and navigate to the one clicked(recognize by onClick)
    } catch (err) {
      console.log("Error Searching Recipe ", err);
    }
  };

  useEffect(() => {
    getSearch();
  }, [dispatch, searchRecipe]);

  const handleSearchRecipe = (e) => {
    setSearchRecipe(e.target.value);
  };
  const navigateToThisRecipe = (recipeKey) => {
    dispatch(setSelectedRecipe(true));
    console.log(recipeKey);
    navigate(`/recipe/${recipeKey}`);
  };

  return (
    <div className="home">
      <Menu />

      <div className="logo">
        <img src={logo_black} alt="Logo" />
      </div>

      <div className="search">
        <form>
          <input
            type="text"
            placeholder="I want to cook..."
            value={searchRecipe}
            onChange={handleSearchRecipe}
          />
          <button type="button" onClick={getSearch}>
            <SearchIcon />
          </button>
        </form>
      </div>

      {recipes &&
        recipes.map((recipe) => (
          <div
            className="recipes"
            key={recipe.recipe.label}
            onClick={() => navigateToThisRecipe(recipe.recipe.label)}
          >
            <RecipeBox
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          </div>
        ))}
    </div>
  );
};

export default Home;

// const getSearch = () => {
//   // ☆
//   getRecipe(searchRecipe)
//   recipeApi
//     .getRecipeFromQuery(searchRecipe)
//     .then((data) => {
//       console.log(data);
//       // update recipes with new data .. data.hits = recipes(useState)
//       setRecipes(data.hits);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

// useEffect(() => {
//   console.log(searchRecipe);
// }, [searchRecipe]);

// const navigateToRecipe = () => {
//   navigate("/recipe");
//   // recipe のページにいく時必ずそのIDと会ったページにいかなきゃいけない
// };
