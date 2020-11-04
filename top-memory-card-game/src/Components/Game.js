import React, {useEffect} from 'react';
import Cards from './Cards.js';
import '../Styles/Game.css';

function Game({currentScore: {currentScore, getCurrentScore}, maxScore: {maxScore, getMaxScore} }) {
  
  const addPointHandler = () => {
    getCurrentScore(currentScore + 1);
  }

  const resetCurrentScore = () => {
    getCurrentScore(0);
  }

  useEffect(() => {
    if (maxScore < currentScore) {
      getMaxScore(maxScore + 1);
    }
  }, [currentScore]);

  


  return (
    <div className="game-container">
      <Cards addPoint={addPointHandler} />
    </div>
  )
}

export default Game;