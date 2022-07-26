import React, { useState, useEffect } from 'react';
import AppThemeColor from '../../AppThemeColor';
import '../Home.css';
import copiedIcon from './DataFiles/copied-icon-25.png';

const ColorTile = ({ shadevalue, index }) => {
    const { textColor, verfiedColor } = AppThemeColor.dark;

    const [colorHexValue, setColorHexValue] = useState(null);

    const getShadeValue = (event) =>
        setColorHexValue(event.target.getAttribute('data-colorvalue'));

    const copyToClipboard = (text) => {
        const elem = document.createElement('textarea');
        elem.value = text;
        document.body.appendChild(elem);
        elem.select();
        document.execCommand('copy');
        document.body.removeChild(elem);
    };

    useEffect(() => {
        if (colorHexValue) {
            let selectedElement = document.querySelector(
                `#shade-${colorHexValue.split('#')[1]}`
            );

            selectedElement.innerHTML = `
                <div className="copied-element-parent-dv">
                    <span className='copiedElementTxt' style="color: ${verfiedColor};">Copied</span>
                    <img src=${copiedIcon} alt="Copied" className="copiedIcon"/>
                </div>
            `;

            copyToClipboard(colorHexValue);

            setTimeout(() => {
                selectedElement.innerHTML = colorHexValue;
                setColorHexValue(null);
            }, 1500);
        }
    });

    return (
        <div className='the-card-parent-dv'>
            <div
                className='the-card mb-2'
                data-colorvalue={shadevalue}
                style={{ background: shadevalue }}
                onClick={getShadeValue}></div>
            <p
                id={'shade' + '-' + shadevalue.split('#')[1]}
                style={{ color: textColor, textAlign: 'center' }}>
                {shadevalue}
            </p>
        </div>
    );
};

export default ColorTile;
