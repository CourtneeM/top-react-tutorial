import React, {Component} from 'react';
import '../styles/Experience.css';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      positionTitle: "",
      currentEmployer: false,
      mainTasks: [],
      startDate: "",
      endDate: "",
      edit: true,
    }
  }

  handleChange = (e, property) => {
    this.setState({
      [property]: e.target.value,
    });
  }

  handleEditSubmit = () => {
    this.setState({
      edit: !this.state.edit
    });
  }


  render() {
    return (
      <div>
        <h2>Experience</h2>
        <div className="experience-container">
          <div className="company-name">
            <label>Company Name: </label>
            {this.state.edit
              ? <input type="text" value={this.state.companyName} onChange={(e) => this.handleChange(e, "companyName")} />
              : <p>{this.state.companyName}</p>
            }
          </div>
          <div className="position-title">
            <label>Position: </label>
            {this.state.edit
              ? <input type="text" value={this.state.positionTitle} onChange={(e) => this.handleChange(e, "positionTitle")} />
              : <p>{this.state.positionTitle}</p>
            }
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
            {this.state.edit
             ? <input type="date" value={this.state.startDate} onChange={(e) => this.handleChange(e, "startDate")} />
             : <p>{this.state.startDate}</p>
            }
          </div>
          <div className="end-date">
            <label>End Date: </label>
            {this.state.edit
             ? <input type="date" value={this.state.endDate} onChange={(e) => this.handleChange(e, "endDate")} />
             : <p>{this.state.endDate}</p>
            }
          </div>
          <button className="submit-section-btn" onClick={this.handleEditSubmit}>Submit Section</button>
        </div>
      </div>
    );
  }
}

export default Experience;

// If current employer checkbox is checked, disable End Date input.