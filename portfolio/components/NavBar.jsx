import React from 'react';
import styles from '../styles/NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src='/images/rocket.jpeg' alt='logo' />
      <ul className={styles.menu}>
        <li className={styles.menuItem}>Home</li>
        <li className={styles.menuItem}>Portfolio</li>
        <li className={styles.menuItem}>About</li>
        <li className={styles.menuItem}>Contact</li>
      </ul>
    </div>
  );
}

export default NavBar;
