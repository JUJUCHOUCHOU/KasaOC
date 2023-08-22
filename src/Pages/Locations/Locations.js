import React from 'react';
import { Routes, Route, useParams, Navigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Collapse from '../../Components/Collapse/Collapse';
import Carousel from '../../Components/Carousel/Carousel';
import datas from '../../Data/Data.js';
import Tag from '../../Components/Tag/Tag'
import star_Grey from '../../Assets/star_Grey.png';
import star_Pink from '../../Assets/star_Pink.png';
import './LocationStyle.scss';

function Locations() {
  const { id } = useParams();

  const data = datas.find(item => item.id === id);

  if (!data) {
    return <Navigate to="*" replace={true} />;
  }

  const { pictures, title, location, tags, host, rating, description, equipments } = data;

  const starImages = Array.from({ length: 5 }).map((_, index) => (
    <img key={index} src={index < rating ? star_Pink : star_Grey} alt="star" />
  ));

  return (
    <div className="Locations">
      <Navbar />
      <div>
        <Carousel pictures={ pictures } />
        <div className='InfoLocation'>
          <div className='InfoLocationPlace'>
            <h3 className='InfoLocationTitle'>{title}</h3>
            <h6 className='InfoLocationCity'>{location}</h6>
            <div className='InfoLocationTags'>
              {tags.map((tag, index) => (
                <Tag key={index} text={tag}/>
              ))}
            </div>
          </div>
          <div className='InfoLocationOther'>
            <div className='InfoLocationHost'>
              <h6 className='InfoLocationHostName'>{host.name}</h6>
              <img src={host.picture} alt={`location host  ${host.name}`} className='InfoLocationPictureHost' />
            </div>
            <div className="RatingHost">{starImages}</div>
          </div>
        </div>
        <div className='CollapseLocation'>
          <Collapse title={'Description'}>
            <p>{description}</p>
          </Collapse>
          <Collapse title={'Equipements'} content={equipments}>
            <ul className="collapse-list">
              {equipments.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Locations;

