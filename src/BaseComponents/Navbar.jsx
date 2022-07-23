import React from 'react';
import AppThemeColor from '../AppThemeColor';
import './BaseComponent.css';

const Navbar = () => {
    const { baseComponentBgColor, primaryColor } = AppThemeColor.dark;

    const brandName = 'UI Color Picker';

    return (
        <nav
            className='navbar sticky-top shadow'
            style={{ background: baseComponentBgColor }}>
            <div className='container-fluid'>
                <a
                    className='brand font-weight-bold'
                    style={{ color: primaryColor }}
                    href='#'>
                    {brandName}
                </a>

                <a
                    className='brand font-weight-bold'
                    style={{ color: primaryColor }}
                    href='#'>
                    About Me
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
