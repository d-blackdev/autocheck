import React from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./page/HomePage/Home";
import Detail from "./page/DetailPage/Detail";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chicago/:id" component={Detail} />
      </Switch>
    </>
  );
}

export default App;
