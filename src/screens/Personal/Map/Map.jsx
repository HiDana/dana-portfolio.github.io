import React, { Component } from "react";
import { Link } from "react-router-dom";
import blog from "../../../images/personal/icon/blog.svg";
import github from "../../../images/personal/icon/github.svg";
import linkedin from "../../../images/personal/icon/linkedin.svg";
import email from "../../../images/personal/icon/email.svg";
import logo from "../../../images/hi_logo.png";

class Map extends Component {
  render() {
    return (
      <div className="main">
        <div className="container" />
        <div className="text">
          <section className="js-section" data-zoom-middle="4">
            <h2>
              <span className="title-up">About me</span>
              <span className="title-down">Hi, I'm Dana</span>
            </h2>

            <figure>
              <img
                // className="js-image"
                data-pos="0"
                src={require("../../../images/personal/map/journey/1.png")}
              />
            </figure>

            <p>from Taiwam</p>

            {/* <p>
              Front End Engineer dedicated to developing user-friendly products and intrigued by UI/UX and user related effect like AR/VR and CSS animations. Also a passionate dessert maker and professional cat lover. :D
            </p> */}
          </section>

          <section className="js-section" data-zoom-start="3">
            <p>
              Worked in <br />
              GingerDesign as Freelancer (Front-End Engineer)
            </p>

            <p>
              Keep dedicated to developing user-friendly products and intrigued
              by UI/UX and user-related effects like CSS animations.
            </p>

            <h2>
              <span className="title-up">Senior Front-End Enginner</span>
              <span className="title-down">Now</span>
            </h2>

            <p>
              Front-End : <br /> Nextjs / React / TypeScript / styled-components
              / SEO
              <br />/ WeChat mini program / jQuery / SASS / D3.js /
            </p>

            <p>
              Design : <br />
              Sketch / Adobe AI PS XD /
            </p>
            <p>
              Other : <br /> Line ChatBot /
            </p>
          </section>

          <section className="js-section" data-zoom-start="2" data-stay="true">
            <h2>
              <span className="title-up">Full Stack Enginner</span>
              <span className="title-down">Future</span>
            </h2>

            <p>
              While keeping myself updated on the newest development of
              front-end techniques, further understanding of back-end structures
              is also an essential issue. Besides, I expect to work and keep
              growing in different countries and cultures in the future.
            </p>
            {/* <p>
              在未來，想要多瞭解關於後端的架構與團隊開發模式，並持續研究 AR/VR
              的應用，並在於一個不同的環境，期許自己持續成長
            </p> */}
          </section>

          <section className="js-section" data-zoom-start="2">
            <h2>
              <span className="title-down">Contact Me</span>
            </h2>
            <p>
              If my profile interests you, please feel free to contact me via
              email. Thank you.
            </p>
            <div className="connectMe_block">
              <a href="mailto:holicdana@gmail.com">
                <img src={email} alt="email" /> Email
              </a>
              <br />
              <a href="https://www.linkedin.com/in/dana-i-ting-chen/">
                <img src={linkedin} alt="linkedin" />
                Linkedin
              </a>
              <br />
              <a href="https://github.com/HiDana">
                <img src={github} alt="github" />
                Github
              </a>
              <br />
              <a href="http://blog.hidana.me">
                <img src={blog} alt="blog" />
                Blog
              </a>

              <Link to="/portfolio">
                <img src={logo} alt="blog" />
                <h4>Portfolio</h4>
              </Link>
            </div>
            <br />
          </section>
        </div>
      </div>
    );
  }
}

export default Map;
