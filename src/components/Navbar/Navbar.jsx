import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <ul className={styles.navList}>
      <li><NavLink to="/" end className={({isActive}) => isActive ? styles.active : ''}>HOME</NavLink></li>
      <li><NavLink to="/about" className={({isActive}) => isActive ? styles.active : ''}>ABOUT</NavLink></li>
      <li><NavLink to="/menu" className={({isActive}) => isActive ? styles.active : ''}>MENU</NavLink></li>
      <li><NavLink to="/reservation" className={({isActive}) => isActive ? styles.active : ''}>RESERVATION</NavLink></li>
      <li><NavLink to="/order-online" className={({isActive}) => isActive ? styles.active : ''}>ORDER ONLINE</NavLink></li>
      <li><NavLink to="/login" className={({isActive}) => isActive ? styles.active : ''}>LOGIN</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
