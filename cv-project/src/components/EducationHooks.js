import React, {useState} from 'react';
import '../styles/Education.css';

function EducationHooks() {
  const [schoolName, setSchoolName] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [graduationDate, setGraduationDate] = useState("");
  const [edit, setEdit] = useState(true);

  const handleChange = (e, property) => {
    property(e.target.value);
  }

  const handleEditSubmit = () => {
    const hookItems = [schoolName, titleOfStudy, graduationDate];
    let invalid = false;

    hookItems.forEach((item) => {
      if (item === "") {
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
      <h2>Education</h2>
      <div className="education-container">
        <div className="school-name">
          <label>School Name: </label>
          {edit
            ? <input type="text" value={schoolName} onChange={(e) => handleChange(e, setSchoolName)} />
            : <p>{schoolName}</p>
          }
        </div>
        <div className="title-of-study">
          <label>Title of Study: </label>
          {edit
            ? <input type="text" value={titleOfStudy} onChange={(e) => handleChange(e, setTitleOfStudy)} />
            : <p>{titleOfStudy}</p>
          }
        </div>
        <div className="date-of-study">
          <label>Graduation Date: </label>
          {edit
            ? <input type="date" value={graduationDate} onChange={(e) => handleChange(e, setGraduationDate)} />
            : <p>{graduationDate}</p>
          }
        </div>
        <button className="submit-section-btn" onClick={ handleEditSubmit }>Submit Section</button>
      </div>
    </div>
  );
}

export default EducationHooks;