import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppThemeColor from '../../AppThemeColor';
import '../Home.css';

const Header = () => {
    const navigate = useNavigate();

    const { primaryColor, textColor } = AppThemeColor.dark;

    return (
        <div>
            <header className='header-section'>
                <h1 style={{ color: primaryColor }}>Click to Copy</h1>
                <h3 style={{ color: textColor }}>Style Your Idea</h3>
                <div className='header-buttons-parent-dv'>
                    <button
                        className='btn custom-button'
                        onClick={() => {
                            navigate('/gradients');
                        }}>
                        Gradients Picker
                    </button>
                    <button
                        className='btn custom-button'
                        onClick={() => {
                            navigate('/contrast');
                        }}>
                        Contrast Checker
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;
