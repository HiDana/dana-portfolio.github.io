import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";

import Personal from "./screens/Personal/Personal";
import Portfolio from "./screens/Portfolio/Portfolio";
import Project from "./screens/Project/Project";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Personal} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/project/:prjName" component={Project} />
        </div>
      </Router>
    );
  }
}

export default App;
