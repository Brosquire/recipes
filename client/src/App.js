import React, { Fragment } from "react";

import Nav from "./components/Nav";
import SearchInput from "./components/SearchInput";
import SearchResults from "./components/SearchResults";

import "./App.scss";

function App() {
  return (
    <Fragment>
      <Nav />
      <SearchInput />
      <SearchResults />
    </Fragment>
  );
}

export default App;
