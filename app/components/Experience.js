import * as React from "react";
import PropTypes from "prop-types";

export default class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };

    this.updateJob = this.updateJob.bind(this);
  }

  updateJob(index) {
    this.setState({
      index,
    });
  }

  render() {
    const { jobs } = this.props;
    const { index } = this.state;
    console.log(jobs);
    return (
      <div className="experience">
        <h1 className="title">
          <span className="number">02. </span>

          <span style={{paddingLeft: 30+"px"}}>Where I've Worked</span>
        </h1>
        <div className="container-invisible">
          <div className="container-jobs">
            <ul className="jobs-list">
              {jobs.map((job, index) => {
                return (
                  <li className="job-item" key={job.name}>
                    {index === this.state.index ? (
                      <button
                        className="job-btn-highlight"
                        onClick={() => this.updateJob(index)}
                      >
                        {job.name}
                      </button>
                    ) : (
                      <button
                        className="job-btn"
                        onClick={() => this.updateJob(index)}
                      >
                        {job.name}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="container-job-description">
            <h2 className="job-name">
              <span>{jobs[index].title}</span>
              <span className="company"> @ {jobs[index].name}</span>
            </h2>
            <h3 className="job-date">{jobs[index].duration}</h3>
            <div className="job-description">
              <ul className="job-description-list">
                {jobs[index].descriptions.map((description) => {
                  return (
                    <li className="job-description-list-item" key={description}>
                      {description}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Experience.propTypes = {
  jobs: PropTypes.array.isRequired,
};
