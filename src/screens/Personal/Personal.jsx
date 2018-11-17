import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

import dana from "../../images/personal/dana_gif.gif";
import Map from "./Map/Map";

class Personal extends Component {
  render() {
    return (
      <div id="personal">
        <div className="header_landing">
          <Header />
        </div>

        <div className="dana_web">
          <Map />
          {/* <div className="web_coverage" /> */}
        </div>

        <div className="dana_phone">
          <img src={dana} alt="dana" />
        </div>
      </div>
    );
  }
}

export default Personal;
