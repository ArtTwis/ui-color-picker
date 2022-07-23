import React from 'react';
import Base from '../Base';
import Header from './HomeComponents/Header';
import { SolidColor } from './HomeComponents/DataFiles/SolidColor';
import SolidColorShades from './HomeComponents/SolidColorShades';

const Home = () => {
    return (
        <Base>
            <Header />
            {SolidColor.map((color, index) => {
                return <SolidColorShades colorname={color} index={index} />;
            })}
        </Base>
    );
};

export default Home;
