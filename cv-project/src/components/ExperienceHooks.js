import React, {useState} from 'react';
import '../styles/Experience.css';

function ExperienceHooks() {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [currentEmployer, setCurrentEmployer] = useState(false);
  const [currentTask, setCurrentTask] = useState("");
  const [mainTasks, setMainTasks] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [edit, setEdit] = useState(true);

  const handleChange = (e, property) => {
    if (property === setCurrentEmployer) {
      setCurrentEmployer(!currentEmployer)
      setEndDate(null)
    } else {
      property(e.target.value)  
    }
  }

  const handleAddTask = () => {
    if (currentTask === "") {
      return;
    }

    if (mainTasks === 5) {
      return;
    }


    setMainTasks(mainTasks.concat(currentTask));
    setCurrentTask("");

  }

  const handleDeleteTask = (index) => {
    setMainTasks(mainTasks.filter((task) => mainTasks.indexOf(task) !== index))
  }

  const handleEditSubmit = () => {
    if (companyName === "" && positionTitle === "" && startDate === "") {
      return;
    }

    if (currentTask !== "") {
      return;
    }

    if (mainTasks.length === 0) {
      return;
    }

    if (!currentEmployer && endDate === null) {
      return;
    }

    if (endDate < startDate) {
      return;
    }

    setEdit(!edit);
  }

  return (
    <div>
      <h2>Experience</h2>
      <div className="experience-container">
        <div className="company-name">
          <label>Company Name: </label>
          {edit
            ? <input type="text" value={companyName} onChange={(e) => handleChange(e, setCompanyName)} />
            : <p>{companyName}</p>
          }
        </div>
        <div className="position-title">
          <label>Position: </label>
          {edit
            ? <input type="text" value={positionTitle} onChange={(e) => handleChange(e, setPositionTitle)} />
            : <p>{positionTitle}</p>
          }
        </div>
        <div className="current-employer">
          <label>Current Employer: </label>  
          {edit
            ? <input type="checkbox" checked={currentEmployer} onChange={(e) => handleChange(e, setCurrentEmployer)} />
            : <input type="checkbox" checked={currentEmployer} disabled />
          }
        </div>
        <div className="main-job-tasks">
          <label>Main Tasks (max 5): </label>
          {edit
            ? <>
                {mainTasks.length === 5     
                  ? <> 
                      <input type="text" value={currentTask} disabled />
                      <i className="far fa-plus-square" disabled ></i>
                    </>
                  : <>
                      <input type="text" value={currentTask} onChange={(e) => handleChange(e, setCurrentTask)} />
                      <i className="far fa-plus-square" onClick={handleAddTask} ></i>
                    </>
                }
                <div className="display-tasks">{mainTasks.map((task, index) => {
                        return (
                          <div>
                            <p>{task}</p>
                            <i className="fas fa-trash-alt" onClick={() => handleDeleteTask(index)}></i>
                          </div>
                        )
                      }
                      )}
                </div>
              </>
            : <>
                <input type="text" value={currentTask} disabled />
                <i className="far fa-plus-square" disabled ></i>
                <div className="display-tasks">{mainTasks.map((task, index) => {
                        return (
                          <div>
                            <p>{task}</p>
                          </div>
                        )
                      }
                      )}
                </div>
              </>
          }
        </div>
        <div className="start-date">
          <label>Start Date: </label>
          {edit
            ? <input type="date" value={startDate} onChange={(e) => handleChange(e, setStartDate)} />
            : <p>{startDate}</p>
          }
        </div>
        <div className="end-date">
          <label>End Date: </label>
          {edit
            ? currentEmployer 
              ?  <input type="date" disabled />
              :  <input type="date" value={endDate} onChange={(e) => handleChange(e, setEndDate)} />
            : <p>{endDate}</p>
          }
        </div>
        <button className="submit-section-btn" onClick={handleEditSubmit}>Submit Section</button>
      </div>
    </div>
  );
}

export default ExperienceHooks;