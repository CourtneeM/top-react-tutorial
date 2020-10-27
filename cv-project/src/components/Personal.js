import React, {Component} from 'react';
import '../styles/Personal.css'

class Personal extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h2>Personal Information</h2>
        <div className="personal-container">
          <div className="first-name-container">
            <label>First Name: </label>
            <input type="text" value={this.state.firstName} />
          </div>
          <div className="last-name-container">
            <label>Last Name: </label>
            <input type="text" value={this.state.lastName} />
          </div>
          <div className="email-container">
            <label>Email: </label>
            <input type="email" value={this.state.email} />
          </div>
          <div className="phone-number-container">
            <label>Phone Number: </label>
            <input type="number" value={this.state.phoneNumber} />
          </div>
        <button className="submit-section-btn">Submit Section</button>
        </div>
      </div>
    );
  }
}

export default Personal;