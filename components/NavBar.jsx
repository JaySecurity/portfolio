import Link from 'next/link';
import React from 'react';
import styles from '../styles/NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src='/images/rocket.jpeg' alt='logo' />
      <ul className={styles.menu}>
        <Link href='/'>
          <li className={styles.menuItem}>Home</li>
        </Link>
        <Link href='/projects'>
          <li className={styles.menuItem}>Projects</li>
        </Link>
        {/* <Link href='/contact'>
          <li className={styles.menuItem}>Contact</li>
        </Link> */}
      </ul>
    </div>
  );
}

export default NavBar;
