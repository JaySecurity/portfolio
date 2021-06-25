import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from '../styles/NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.navbar}>
      <Image
        className={styles.logo}
        src='/images/rocket.gif'
        alt='logo'
        width={80}
        height={80}
        layout='intrinsic'
      />
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
