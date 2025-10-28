import React from 'react';
import logo from '../assets/icon/logo.svg';

export const Header = () => (
  <header>
    <a href="/" className="logo">
      <img src={logo} alt="Le Dôme Restaurant Logo" />
    </a>
  </header>
);

export default Header;