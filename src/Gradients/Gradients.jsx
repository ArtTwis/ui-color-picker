import React from 'react';
import Base from '../Base';
import GradientDegree from './Components/GradientDegree';
import GradientGenerator from './Components/GradientGenerator';
import Header from './Components/Header';
import './Gradient.css';

const Gradients = () => {
  return (
    <Base>
      <Header />
      <GradientDegree />
      <GradientGenerator />
    </Base>
  );
};

export default Gradients;
