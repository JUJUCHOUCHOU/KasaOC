// ParentComponent.js
import React from 'react';
import Card from '../Card/Card.js'; 
import datas from '../../Data/Data.js'; 
import './GalleryStyle.scss';

function Gallery() {
  const handleCardClick = (id) => {  {/*choose the card and say the good ID for logement page*/}
  };

  return (
    <div className='galleryContainer'>
      {datas.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          cover={item.cover}
          handleCardClick={handleCardClick}
        />
      ))}
    </div>
  );
}

export default Gallery;
