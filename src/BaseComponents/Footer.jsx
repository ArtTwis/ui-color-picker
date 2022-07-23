import React from 'react';
import AppThemeColor from '../AppThemeColor';
import './BaseComponent.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Footer = () => {
    const { baseComponentBgColor, primaryColor, textColor } =
        AppThemeColor.dark;

    const Navigate = useNavigate();

    return (
        <div
            className='copyrightText'
            style={{ background: baseComponentBgColor }}>
            <p style={{ color: textColor }}>
                Copyright © 2022 ArtTwis. All Right Reserved. Designed By&nbsp;
                <a
                    href='https://arttwis.github.io'
                    style={{ color: `${primaryColor}` }}>
                    Twinkle Goyal
                </a>
            </p>
        </div>
    );
};

export default Footer;
