import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Blog from "./Blog";
import Plan from "./Plan";
import Recipe from "./Recipe";


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/recipe">
          <Recipe />
        </Route>
        <Route path="/plan">
          <Plan />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;