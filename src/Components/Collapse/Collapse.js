import React, { useState } from 'react';
import arrow_top from '../../Assets/arrow_top.png';
import './CollapseStyle.scss';

const Collapse = ({ title, content, pageName }) => {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <div>
      <div className='CollapseBar'>
        <h3 className='CollapseTitle' onClick={handleToggle} style={{ cursor: 'pointer' }}>
          {title} <img src={arrow_top} alt="Arrow Top" className={`collapse-arrow ${visible ? 'open' : ''}`} />
        </h3>
        {pageName === 'Locations' && visible && (
          <ul className="collapse-list">
            {content.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        )}
        {pageName === 'About' && (
          <p className="CollapseContent" style={{ display: visible ? 'block' : 'none' }}>
            {content}
          </p>
        )}
      </div>
    </div>
  );
};

export default Collapse;
