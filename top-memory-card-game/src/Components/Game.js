import React, {useEffect} from 'react';
import Cards from './Cards.js';
import '../Styles/Game.css';

function Game({currentScore: {currentScore, getCurrentScore}, maxScore: {maxScore, getMaxScore} }) {
  
  const addPoint = () => {
    getCurrentScore(currentScore + 1);
  }

  const resetCurrentScore = () => {
    getCurrentScore(0);
  }

  useEffect(() => {
    if (maxScore < currentScore) {
      getMaxScore(currentScore);
    }
  }, [currentScore]);

  


  return (
    <div className="game-container">
      <Cards addPoint={addPoint} resetCurrentScore={resetCurrentScore}/>
    </div>
  )
}

export default Game;