import axios from "axios";
let secret = process.env.REACT_APP_RECIPE_SECRET;

export const searchByCuisine = async (cuisineType) => {
  let query = `https://api.spoonacular.com/recipes/search?apiKey=${secret}&query=${cuisineType}&number=1`;

  let results = await axios.get(query);
  console.log(results);
};
