import React, {useEffect} from 'react';
import Cards from './Cards.js';
import '../Styles/Game.css';

function Game({currentScore: {currentScore, getCurrentScore}, maxScore: {maxScore, getMaxScore} }) {
  
  const addPoint = () => {
    getCurrentScore(currentScore + 1);
    console.log('addPoint:',currentScore)
  }

  // PASS DOWN TO CARDS, IF CARD CLICKED IS TRUE AND IS CLICKED AGAIN, THEN RESET GAME
  const resetCurrentScore = () => {
    getCurrentScore(0);
    console.log('resetCurrentScore:',currentScore)
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