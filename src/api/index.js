// APIまとめ
export const getRecipes = async () => {
  try {
    const response = await fetch(
      `https://api.edamam.com/search?q="banana"&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
  } catch (err) {
    console.log(err);
  }
};
