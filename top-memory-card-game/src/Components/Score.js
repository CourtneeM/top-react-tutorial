import React, {useState} from 'react';
import '../Styles/Score.css'

function Score({scores: {currentScore, maxScore}}) {

  return (
    <div className="score-container">
      <div className="current-score-container">
        <p>Current Score</p>
        {<p>{currentScore}</p>}
      </div>
      <div className="max-score-container">
        <p>Max Score</p>
        <p>{maxScore}</p>
      </div>
    </div>
  )
}

export default Score