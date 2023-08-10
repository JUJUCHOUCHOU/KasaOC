import React from 'react';
import { Link } from 'react-router-dom';
import './CardStyle.scss';

function Card({ id, title, cover, handleCardClick }) {
    return (
        <Link to={`/Locations/`} className="galleryCard">
            <div className="cardContainer" onClick={() => handleCardClick(id)}>
                <h2>{title}</h2>
                <img src={cover} alt={title} />
            </div>
        </Link>
    );
}

export default Card;

