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
          <Route exact path="/" component={Personal} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/project/:prjName" component={Project} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
