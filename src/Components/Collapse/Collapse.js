import React, { useState } from 'react';
import arrow_top from '../../Assets/arrow_top.png';

const Collapse = ({ title, data, pageName }) => {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <div>
      <div className='CollapseBar'>
        <h3 onClick={handleToggle} style={{ cursor: 'pointer' }}>
          {title} <img src={arrow_top} alt="Arrow Top" style={{ transform: visible ? 'rotate(180deg)' : 'rotate(0deg)' }} />
        </h3>
        {pageName === 'Locations' && visible && (
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                {item.title}: {item.content}
                {item.cover && ` - Cover: ${item.cover}`}
              </li>
            ))}
          </ul>
        )}
        {pageName === 'About' && (
          <p style={{ display: visible ? 'block' : 'none' }}>{data}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;





