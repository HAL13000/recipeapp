import { React, useState, useEffect } from "react";

const RecipeApi = () => {
  const [query, setQuery] = useState("banana");
  const [searchRecipe, setSearchRecipe] = useState("");
  const [recipes, setRecipes] = useState([]);

  const getRecipe = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
      );
      const data = await response.json();
      console.log(data.hits);
    } catch (err) {
      console.log(err);
    }

    const getSearch = (e) => {
      e.preventDefault();
      setQuery(searchRecipe);
      setSearchRecipe("");
    };

    const handleSearchRecipe = (e) => {
      setSearchRecipe(e.target.value);
    };

    useEffect(() => {
      getRecipe();
    }, [query]);
  };

  return <div></div>;
};
export default RecipeApi;
