import { configureStore } from "@reduxjs/toolkit";
// ここに作ったSliceをインポート

export const store = configureStore({
  reducer: {
    // Reducerをキーワードにまとめる。
    // recipe:recipeReducer,
  },
});

// Reducerの中身をstoreをエキスポートすることでApp全体に共有できる
