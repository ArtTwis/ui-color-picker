import React, { useState } from 'react';
import '../Gradient.css';

const GradientGenerator = () => {
  const [GeneratedGradient, setGeneratedGradient] = useState(
    'linear-gradient(to right top, #051937, #2d2354, #5f2568, #941b6d, #c60762)'
  );

  const [primaryColor, setprimaryColor] = useState('#051937');

  const [secondaryColor, setSecondaryColor] = useState('#C60762');

  return <div></div>;
};

export default GradientGenerator;
