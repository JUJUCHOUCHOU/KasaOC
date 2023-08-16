import React from 'react';
import { Link } from 'react-router-dom';
import './CardStyle.scss';

function Card({ id, title, cover }) {
  return (
    <div className="cardContainer">
    <Link to={`/Locations/${id}`} className="galleryCard">
        <h2>{title}</h2>
        <img src={cover} alt={title} />
    </Link>
    </div>
  );
}

export default Card;
