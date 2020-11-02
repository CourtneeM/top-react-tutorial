import React from 'react';

function Cards(props) {

  
  return (
    <div className="cards-container">
      <button onClick={() => props.addPoint()}>Click me</button>
    </div>
  )
}

export default Cards;