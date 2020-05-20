import axios from "axios";

export const searchByCuisine = async (cuisineType) => {
  let query = `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_RECIPE_SECRET}&cuisine=${cuisineType}&number=5`;
  let results = await axios.get(query);
  return results.data.results;
};

export const searchByFood = async (foodType) => {
  let query = `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_RECIPE_SECRET}&query=${foodType}&number=5`;

  let results = await axios.get(query);
  return results.data.results;
};

export const searchByIntolerance = async (intolerance) => {
  let query = `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_RECIPE_SECRET}&intolerances=${intolerance}&number=5`;
  let results = await axios.get(query);
  return results.data.results;
};

//REsults return
//image,
//readyInMinutes
//servings
//sourceUrl
//title
