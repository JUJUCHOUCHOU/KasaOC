import React, { useState } from 'react';
import arrow_right from '../../Assets/arrow_right.png';
import arrow_left from '../../Assets/arrow_left.png';
import data from '../../Data/Data.js';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data[currentIndex].pictures.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data[currentIndex].pictures.length - 1 : prevIndex - 1));
  };

  const slideNumber = `${currentIndex + 1} / ${data[currentIndex].pictures.length}`;

  return (
    <div className="containerCarousel">
      <img
        className="carousel_arrow carousel_arrow_left"
        src={arrow_left}
        alt="show previous slider"
        onClick={prevSlide}
      />
      <div className="carousel_images">
        {data[currentIndex].pictures.map((pictures, index) => {
          return (
            <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
              <img src={pictures} alt={`Image ${index + 1}`} />
            </div>
          );
        })}
      </div>
      <p className="slideNumber">{slideNumber}</p>
      <img
        className="carousel_arrow carousel_arrow_right"
        src={arrow_right}
        alt="show next slider"
        onClick={nextSlide}
      />
    </div>
  );
}

export default Carousel;