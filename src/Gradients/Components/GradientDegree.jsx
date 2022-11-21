import React from 'react';
import '../Gradient.css';
import Arrow from './DataFiles/arrow-icon-25.png';
import CircleArrow from './DataFiles/circle-arrow-icon-25.png';
import { GradientDeg } from './DataFiles/GradientDeg.js';

const GradientDegree = () => {
  return (
    <div className='gradient-direction-pt'>
      {GradientDeg.map((item, index) => {
        return (
          <div className='gradient-direction-dv' key={'arrow-icon' + index}>
            <img
              src={item.direction === 'circle' ? CircleArrow : Arrow}
              style={{ transform: `rotate(${item.deg}deg)` }}
              alt='deg'
              data-direction={item.direction}
              data-func={item.func}
            />
          </div>
        );
      })}
    </div>
  );
};

export default GradientDegree;
