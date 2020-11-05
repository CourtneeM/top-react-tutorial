import React, {useState, useEffect} from 'react';
import '../Styles/Cards.css';

function Cards({addPoint, resetCurrentScore}) {

  const [images, setImages] = useState([
    {image: 1, clicked: 0}, 
    {image: 2, clicked: 0},
    {image: 3, clicked: 0}, 
    {image: 4, clicked: 0},
    {image: 5, clicked: 0},
    {image: 6, clicked: 0},
    {image: 7, clicked: 0},
    {image: 8, clicked: 0},
    {image: 9, clicked: 0},
    {image: 10, clicked: 0},
    {image: 11, clicked: 0},
    {image: 12, clicked: 0},
  ]);

  const resetCurrentRound = () => {
    images.map((image) => {
      image.clicked = 0;
    });

    resetCurrentScore();
  }

  const toggleClickedStatus = (index) => {
    let newArr = [...images];
    newArr[index].clicked = newArr[index].clicked + 1;
    setImages(newArr);
  }

  const handleClick = (index) => {    
    addPoint();
    toggleClickedStatus(index);
  }

  useEffect(() => {
    images.map((image) => {
      if (image.clicked === 2) {
        resetCurrentRound();
      }
    });
  });
  
  return (
    <div className="cards-container">
      {images.map((imageObj, index) => (
        <div className="card" onClick={() => handleClick(index)}>
          <p>{imageObj.image}</p>
        </div>
      ))}
    </div>
  )
}

export default Cards;