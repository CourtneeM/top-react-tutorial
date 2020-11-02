import React, {useState} from 'react';
import Header from './Components/Header.js';
import Score from './Components/Score.js';
import './App.css';

function App() {
  const [scores, getScores] = useState([{currentScore: 0}, {maxScore: 0}]);

  return (
    <div className="App">
      <Header />
      <Score scores={scores}  />
    </div>
  );
}

export default App;
