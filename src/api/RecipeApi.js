export const getRecipe = async (query) => {
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
  );
  //   Filter data
  const data = response.json();
  if (response.status === 200) {
    return data;
  } else {
    console.error("error fetch in ", response.statusText);
    return response;
  }
};

// Import axious to make API lists
// const memoApi = {
//     getRecipeFromQuery: () => axiosClient.get(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`)
//     // ここのParamsは状態を更新した時TitleなのかDescriptionなのか伝えるため。第二引数に更新したい情報を渡す。
//   };
