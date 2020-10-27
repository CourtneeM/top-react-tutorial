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
      edit: true,
    }
  }

  handleChange = (e, property) => {
    this.setState({
      [property]: e.target.value, 
    })
  }

  handleEditSubmit = () => {
    this.setState({
      edit: !this.state.edit,
    });
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h2>Personal Information</h2>
        <div className="personal-container">
          <div className="first-name-container">
            <label>First Name: </label>
            {this.state.edit 
              ? <input type="text" onChange={(e) => this.handleChange(e, "firstName")}/> 
              : <p>{this.state.firstName}</p> }
          </div>
          <div className="last-name-container">
            <label>Last Name: </label>
            {this.state.edit
              ? <input type="text" onChange={(e) => this.handleChange(e, "lastName")} /> 
              : <p>{this.state.lastName}</p>}
          </div>
          <div className="email-container">
            <label>Email: </label>
            {this.state.edit 
              ? <input type="email" onChange={(e) => this.handleChange(e, "email")} /> 
              : <p>{this.state.email}</p>
            }
          </div>
          <div className="phone-number-container">
            <label>Phone Number: </label>
            {this.state.edit
              ? <input type="number" onChange={(e) => this.handleChange(e, "phoneNumber")} />
              : <p>{this.state.phoneNumber}</p>
            }
          </div>
        {this.state.edit 
          ? <button className="submit-section-btn" onClick={ this.handleEditSubmit }>Submit Section</button>
          : <button className="submit-section-btn" onClick={ this.handleEditSubmit }>Edit Section</button>
        }
        </div>
      </div>
    );
  }
}

export default Personal;