import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import Navbar from '../../Components/Navbar/Navbar';
import Collapse from '../../Components/Collapse/Collapse';
import AboutDatas from '../../Data/AboutData.js';
import Bannerabout from '../../Assets/bannerabout_image.png';
import './AboutStyle.scss';

function About() {
  return (
    <div className="About">
      <Navbar />
      <Banner image={Bannerabout} />
      <div className='AboutMain'>
        {AboutDatas.map((item) => (
          <Collapse title={item.title} key={item.id}>
            <p>{item.content}</p>
          </Collapse>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default About;
