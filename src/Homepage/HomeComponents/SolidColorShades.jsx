import React from 'react';
import AppThemeColor from '../../AppThemeColor';
import '../Home.css';
import { SolidColorShadess } from './DataFiles/SolidColorShades.js';
import ColorTile from './ColorTile';

const SolidColorShades = ({ colorname, index }) => {
    const { primaryColor, textColor } = AppThemeColor.dark;

    return (
        <div
            className='solid-color-shade-parent-dv'
            key={colorname + '-' + index}>
            <h4 style={{ color: textColor }}>Feeling {colorname}</h4>
            <div className='color-shades-tiles-parent-dv'>
                {SolidColorShadess[colorname].map((shade, shadeindex) => {
                    return <ColorTile shadevalue={shade} index={shadeindex} />;
                })}
            </div>
        </div>
    );
};

export default SolidColorShades;
