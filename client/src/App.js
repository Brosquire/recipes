import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import SearchCuisine from "./components/SearchCuisine";
import SearchFood from "./components/SearchFood";
import SearchAllergy from "./components/SearchAllergy";

import "./App.scss";

function App() {
  return (
    <Router>
      <Fragment>
        <Nav />
        <Switch>
          <Route exact path="/cuisine" component={SearchCuisine} />
          <Route exact path="/food" component={SearchFood} />
          <Route exact path="/allergy" component={SearchAllergy} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
