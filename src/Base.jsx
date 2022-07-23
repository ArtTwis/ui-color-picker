import React from 'react';
import Navbar from './BaseComponents/Navbar';
import Footer from './BaseComponents/Footer';
import AppThemeColor from './AppThemeColor';

const Base = ({ children }) => {
    const { bodyBgColor } = AppThemeColor.dark;

    return (
        <div>
            <Navbar />
            <div
                className='container-fluid content-container base-child-component'
                style={{ backgroundColor: bodyBgColor }}>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Base;
