import React, {useState} from 'react';
import '../Styles/Cards.css';

function Cards(props) {

  const [images, setImages] = useState([
    {image: 1, clicked: false}, 
    {image: 2, clicked: false},
    {image: 3, clicked: false}, 
    {image: 4, clicked: false},
    {image: 5, clicked: false},
    {image: 6, clicked: false},
    {image: 7, clicked: false},
    {image: 8, clicked: false},
    {image: 9, clicked: false},
    {image: 10, clicked: false},
    {image: 11, clicked: false},
    {image: 12, clicked: false},
  ]);

  const handleClick = (index) => {
    props.addPoint();
    let newArr = [...images];
    newArr[index].clicked = !newArr[index].clicked;
    setImages(newArr);
    console.log(images);
  }
  
  return (
    <div className="cards-container">
      {images.map((imageObj, index) => (
        <div className="card" onClick={() => handleClick(index)}>
          <p>{imageObj.image}</p>
          {imageObj.clicked
            ? <p>True</p>
            : <p>False</p>
          }
        </div>
      ))}
    </div>
  )
}

export default Cards;