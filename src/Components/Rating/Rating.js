import './RatingStyle.scss';
import star_Grey from "../../Assets/star_Grey.png";
import star_Pink from "../../Assets/star_Pink.png";

function Rating({ rating }) {
  const starImages = Array.from({ length: 5 }).map((_, index) => (
    <img key={index} src={index < rating ? star_Pink : star_Grey} alt="star" />
  ));

  return (
    <div className="RatingHost">{starImages}</div>
  );
}

export default Rating;