import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./provider/recipeSlice";
// ここに作ったSliceをインポート

export const store = configureStore({
  reducer: {
    // Reducerをキーワードにまとめる。
    recipe: recipeReducer,
  },
});

// Reducerの中身をstoreをエキスポートすることでApp全体に共有できる
