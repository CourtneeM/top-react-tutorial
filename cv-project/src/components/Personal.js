import React, {Component} from 'react';
import '../styles/Personal.css'

class Personal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: null,
    }
  }

  handleChange = (e, property) => {
    this.setState({
      [property]: e.target.value, 
    })
  }

  handleSubmit = () => {
    // use to display values without input field
  }

  render() {
    return (
      <div>
        <h2>Personal Information</h2>
        <div className="personal-container">
          <div className="first-name-container">
            <label>First Name: </label>
            <input type="text" onChange={(e) => this.handleChange(e, "firstName") }/>
          </div>
          <div className="last-name-container">
            <label>Last Name: </label>
            <input type="text" onChange={(e) => this.handleChange(e, "lastName") } />
          </div>
          <div className="email-container">
            <label>Email: </label>
            <input type="email" onChange={(e) => this.handleChange(e, "email") } />
          </div>
          <div className="phone-number-container">
            <label>Phone Number: </label>
            <input type="number" onChange={(e) => this.handleChange(e, "phoneNumber") } />
          </div>
        <button 
          className="submit-section-btn" 
          onClick={ this.handleSubmit }>
            Submit Section
        </button>
        </div>
      </div>
    );
  }
}

export default Personal;