// first page we see
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import Gallery from '../../Components/Gallery/Gallery'
import Footer from '../../Components/Footer/Footer'
import './WelcomeStyle.scss';
import Banner_Image from '../../Assets/banner_image.png'

function Welcome(){
    return(
        <div className='Welcome'>
            <Navbar/>
            <Banner title="Chez vous, partout et ailleurs. " image={Banner_Image}/>
            <main className='WelcomeMain'>
                <Gallery/>
            </main>
            <Footer />
        </div>
    )
}
export default Welcome