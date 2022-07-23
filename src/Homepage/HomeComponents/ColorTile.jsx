import React from 'react';
import AppThemeColor from '../../AppThemeColor';
import '../Home.css';

const ColorTile = ({ shadevalue, index }) => {
    const { textColor } = AppThemeColor.dark;

    return (
        <div className='the-card-parent-dv' key={shadevalue + '-' + index}>
            <div
                className='the-card mb-2'
                style={{ background: shadevalue }}></div>
            <p style={{ color: textColor, textAlign: 'center' }}>
                {shadevalue}
            </p>
        </div>
    );
};

export default ColorTile;
