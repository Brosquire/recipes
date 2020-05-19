import React from "react";

const Nav = () => {
  return (
    <div className="container">
      <nav className="container__nav">
        <ul className="container__list">
          <li className="container__items">Search By Ingredients</li>
          <li className="container__items">Search By Cuisine</li>
          <li className="container__items">Search By Allergies</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
