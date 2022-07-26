import React from 'react';
import AppThemeColor from '../../AppThemeColor';

const Header = () => {
    const { textColor, primaryColor } = AppThemeColor.dark;

    const windowWidth = window.innerWidth;

    return (
        <div className='header-section'>
            <span
                className={`header-heading ${
                    windowWidth < 1450
                        ? 'header-heading-xl'
                        : 'header-heading-xxl'
                }`}
                style={{ color: primaryColor }}>
                Color Contrast Checker
            </span>
            <span
                className={`header-desc ${
                    windowWidth < 1450 ? 'header-desc-xl' : 'header-desc-xxl'
                }`}
                style={{ color: textColor }}>
                Calculate the contrast ration of text and backgroud colors.
            </span>
        </div>
    );
};

export default Header;
