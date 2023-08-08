// first page we see
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import Gallery from '../../Components/Gallery/Gallery'
import Footer from '../../Components/Footer/Footer'
import './WelcomeStyle.scss';

function Welcome(){
    return(
        <div className='Welcome'>
            <Navbar/>
            <Banner/>
            <main className='WelcomeMain'>
                <Gallery/>
            </main>
            <Footer />
        </div>
    )
}
export default Welcome