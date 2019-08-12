import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";

import Personal from "./screens/Personal/Personal";
import Portfolio from "./screens/Portfolio/Portfolio";
import Project from "./screens/Project/Project";

class App extends Component {
  render() {
    console.log("process", process);

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Header />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={Personal}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/portfolio`}
            component={Portfolio}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/project/:prjName`}
            component={Project}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
