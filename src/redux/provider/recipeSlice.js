// Apiから持ってきたデータをここにストックする
// それから他のファイルにシェアする役割
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: null,
  calories: null,
  image: null,
  ingredients: null,
  ingredientLines: null,
  label: null,
  url: null,

  // Recognize selected or not by client action
  selectedRecipe: Boolean,
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setRecipeSlice: (state, action) => {
      state.query = action.payload;
    },
    setSelectedRecipe: (state, action) => {
      state.selectedRecipe = action.payload;
    },
  },
});

export const { setRecipeSlice, setSelectedRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
