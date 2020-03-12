import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
      </div>
    </BrowserRouter>
  );
}

export default App;
