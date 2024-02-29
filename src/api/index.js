import { useState } from "react";

// APIまとめ
// const [query, setQuery] = useState("banana");

export const getRecipes = async (query) => {
  try {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
  } catch (err) {
    console.log(err);
  }
};
