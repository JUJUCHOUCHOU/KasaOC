import React, { useState } from 'react';
import arrow_right from '../../Assets/arrow_right.png';
import arrow_left from '../../Assets/arrow_left.png';
import data from '../../Data/Data.js';
import './CarouselStyle.scss';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data[currentIndex].pictures.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data[currentIndex].pictures.length - 1 : prevIndex - 1));
  };

  const slideNumber = data[currentIndex].pictures.length > 1 ? `${currentIndex + 1} / ${data[currentIndex].pictures.length}` : '';

  return (
    <div className="containerCarousel">
      {data[currentIndex].pictures.length > 1 && (
        <>
          <img
            className="carousel_arrow carousel_arrow_left"
            src={arrow_left}
            alt="show previous slider"
            onClick={prevSlide}
          />
          <img
            className="carousel_arrow carousel_arrow_right"
            src={arrow_right}
            alt="show next slider"
            onClick={nextSlide}
          />
        </>
      )}
      <div className="carousel_images">
        {data[currentIndex].pictures.map((picture, index) => (
          <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
            <div className="image-container">
              <img src={picture} alt={`carousel ${index + 1}`} />
              {slideNumber && <p className="slideNumber">{slideNumber}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
