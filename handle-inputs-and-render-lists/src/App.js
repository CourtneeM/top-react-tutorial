import './App.css';
import React, {Component} from 'react';
import Overview from './components/Overview.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      tasks: [],
    }
  }

  handleInput = (e) => {
    this.setState({
        input: e.target.value,
    });
  }

  handleClick = () => {
    if (this.state.input === "") {
      return;
    }

    this.setState((currentState) => { 
      return {
        tasks: currentState.tasks.concat(currentState.input)
      }
    });
    
    this.setState({
      input: "",
    });
  }

  handleDelete = (index) => {
    this.setState((currentState) => {
      return {
        tasks: currentState.tasks.filter((task) => currentState.tasks.indexOf(task) !== index ),
      }
    });
  }



  render () {
    return (
      <div className="App">
        <div className="input-task">
          <h3>Add a Task:</h3>
          <input type="text" onChange={this.handleInput} value={this.state.input}/>
          <button onClick={this.handleClick}>Add</button>
        </div>
        <div className="display-tasks">
          <h3>Tasks:</h3>
          {this.state.tasks.map((task, index) => <Overview task={task} handleDelete={() => this.handleDelete(index)} />) }
        </div>
      </div>
    );
  }
}

export default App;
