import React, {useState} from 'react';
import Header from './Components/Header.js';
import Score from './Components/Score.js';
import Game from './Components/Game.js';
import './App.css';

function App() {
  const [currentScore, getCurrentScore] = useState(0);
  const [maxScore, getMaxScore] = useState(0);

  return (
    <div className="App">
      <Header />
      <Score scores={{currentScore, maxScore}}  />
      <Game currentScore={{currentScore, getCurrentScore}} />
    </div>
  );
}

export default App;
