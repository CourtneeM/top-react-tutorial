import React, {useState, useEffect} from 'react';
import '../Styles/Cards.css';

function Cards({addPoint, resetCurrentScore}) {

  const [images, setImages] = useState([
    {image: './images/case.png', clicked: 0}, 
    {image: './images/cpu.png', clicked: 0},
    {image: './images/gpu.png', clicked: 0}, 
    {image: './images/headset.png', clicked: 0},
    {image: './images/keyboard.png', clicked: 0},
    {image: './images/microphone.png', clicked: 0},
    {image: './images/monitor.png', clicked: 0},
    {image: './images/motherboard.png', clicked: 0},
    {image: './images/mouse.png', clicked: 0},
    {image: './images/psu.png', clicked: 0},
    {image: './images/ram.png', clicked: 0},
    {image: './images/storage.png', clicked: 0},
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
          <img src={imageObj.image}></img>
        </div>
      ))}
    </div>
  )
}

export default Cards;