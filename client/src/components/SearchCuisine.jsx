import React, { useState, Fragment } from "react";

import SearchResults from "./SearchResults";
import { searchByCuisine } from "./SearchBy";

const SearchCuisine = () => {
  const [formData, setFormData] = useState({
    cuisine: "",
  });

  const [data, setData] = useState({
    recipes: [],
  });

  const { recipes } = data;

  const { cuisine } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    searchByCuisine(cuisine).then((recipes) => {
      setData({ recipes });
    });
  };

  return (
    <Fragment>
      <div className="form">
        <form onSubmit={submit} className="form__container">
          <input
            type="text"
            placeholder="Enter A Cuisine To Search"
            name="cuisine"
            value={cuisine}
            className="form__input"
            onChange={(e) => onChange(e)}
          />
          <input type="submit" id="submit" className="form__submit" />
        </form>
      </div>
      <div className="container-results">
        <SearchResults recipes={recipes} />
      </div>
    </Fragment>
  );
};

export default SearchCuisine;
