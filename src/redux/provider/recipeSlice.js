// Apiから持ってきたデータをここにストックする
// それから他のファイルにシェアする役割
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: null,
  queryRecipes: null,

  // Recognize selected or not by client action
  selectedRecipe: null,
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setQueryRecipes: (state, action) => {
      state.queryRecipes = action.payload;
    },
    setSelectedRecipe: (state, action) => {
      console.log("from redux", action.payload);
      state.selectedRecipe = action.payload;
    },
  },
});

// export const { setRecipeSlice } = recipeSlice.actions;
export const { setSelectedRecipe, setQueryRecipes, setQuery } =
  recipeSlice.actions;
export default recipeSlice.reducer;
