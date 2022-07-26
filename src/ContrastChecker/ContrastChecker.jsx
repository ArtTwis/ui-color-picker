import React from 'react';
import Base from '../Base';
import './ContrastChecker.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import AppThemeColor from '../AppThemeColor';

const ContrastChecker = () => {
    const { primaryColor, textColor } = AppThemeColor.dark;
    return (
        <Base>
            <Header />
            <MainContent />
            <div className='how-it-work-section'>
                <h1
                    className='how-it-work-heading'
                    style={{ color: primaryColor }}>
                    How does it work
                </h1>
                <p className='how-it-work-content' style={{ color: textColor }}>
                    This tool follows the Web Content Accessibility Guidelines
                    (WCAG), which are a series of recommendations for making the
                    web more accessible.
                    <br />
                    <br />
                    Regarding colors, the standard defines two levels of
                    contrast ratio: AA (minimum contrast) and AAA (enhanced
                    contrast).
                    <br />
                    <br />
                    The level AA requires a contrast ratio of at least 4.5:1 for
                    normal text and 3:1 for large text (at least 18pt) or bold
                    text.
                    <br />
                    <br />
                    The level AAA requires a contrast ratio of at least 7:1 for
                    normal text and 4.5:1 for large text or bold text.
                </p>
                <a
                    style={{ color: primaryColor }}
                    className='how-it-work-learn-more'
                    href='#'>
                    Learn more
                </a>
            </div>
        </Base>
    );
};

export default ContrastChecker;
