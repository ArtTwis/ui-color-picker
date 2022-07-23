import React from 'react';
import AppThemeColor from '../../AppThemeColor';
import '../Home.css';

const Header = () => {
    const { primaryColor, textColor } = AppThemeColor.dark;

    return (
        <div>
            <header className='header-section'>
                <h1 style={{ color: primaryColor }}>Click to Copy</h1>
                <h3 style={{ color: textColor }}>Style Your Idea</h3>
                <div className='header-buttons-parent-dv'>
                    <button className='btn custom-button'>
                        Gradients Picker
                    </button>
                    <button className='btn custom-button'>
                        Contrast Checker
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;
