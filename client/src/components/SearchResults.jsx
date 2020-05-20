import React from "react";

const SearchResults = ({ recipes }) => {
  return recipes.length > 0 ? (
    recipes.map((result) => (
      <div key={result.id} className="results">
        <h2 className="results__title">{result.title}</h2>
        <p className="results__description">
          Ready In: {result.readyInMinutes}
        </p>
        <p className="results__description">Servings: {result.servings}</p>
        <a
          href={result.sourceUrl}
          target="_blank"
          className="results__description"
        >
          Click here to be directed to recipe page
        </a>
      </div>
    ))
  ) : (
    <div className="results">
      <h1 className="results__none">
        No Results Found...
        <br /> Please Try Again
      </h1>{" "}
    </div>
  );
};

export default SearchResults;
