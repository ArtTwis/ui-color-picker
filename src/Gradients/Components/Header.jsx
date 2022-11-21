import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppThemeColor from '../../AppThemeColor';
import '../Gradient.css';

const Header = () => {
  const navigate = useNavigate();

  const { primaryColor, textColor } = AppThemeColor.dark;

  return (
    <div>
      <header className='header-section'>
        <h1 style={{ color: primaryColor }}>Generate a CSS Color Gradient</h1>
        <h3 style={{ color: textColor }}>Style Your Idea</h3>
      </header>
    </div>
  );
};

export default Header;
