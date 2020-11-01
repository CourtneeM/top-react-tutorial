import React, {useState} from 'react';
import '../styles/Personal.css'

const PersonalHooks = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [edit, setEdit] = useState(true);


  const handleChange = (e, property) => {
    property(e.target.value);
  }

  const handleEditSubmit = () => {
    const hookItems = [firstName, lastName, email, phoneNumber]
    let invalid = false;

    hookItems.forEach((item) =>  {
      if (item === "" || item === null) {
        invalid = true;
      }
    });

    if (invalid) {
      return;
    }

    setEdit(!edit);
  }

  return (
    <div>
      <h2>Personal Information</h2>
      <div className="personal-container">
        <div className="first-name-container">
          <label>First Name: </label>
          {edit 
            ? <input type="text" value={firstName} onChange={(e) => handleChange(e, setFirstName)}/> 
            : <p>{firstName}</p> }
        </div>
        <div className="last-name-container">
          <label>Last Name: </label>
          {edit
            ? <input type="text" value={lastName} onChange={(e) => handleChange(e, setLastName)} /> 
            : <p>{lastName}</p>}
        </div>
        <div className="email-container">
          <label>Email: </label>
          {edit 
            ? <input type="email" value={email} onChange={(e) => handleChange(e, setEmail)} /> 
            : <p>{email}</p>
          }
        </div>
        <div className="phone-number-container">
          <label>Phone Number: </label>
          {edit
            ? <input type="number" value={phoneNumber} onChange={(e) => handleChange(e, setPhoneNumber)} />
            : <p>{phoneNumber}</p>
          }
        </div>
      {edit 
        ? <button className="submit-section-btn" onClick={ handleEditSubmit }>Submit Section</button>
        : <button className="submit-section-btn" onClick={ handleEditSubmit }>Edit Section</button>
      }
      </div>
    </div>
  );
}

export default PersonalHooks;