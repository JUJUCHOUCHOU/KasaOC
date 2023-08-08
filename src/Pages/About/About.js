//page for 'à propos'
import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import Navbar from '../../Components/Navbar/Navbar';
import Collapse from '../../Components/Collapse/Collapse';
import AboutDatas from '../../Data/AboutData.js';

function About() {
  return (
    <div className="About">
      <Navbar />
      <Banner />
      {AboutDatas.map((item) => (
        <Collapse
          key={item.id}
          title={item.title}
          data={item.content}
          pageName="About"
        />
      ))}
      <Footer />
    </div>
  );
}

export default About;
