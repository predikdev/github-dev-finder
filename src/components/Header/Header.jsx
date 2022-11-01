import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={`${styles.header} | container`}>
      <div className={styles.header__logo}>Github Dev Finder</div>
      <div className={styles.header__switch}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;

