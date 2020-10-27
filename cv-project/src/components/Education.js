import React, {Component} from 'react';
import '../styles/Education.css';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <h2>Education</h2>
        <div className="education-container">
          <div className="school-name">
            <label>School Name: </label>
            <input type="text" />
          </div>
          <div className="title-of-study">
            <label>Title of Study: </label>
            <input type="text" />
          </div>
          <div className="date-of-study">
            <label>Date of Study: </label>
            <input type="text" />
          </div>
          <button className="submit-section-btn">Submit Section</button>
        </div>
      </div>
    );
  }
}

export default Education;