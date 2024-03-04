import axiosClient from "./axiosClient";

const recipeApi = {
  getRecipeFromQuery: (query) =>
    axiosClient.get(
      `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
    ),
};

export default recipeApi;

//   export const getRecipe = async (query) => {
//     const response = await fetch(
//       `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
//     );
//     //   Filter data
//     const data = response.json();
//     if (response.status === 200) {
//       return data;
//     } else {
//       console.error("error fetch in ", response.statusText);
//       return response;
//     }
//   };
