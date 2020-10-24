import './App.css';
import React, {Component} from 'react';
import Overview from './components/Overview.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      tasks: ['clean'],
    }
  }

  handleInput = (e) => {
    const tasks = this.state.tasks;

    this.setState({
        input: e.target.value,
    });
  }

  handleClick = () => {
    this.setState((currentState) => { 
      return {
        tasks: currentState.tasks.concat('yolooo')
      }
    });
    
    console.log(this.state);
    this.setState({
      input: "",
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
          <Overview />
        </div>
      </div>
    );
  }
}

export default App;
