import React from "react";
import Router, { Route } from "react-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/">
          <Search />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/saved">
          <Saved />
        </Route>
      </Router>
    </div>
  );
}

export default App;
