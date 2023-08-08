//page for 404 error
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import './NotfoundStyle.scss';

function Notfound(){
    return(
        <div className='Notfound'>
            <Navbar />
            <main className='NotfoundMain'>
                <div className='NotfoundTitle'>404</div>
                <h1 className='NotfoundText'>Oups! La page que vous demandez n'existe pas.</h1>
                <Link className='NotfoundLink' to='/'>Retournez sur la page d'accueil.</Link>
            </main>
        <Footer />
        </div>
    )
}
export default Notfound