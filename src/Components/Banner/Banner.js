import banner_image from '../../Assets/banner_image.png';
import bannerabout_image from '../../Assets/bannerabout_image.png';
import './BannerStyle.scss';

function Banner({ title, pageTitle }) {
  const showTitle = pageTitle === 'Welcome';

  return (
    <div className={pageTitle === 'About' ? 'banner-about' : 'banner'}>
      {showTitle && <h3>{title}</h3>}
      {pageTitle === 'Welcome' && (
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