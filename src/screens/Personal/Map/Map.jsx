import React, { Component } from "react";

class Map extends Component {
  render() {
    return (
      <div className="main">
        <div className="container" />
        <div className="text">
          <section className="js-section" data-zoom-middle="2">
            <h2>
              <span className="title-up">About me</span>
              <span className="title-down">Hi, I'm Dana</span>
            </h2>

            <figure>
              <img
                className="js-image"
                data-pos="0.25"
                src={require("../../../images/personal/map/journey/1.png")}
              />
            </figure>
            <p>
              Currently work in <br />
              Herbmagic(北京漢雲益生) as Senior Front-End Engineer
            </p>

            <p>
              Keep updated with UI/UX trends and intrigued by CSS animations and
              AR/VR.
            </p>

            {/* <p>
              Front End Engineer dedicated to developing user-friendly products and intrigued by UI/UX and user related effect like AR/VR and CSS animations. Also a passionate dessert maker and professional cat lover. :D
            </p> */}
          </section>

          <section className="js-section" data-zoom-start="2">
            <h2>
              <span className="title-up">Senior Front-End Enginner</span>
              <span className="title-down">Now</span>
            </h2>

            <p>
              Front-End : <br /> React Web / React Native / WeChat mini program
              / jQuery / SASS /
            </p>

            <p>
              Back-End : <br /> Node.js / RestFul API / Swagger / Docker /
            </p>
            <p>
              Design : <br />
              Sketch / Adobe AI PS XD /
            </p>
            <p>
              Other : <br /> Line ChatBot /
            </p>
          </section>

          <section
            className="js-section"
            data-zoom-start="2.5"
            data-stay="true"
          >
            <h2>
              <span className="title-up">Full Stack Enginner</span>
              <span className="title-down">Future</span>
            </h2>

            <p>
              在未來，想要多瞭解關於後端的架構與團隊開發模式，並持續研究 AR/VR
              的應用，並在於一個不同的環境，期許自己持續成長
            </p>
          </section>

          <section className="js-section" data-zoom-start="1.5">
            <h2>
              <span className="title-down">Connect Me</span>
            </h2>
            <p>
              If my profile interests you, please feel free to contact me via
              email. Thank you.
            </p>
            <a href="mailto:holicdana@gmail.com">Email</a>
            <br />
            <a href="https://www.linkedin.com/in/dana-i-ting-chen/">Linkin</a>
            <br />
            <a href="https://github.com/HiDana">Github</a>
            <br />
            <a href="http://blog.hidana.me">Blog</a>
            <br />
          </section>

          {/* <section className="js-section" data-zoom-start="1.5">
            <h2>
              <span className="title-up">Senior Front-End Enginner</span>
              <span className="title-down">Herbmagic</span>
            </h2>

            <figure>
              <img
                className="js-image"
                data-pos="0.6"
                src={require("../../../images/personal/map/journey/4.png")}
              />
              <figcaption>mini program</figcaption>
            </figure>
            <p>
              Product development using React & Docker
              <br />
              WeChat mini programs Developer
              <br />
              React web unit test
              <br />
              App development using React Native
              <br />
              UI designer
            </p>
          </section>
          <section
            className="js-section"
            data-zoom-start="1.5"
            data-zoom-middle="1"
            data-icon="img/plane.svg"
          >
            <h2>
              <span className="title-up">Gullfoss</span>
              <span className="title-down">Above the Clouds</span>
            </h2>
            <p>Gullfoss is one of the sights of Iceland.</p>
            <figure>
              <img
                src={require("../../../images/personal/map/journey/1.jpg")}
              />
              <figcaption>
                Farther on there were many evidences of ice-action: the rounded
                forms of boulders attracted our attention, as did numerous
                ice-scratchings on them; some of the outcropping lumps were
                beautifully rounded.
              </figcaption>
            </figure>
          </section>
          <section className="js-section" data-zoom-start="1.2">
            <h2>
              <span className="title-up">Eyjafjallajökull</span>
              <span className="title-down">The Final Destination</span>
            </h2>
            <p>
              Miss Hastie might have had an awkward experience at the spring
              where she elected to perform her ablutions, of whose periodical
              activity she was at the time unaware.
            </p>
            <figure>
              <img
                src={require("../../../images/personal/map/journey/1.jpg")}
              />
              <figcaption>
                I had come to this part of the country intending to make a quick
                survey of it as we traversed it from end to end.
              </figcaption>
            </figure>
            <p>
              The next day was devoted to exploring the surrounding
              neighbourhood, and the different members of the party were struck
              with different features.
            </p>
          </section>
          <section
            className="js-section"
            data-stay="true"
            data-zoom-start="1.2"
          >
            <p>
              The strip is about fourteen miles wide at its narrowest part (not
              eight as shown on the existing maps), and extends north and south
              about twenty-five miles.
            </p>
          </section>
          <section
            className="js-section"
            data-stay="true"
            data-zoom-start="0.8"
          /> */}
        </div>
      </div>
    );
  }
}

export default Map;
