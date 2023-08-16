import React from 'react';
import './BannerStyle.scss';


function Banner({ title, image }) {

  return (
    <div className="banner">
      {title &&<h3 className='bannerTitleContent'>{title}</h3>}
      <img src={image} alt="Image de bannière" />
    </div>
  );
}

export default Banner;
