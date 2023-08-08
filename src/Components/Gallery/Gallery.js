import React from 'react';
import Data from '../../Data/Data.js';
import './GalleryStyle.scss';
import Card from '../../Components/Card/Card.js'; 

function Gallery() {
  console.log(Data);
  return (
    <main className='Cardgallery'>
      {Data.map((apartment) => (
        <Card
          key={apartment.id}
          id={apartment.id}
          title={apartment.title}
          cover={apartment.cover}
        />
      ))}
    </main>
  );
}

export default Gallery;