import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../style/Portfolio/Portfolio.css";

import prjsData from "../../data/projects.json";
// import prj1 from "../../images/portfolio/landingPage/prj1.png";

class Portfolio extends Component {
  render() {
    return (
      <div id="portfolio">
        <div className="title_block">
          <div className="title">
            <h2>Portfolio</h2>
          </div>
          <div className="content">
            <p>前端工程師 / 業餘甜點師 / 職業貓奴</p>
          </div>
        </div>
        <div className="projects">
          {prjsData.map((prj, i) => (
            <Link to={`/project/${prj.route_name}`} key={i}>
              <div className="project">
                <div className="prj_img">
                  <img
                    src={require(`../../images/portfolio/landingPage/prj${i +
                      1}.png`)}
                    alt="prj1"
                  />
                </div>
                <div className="prj_info">
                  <div className="prj_tech">
                    <p>{prj.tech}</p>
                  </div>
                  <div className="prf_name">
                    <p>{prj.prj_name}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
