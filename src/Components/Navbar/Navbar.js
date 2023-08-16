import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo_Pink from '../../Assets/Logo_Pink.png';
import './NavbarStyle.scss';

function Navbar() {
    // Use the useLocation hook to get the current location object
    const location = useLocation();
    // Extract the current route (pathname) from the location object
    const currentRoute = location.pathname;

    return (
        <nav className='Navbar'>
            {/* Display the pink logo */}
            <img src={Logo_Pink} alt='Kasa Logo' className="LogoPink" />
            <div className="NavbarLink">
                {/* Link to the "Welcome" page */}
                {/* Apply the "activeLink" class if the current route matches the link */}
                {/* Apply the "inactiveLink" class if the current route does not match the link */}
                <Link to="/" className={currentRoute === '/' ? 'activeLink' : 'inactiveLink'}>
                    Accueil
                </Link>

                {/* Link to the "About" page */}
                {/* Apply the "activeLink" class if the current route matches the link */}
                {/* Apply the "inactiveLink" class if the current route does not match the link */}
                <Link to="/About" className={currentRoute === '/About' ? 'activeLink' : 'inactiveLink'}>
                    A propos
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;