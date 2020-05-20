import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container">
      <h2 className="form__header">
        Choose a search type to begin your recipe hunt...
      </h2>
      <nav className="container__nav">
        <ul className="container__list">
          <li className="container__items">
            <Link to="/food" className="container__link">
              Search By Food Type
            </Link>
          </li>
          <li className="container__items">
            <Link to="/cuisine" className="container__link">
              Search By Cuisine
            </Link>
          </li>
          <li className="container__items">
            <Link to="/allergy" className="container__link">
              Search By Allergy
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
