import React from 'react';
import logo from '../assets/icon/logo.svg';

const Footer = () => (
  <footer>
    <img src={logo} alt="Le Dôme Restaurant Footer Logo" />
    <nav>
        <h3>Dormant Navigation</h3>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/menu">MENU</a></li>
            <li><a href="/reservation">RESERVATION</a></li>
            <li><a href="/order-online">ORDER ONLINE</a></li>
            <li><a href="/login">LOGIN</a></li>
        </ul>
        <h3>Contact</h3>
        <ul>
            <li><a href="#">Adress</a></li>
            <li><a href="#">Phone number</a></li>
            <li><a href="#">Email</a></li>
        </ul>
        <h3>Social Media Links</h3>
        <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">X</a></li>
        </ul>
    </nav>
    <p>&copy; 2025 Le Dôme Restaurant. All rights reserved.</p>
  </footer>
);

export default Footer;
