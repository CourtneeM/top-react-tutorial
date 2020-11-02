import React from 'react';
import Cards from './Cards.js';

function Game({currentScore: {currentScore, getCurrentScore}}) {
  
  const addPointHandler = () => {
    getCurrentScore(currentScore + 1);
  }


  return (
    <div className="game-container">
      <Cards addPoint={addPointHandler}/>
    </div>
  )
}

export default Game;