// Apiから持ってきたデータをここにストックする
// それから他のファイルにシェアする役割
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: null,
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
    setSelectedRecipe: (state, action) => {
      state.selectedRecipe = action.payload;
    },
  },
});

export const { setRecipeSlice } = recipeSlice.actions;
export default recipeSlice.reducer;
