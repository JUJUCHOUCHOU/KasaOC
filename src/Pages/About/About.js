import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import Navbar from '../../Components/Navbar/Navbar';
import Collapse from '../../Components/Collapse/Collapse';
import AboutDatas from '../../Data/AboutData.js';
import './AboutStyle.scss';

function About() {
  return (
    <div className="About">
      <Navbar />
      <Banner />
      <div className='AboutMain'>
      {AboutDatas.map((item) => (
        <Collapse
          key={item.id}
          title={item.title}
          content={item.content}
          pageName="About"
        />
      ))}
      </div>
      <Footer />
    </div>
  );
}

export default About;
