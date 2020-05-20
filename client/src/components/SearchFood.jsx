import React, { useState, Fragment } from "react";

import SearchResults from "./SearchResults";
import { searchByFood } from "./SearchBy";

const SearchFood = (results) => {
  const [formData, setFormData] = useState({
    food: "",
  });
  const [data, setData] = useState({
    recipes: [],
  });

  const { recipes } = data;

  const { food } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    searchByFood(food).then((recipes) => {
      setData({ recipes });
    });
  };

  return (
    <Fragment>
      <div className="form">
        <form onSubmit={submit} className="form__container">
          <input
            type="text"
            placeholder="Enter A Food Item To Search"
            name="food"
            value={food}
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

export default SearchFood;
