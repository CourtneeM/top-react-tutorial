import './App.css';
import React, {Component} from 'react';
import Overview from './components/Overview.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }



  render () {
    return (
      <div className="App">
        <h3>Add a Task:</h3>
        <input type="text" />
        <button>Add</button>
      </div>
    );
  }
}

export default App;
