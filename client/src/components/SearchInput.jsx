import React, { useState } from "react";

import { searchByCuisine } from "./SearchByCuisine";

const SearchInput = () => {
  const [formData, setFormData] = useState({
    cuisine: "",
  });

  const { cuisine } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form">
      <h2 className="form__header">
        Enter a Cuisine Type to begin your meal prep
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchByCuisine(cuisine);
        }}
        className="form__container"
      >
        <input
          type="text"
          placeholder="Enter A Cuisine"
          name="cuisine"
          value={cuisine}
          className="form__input"
          onChange={(e) => onChange(e)}
        />
        <input type="submit" className="form__submit" />
      </form>
    </div>
  );
};

export default SearchInput;
