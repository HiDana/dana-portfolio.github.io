import React, { Component } from "react";
import "../../style/Personal/Personal.css";

// import dana from "../../images/personal/dana_8bit.jpg";
import dana from "../../images/personal/dana_gif.gif";

class Personal extends Component {
  render() {
    return (
      <div id="personal">
        <div className="dana">
          <img src={dana} alt="dana" />
        </div>
      </div>
    );
  }
}

export default Personal;
