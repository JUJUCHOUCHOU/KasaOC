import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BannerStyle.scss';
import banner_image from '../../Assets/banner_image.png';
import bannerabout_image from '../../Assets/bannerabout_image.png';

function Banner({ title, pageTitle }) {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return (
    <div className={isAboutPage ? 'banner-about' : 'banner'}>
      {pageTitle === 'Welcome' && <h3>{title}</h3>}
      {pageTitle === 'Welcome' && !isAboutPage && (
        <div className="banner-content">
          <p>Chez vous, partout et ailleurs</p>
          <img src={banner_image} alt="Image de bannière pour la page d'accueil" />
        </div>
      )}
      {pageTitle === 'About' && (
        <img src={bannerabout_image} alt='Image de bannière pour la page "À propos"' />
      )}
    </div>
  );
}

export default Banner;
