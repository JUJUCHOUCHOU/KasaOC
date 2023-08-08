//link for each locations 
import { Link } from 'react-router-dom';
import './CardStyle.scss';

function Card({ title, cover }) {
    return (
        <Link to={`/Locations/`} className="galleryCard">
            <div className="cardContainer">
                <h2>{title}</h2>
                <img src={cover} alt={title} />
            </div>
        </Link>
    );
}

export default Card;
