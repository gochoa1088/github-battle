import * as React from "react";
import PropTypes from "prop-types";

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="about">
        <h1 className="title">
          <span className="number">01. </span>

          <span style={{ paddingLeft: 30 + "px" }}>About Me</span>
        </h1>
        <div className="flex">
          <div className="container-invisible">
            <div className="about-container">
              {this.props.about.about.map((each) => (
                <p key={each}>{each}</p>
              ))}
            </div>
            <div className="tech-container">
              <ul>
                {this.props.about.techs.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="photo-container">
            <img src="https://i.ebayimg.com/images/g/6PEAAOSw42Fe~EGa/s-l300.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {};
