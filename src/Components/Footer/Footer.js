//footer (each page have footer)
import Logo_White from '../../Assets/Logo_White.png';
import './FooterStyle.scss';

function Footer(){
    return(
        <div className='Footer'>
            <img src={Logo_White} alt='Logo de kasa blanc'className='LogoWhite'/>
            <p className='FooterText'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}
export default Footer