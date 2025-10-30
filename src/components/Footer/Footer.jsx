import React from 'react';
import logo from '../../assets/icon/logo.svg';
import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer className={styles.footer}>
    <img className={styles.logo} src={logo} alt="Le Dôme Restaurant Footer Logo" />
    <nav className={styles.nav}>
      <div className={styles.columContainer}>
        <h3>Dormant Navigation</h3>
        <ul>
          <li><NavLink to="/" end className={({isActive}) => isActive ? styles.active : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? styles.active : ''}>About</NavLink></li>
          <li><NavLink to="/menu" className={({isActive}) => isActive ? styles.active : ''}>Menu</NavLink></li>
          <li><NavLink to="/reservation" className={({isActive}) => isActive ? styles.active : ''}>Reservation</NavLink></li>
          <li><NavLink to="/order-online" className={({isActive}) => isActive ? styles.active : ''}>Order online</NavLink></li>
          <li><NavLink to="/login" className={({isActive}) => isActive ? styles.active : ''}>Login</NavLink></li>
        </ul>
        </div>
        <div className={styles.columContainer}>
        <h3>Contact</h3>
        <ul>
            <li><a href="#">Adress</a></li>
            <li><a href="#">Phone number</a></li>
            <li><a href="#">Email</a></li>
        </ul>
        </div>
        <div className={styles.columContainer}>
        <h3>Social Media Links</h3>
        <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">X</a></li>
        </ul>
        </div>
    </nav>
    <p>&copy; 2025 Le Dôme Restaurant. All rights reserved.</p>
  </footer>
);

export default Footer;
