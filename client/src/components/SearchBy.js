import axios from "axios";
let secret = process.env.RECIPE_SECRET;

export const searchByCuisine = async (cuisineType) => {
  let query = `https://api.spoonacular.com/recipes/search?apiKey=${secret}&cuisine=${cuisineType}&number=5`;
  let results = await axios.get(query);
  return results.data.results;
};

export const searchByFood = async (foodType) => {
  let query = `https://api.spoonacular.com/recipes/search?apiKey=${secret}&query=${foodType}&number=5`;

  let results = await axios.get(query);
  return results.data.results;
};

export const searchByIntolerance = async (intolerance) => {
  let query = `https://api.spoonacular.com/recipes/search?apiKey=${secret}&intolerances=${intolerance}&number=5`;
  let results = await axios.get(query);
  return results.data.results;
};

//REsults return
//image,
//readyInMinutes
//servings
//sourceUrl
//title
