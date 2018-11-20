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
              現任於 北京漢雲益生 Herbmagic
              <br />
              資深前端工程師
            </p>

            <p>
              致力於研究使用者體驗
              <br />
              並熱愛探討 CSS animation 及 AR/VR
            </p>

            {/* <p>
              Front End Engineer dedicated to developing user-friendly products and intrigued by UI/UX and user related effect like AR/VR and CSS animations. Also a passionate dessert maker and professional cat lover. :D
            </p> */}
          </section>

          <section className="js-section" data-zoom-start="2">
            <h2>
              <span className="title-up">Front-End Enginner</span>
              <span className="title-down">Cirrus Data Insights</span>
            </h2>

            <figure>
              <img
                className="js-image"
                data-pos="0.6"
                src={require("../../../images/personal/map/journey/2.png")}
              />
              <figcaption>Hai - International trade predictor</figcaption>
            </figure>

            <p>自學 React 框架，以及獨自完成 國際貿易預測 專案 - HAI</p>
            <p>HAI Product Development using React & Redux</p>
          </section>

          <section
            className="js-section"
            data-zoom-start="2.5"
            data-stay="true"
          >
            <h2>
              <span className="title-up">Front-End Enginner</span>
              <span className="title-down">Azion Corporation</span>
            </h2>

            <figure>
              <div className="js-gallery-content">
                <img
                  src={require("../../../images/personal/map/journey/3.png")}
                />
              </div>
              <figcaption>obor info support</figcaption>
            </figure>

            <p>不幸公司因為資金問題，跟隨老闆及其他夥伴移轉至 驊宏資通</p>
            <p>
              Product development using React & Docker
              <br />
              OBOR & SOLDATA Product Assistant
              <br />
              Lecturer of the “front-end in big data”
              <br />
              UI designer for the POC of OBOR
            </p>
          </section>

          <section className="js-section" data-zoom-start="1.5">
            <p>aaa</p>
            <p>
              <blockquote>
                <em>aaa</em>
                <span> &mdash; Mark Twain</span>
              </blockquote>
            </p>
            <p>aaa</p>
            <figure>
              <img
                className="js-image"
                data-pos="0.6"
                src={require("../../../images/personal/map/journey/1.png")}
              />
              <figcaption>aaa</figcaption>
            </figure>
            <p>aaa</p>
          </section>

          <section className="js-section" data-zoom-start="1.5">
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
              {/* <img
                src={require("../../../images/personal/map/journey/3.jpg")}
              /> */}
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
          />
        </div>
      </div>
    );
  }
}

export default Map;
