import React, {useState} from 'react';
import '../Styles/Score.css'

function Score({scores}) {
  const [currentScore, maxScore] = scores;


  return (
    <div className="score-container">
      <div className="current-score-container">
        <p>Current Score</p>
        {<p>{scores[0].currentScore}</p>}
      </div>
      <div className="max-score-container">
        <p>Max Score</p>
        <p>{scores[1].maxScore}</p>
      </div>
    </div>
  )
}

export default Score