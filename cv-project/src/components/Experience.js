import React, {Component} from 'react';
import '../styles/Experience.css';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      positionTitle: "",
      currentEmployer: false,
      currentTask: "",
      mainTasks: [],
      startDate: "",
      endDate: "",
      edit: true,
    }
  }

  handleChange = (e, property) => {
    property === "currentEmployer"
      ? this.setState({ 
          currentEmployer: !this.state.currentEmployer,
          endDate: null,
        })
      : this.setState({ 
          [property]: e.target.value,
        });
  }

  handleAddTask = () => {
    if (this.state.currentTask === "") {
      return;
    }

    if (this.state.mainTasks === 5) {
      return;
    }

    this.setState((currentState) => {
      return {
        mainTasks: currentState.mainTasks.concat(this.state.currentTask),
        currentTask: "",
      }
    });
  }

  handleDeleteTask = (index) => {
    this.setState({
        mainTasks: this.state.mainTasks.filter((task) => this.state.mainTasks.indexOf(task) !== index),
    });
  }

  handleEditSubmit = () => {
    if (this.state.companyName === "" && this.state.positionTitle === "" && this.state.startDate === "") {
      return;
    }

    if (this.state.currentTask !== "") {
      return;
    }

    if (this.state.mainTasks.length === 0) {
      return;
    }

    if (!this.state.currentEmployer && this.state.endDate === null) {
      return;
    }

    if (this.state.endDate < this.state.startDate) {
      return;
    }

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
            {this.state.edit
              ? <input type="checkbox" checked={this.state.currentEmployer} onChange={(e) => this.handleChange(e, "currentEmployer")} />
              : <input type="checkbox" checked={this.state.currentEmployer} disabled />
            }
          </div>
          <div className="main-job-tasks">
            <label>Main Tasks (max 5): </label>
            {this.state.edit
              ? <>
                  {this.state.mainTasks.length === 5     
                    ? <> 
                        <input type="text" value={this.state.currentTask} disabled />
                        <i className="far fa-plus-square" disabled ></i>
                      </>
                    : <>
                        <input type="text" value={this.state.currentTask} onChange={(e) => this.handleChange(e, "currentTask")} />
                        <i className="far fa-plus-square" onClick={this.handleAddTask} ></i>
                      </>
                  }
                  <div className="display-tasks">{this.state.mainTasks.map((task, index) => {
                          return (
                            <div>
                              <p>{task}</p>
                              <i className="fas fa-trash-alt" onClick={() => this.handleDeleteTask(index)}></i>
                            </div>
                          )
                        }
                        )}
                  </div>
                </>
              : <>
                  <input type="text" value={this.state.currentTask} disabled />
                  <i className="far fa-plus-square" disabled ></i>
                  <div className="display-tasks">{this.state.mainTasks.map((task, index) => {
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
            {this.state.edit
             ? <input type="date" value={this.state.startDate} onChange={(e) => this.handleChange(e, "startDate")} />
             : <p>{this.state.startDate}</p>
            }
          </div>
          <div className="end-date">
            <label>End Date: </label>
            {this.state.edit
             ? this.state.currentEmployer 
               ?  <input type="date" disabled />
               :  <input type="date" value={this.state.endDate} onChange={(e) => this.handleChange(e, "endDate")} />
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