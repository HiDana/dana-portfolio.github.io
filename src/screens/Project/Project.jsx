import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "../../style/Project/Project.css";

import prjsData from "../../data/projects.json";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prjData: null
    };
  }

  componentWillMount() {
    const prjName = this.props.match.params.prjName;

    this.setState({
      prjData: prjsData.find(data => data.route_name === prjName)
    });
  }

  render() {
    const { prjData } = this.state;
    if (!prjData) return <p>loading...</p>;

    return (
      <div id="project">
        <ReactFullpage
          render={({ state, fullpageApi }) => (
            <ReactFullpage.Wrapper>
              {prjData.section.map((data, i) => (
                <div className="page section" key={i}>
                  <div className="prj_info">
                    <div className="prj_name">
                      <h2>{prjData.prj_name}</h2>
                    </div>
                    <div className="prj_contents">
                      {data.info.map((info, si) => (
                        <div className="prj_content" key={si}>
                          <div className="content_title">
                            <p>{info.title}</p>
                          </div>
                          {info.content.map((content, tri) => (
                            <div className="content_detail" key={tri}>
                              <p>{content}</p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="prj_file">
                    <div className="prj_img">
                      {data.prj_imgs.map(
                        (img, fui) =>
                          img.shadow ? (
                            <img
                              src={require(`../../images/project/${img.name}`)}
                              alt="pj1"
                              key={fui}
                            />
                          ) : (
                            <img
                              src={require(`../../images/project/${img.name}`)}
                              alt="pj1"
                              key={fui}
                              className="special_img"
                            />
                          )
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

export default Project;
