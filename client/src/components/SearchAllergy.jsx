import React, { useState, Fragment } from "react";

import SearchResults from "./SearchResults";
import { searchByIntolerance } from "./SearchBy";

const SearchAllergy = () => {
  const [formData, setFormData] = useState({
    allergy: "",
  });
  const [data, setData] = useState({
    recipes: [],
  });

  const { recipes } = data;

  const { allergy } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    searchByIntolerance(allergy).then((recipes) => {
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
            name="allergy"
            value={allergy}
            className="form__input"
            id="food"
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

export default SearchAllergy;
