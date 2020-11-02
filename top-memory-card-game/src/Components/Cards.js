import React from 'react';

function Cards(props) {

  const handleClick = () => {
    props.addPoint();
  }
  
  return (
    <div className="cards-container">
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  )
}

export default Cards;