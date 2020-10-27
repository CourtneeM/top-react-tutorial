import React, {Component} from 'react';
import '../styles/Experience.css';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <h2>Experience</h2>
        <div className="experience-container">
          <div className="company-name">
            <label>Company Name: </label>
            <input type="text" />
          </div>
          <div className="position-title">
            <label>Position: </label>
            <input type="text" />
          </div>
          <div className="current-employer">
            <label>Current Employer: </label>
            <input type="checkbox" />
          </div>
          <div className="main-job-tasks">
            <label>Main Tasks (max 5): </label>
            <input type="text" />
            <i className="far fa-plus-square"></i>
          </div>
          <div className="start-date">
            <label>Start Date: </label>
            <input type="text" />
          </div>
          <div className="end-date">
            <label>End Date: </label>
            <input type="text" />
          </div>
          <button className="submit-section-btn">Submit Section</button>
        </div>
      </div>
    );
  }
}

export default Experience;

// If current employer checkbox is checked, disable End Date input.