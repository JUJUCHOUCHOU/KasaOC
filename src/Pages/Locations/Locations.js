import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Collapse from '../../Components/Collapse/Collapse';
import Carousel from '../../Components/Carousel/Carousel';
import datas from '../../Data/Data.js';
import star_Grey from '../../Assets/star_Grey.png';
import star_Pink from '../../Assets/star_Pink.png';

function Locations() {

  const targetId = 'c67ab8a7'; 

 
  const filteredData = datas.filter(item => item.id === targetId);

  return (
    <div className="Locations">
      <Navbar />
      {filteredData.map((item) => (
        <div key={item.id}>
          <Carousel items={[{ pictures: [item.pictures] }]} />
          <div className='InfoLocation'>
            <div className='InfoLocationPlace'>
              <h3 className='InfoLocationTitle'>{item.title}</h3>
              <h6 className='InfoLocationCity'>{item.location}</h6>
              <div className='InfolocationTags'>
                {item.tags.map((tag, index) => (
                  <span key={index} className='Tag'>{tag}</span>
                ))}
              </div>
            </div>
            <div className='InfoLocationOther'>
              <div className='InfoLocationHost'>
                <h6 className='InfoLocationHostName'>{item.host.name}</h6>
                <img src={item.host.picture} alt={`Picture of ${item.host.name}`} className='InfoLocationPictureHost'/>
              </div>
              <div className="RatingHost">
                {Array.from({ length: 5 }).map((_, index) => (
                  <img
                    key={index}
                    src={index < item.rating ? star_Pink : star_Grey}
                    alt="star"
                  />
                ))}
              </div>
            </div>
          </div>
          <Collapse
            title={'Description'}
            content={[item.description]}
            pageName="Locations"
          />
          <Collapse
            title={'Equipements'}
            content={item.equipments}
            pageName="Locations"
          />
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Locations;
