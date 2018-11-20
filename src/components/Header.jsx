import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../images/hi_logo.png";
import github from "../images/header/github.svg";
import mail from "../images/header/mail.svg";

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="hiDana" />
            <h1>DANA</h1>
          </a>
        </div>

        <div className="logo logo_phone">
          <Link to="/">
            <img src={logo} alt="hiDana" />
            <h1>DANA</h1>
          </Link>
        </div>

        <div className="menu">
          <div className="portfoilo_link">
            <Link to="/portfolio">
              <h4>Portfolio</h4>
            </Link>
          </div>

          <div className="menu_icon github">
            <a href="https://github.com/HiDana">
              <img src={github} alt="dana's github" />
            </a>
          </div>

          <div className="menu_icon mail">
            <a href="mailto:holicdana@gmail.com">
              <img src={mail} alt="dana's mail" />
            </a>
          </div>

          {/* <div className="i18n">
            <p>zh</p>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Header;
