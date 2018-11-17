import React, { Component } from "react";

class Map extends Component {
  render() {
    return (
      <div className="main">
        <div className="container" />
        <div className="text">
          <section className="js-section" data-zoom-middle="2">
            <h2>
              <span className="title-up">Dana Chen</span>
              <span className="title-down">About me</span>
            </h2>
            <p className="text-intro">
              We caught glimpses of faces at most of the windows peering
              curiously at us and watching our progress through the town.
            </p>

            <figure>
              <img
                className="js-image"
                data-pos="0.25"
                src={require("../../../images/personal/map/journey/9.jpg")}
              />
              <figcaption>
                All things come to an end, and so did our journey when we
                reached the end of the main street in Reykjavik
              </figcaption>
            </figure>

            <p>
              We caught glimpses of faces at most of the windows peering
              curiously at us and watching our progress through the town.{" "}
            </p>
          </section>
          <section className="js-section" data-zoom-start="2">
            <h2>
              <span className="title-up">Reykjanesta</span>
              <span className="title-down">A Helping Hand</span>
            </h2>
            <p>
              We were six in all—a semi-scientific party. There was Miss J. A.
              Hastie, a woman who has travelled much in Europe, Asia, Africa,
              and America, and who is not unacquainted with our Colonies at the
              Antipodes, or with the islands of the South Seas.{" "}
            </p>
            <figure>
              <img
                className="js-image"
                data-pos="0.6"
                src={require("../../../images/personal/map/journey/5.jpg")}
              />
              <figcaption>
                I was the geographer, whose mission it was to make a map of a
                small portion of the country traversed.
              </figcaption>
            </figure>
            <p>
              Next day rain, fog, and mist prevailed, so there was much
              whist-playing and smoking below, and much blowing of whistle
              above.{" "}
            </p>
          </section>
          <section
            className="js-section"
            data-zoom-start="2.5"
            data-stay="true"
          >
            <h2>
              <span className="title-up">Krísuvíkurbjarg</span>
              <span className="title-down">New Adventures</span>
            </h2>
            <p>
              Ashore one is first struck with the Faroese themselves: they are a
              fine race, and retain their native politeness and independence of
              character;{" "}
            </p>
            <figure>
              <div className="js-gallery-content">
                <img
                  src={require("../../../images/personal/map/journey/6.jpg")}
                />
              </div>
              <figcaption>
                An unexpected turn in our journey led us to many impressive
                places.
              </figcaption>
            </figure>
            <p>
              We were to have made a start at eleven o'clock the next morning,
              but fate was against us. At the appointed hour the members of the
              party were ready and waiting, but guides, ponies, pack and riding
              saddles, tents, provisions, etc.
            </p>
          </section>
          <section className="js-section" data-zoom-start="1.5">
            <p>
              I strolled about, camera in hand, and found that many of the women
              and girls were quite anxious to be photographed;{" "}
            </p>
            <p>
              <blockquote>
                <em>
                  Broad, wholesome, charitable views of men and things cannot be
                  acquired by vegetating in one little corner of the earth all
                  of one’s lifetime.
                </em>
                <span> &mdash; Mark Twain</span>
              </blockquote>
            </p>
            <p>On one side of this wall there is a cod-liver oil factory</p>
            <figure>
              <img
                className="js-image"
                data-pos="0.6"
                src={require("../../../images/personal/map/journey/10.jpg")}
              />
              <figcaption>
                I was the geographer, whose mission it was to make a map of a
                small portion of the country traversed.
              </figcaption>
            </figure>
            <p>
              During the voyage I often wrote my notes somewhere about midnight,
              and this night, while thus employed in my cabin, my "stable
              companion" took it into his head that I was preventing him from
              the proper enjoyment of his slumbers, and growled out something to
              that effect; so, to avoid raising his wrath, I interrupted the
              course of the notes and turned in;
            </p>
          </section>
          <section className="js-section" data-zoom-start="1.5">
            <h2>
              <span className="title-up">Hveragerði</span>
              <span className="title-down">Sheer Faces of Rock</span>
            </h2>
            <p>
              On the west side, and near to the north end of the fjord, there
              are some very fine specimens of common basaltic land forms—two
              grand corries,{" "}
            </p>
            <figure>
              <img
                className="js-image"
                data-pos="0.6"
                src={require("../../../images/personal/map/journey/7.jpg")}
              />
              <figcaption>
                At once the music of the steam-whistle was resumed, and our ears
                were again tortured by its shrill blasts.
              </figcaption>
            </figure>
            <p>
              On emerging from the fjord and putting out to sea, we encountered
              a slight swell from the west, so the vessel rolled a bit; it was
              really not much, but being the first time during the voyage, it
              was much disliked by those who were not proof against mal de mer.
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
                src={require("../../../images/personal/map/journey/3.jpg")}
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
          />
        </div>
      </div>
    );
  }
}

export default Map;
