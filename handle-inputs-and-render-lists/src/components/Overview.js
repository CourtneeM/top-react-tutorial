import React, {Component} from 'react';
import '../style/overview.css';

class Overview extends Component {
  render() {
    return (
      <div className="task-list">
        <p>{this.props.task}</p>
        <p onClick={(index) => this.props.handleDelete(index)}>[X]</p>
      </div>
    );
  }
}

export default Overview;