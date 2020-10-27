import React, {Component} from 'react';
import '../styles/Education.css';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: "",
      titleOfStudy: "",
      graduationDate: "",
      edit: true,
    }
  }

  handleChange = (e, property) => {
    this.setState({
      [property]: e.target.value,
    });
  }

  handleEditSubmit = () => {
    for (let prop in this.state) {
      if (this.state[prop] === "") {
        return;
      }
    }

    this.setState({
      edit: !this.state.edit,
    })
  }

  render() {
    return (
      <div>
        <h2>Education</h2>
        <div className="education-container">
          <div className="school-name">
            <label>School Name: </label>
            {this.state.edit
              ? <input type="text" value={this.state.schoolName} onChange={(e) => this.handleChange(e, "schoolName")} />
              : <p>{this.state.schoolName}</p>
            }
          </div>
          <div className="title-of-study">
            <label>Title of Study: </label>
            {this.state.edit
              ? <input type="text" value={this.state.titleOfStudy} onChange={(e) => this.handleChange(e, "titleOfStudy")} />
              : <p>{this.state.titleOfStudy}</p>
            }
          </div>
          <div className="date-of-study">
            <label>Graduation Date: </label>
            {this.state.edit
             ? <input type="date" value={this.state.graduationDate} onChange={(e) => this.handleChange(e, "graduationDate")} />
             : <p>{this.state.graduationDate}</p>
            }
          </div>
          <button className="submit-section-btn" onClick={ this.handleEditSubmit }>Submit Section</button>
        </div>
      </div>
    );
  }
}

export default Education;