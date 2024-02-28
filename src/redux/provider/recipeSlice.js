// Apiから持ってきたデータをここにストックする
// それから他のファイルにシェアする役割
import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setMemo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
