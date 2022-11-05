import React from 'react';

import styles from './UserLinks.module.scss';

const UserLinks = ({ userData }) => {
  return (
    <>
      {userData.id && (
        <div className={styles.user__links}>
          <div className={styles.user__links__content}>
            <div className={styles.user__link}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className={styles.user__link__location}>
                {userData.location ? userData.location : 'Czech Republic'}
              </span>
            </div>
            <div className={styles.user__link}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              <a href={userData.blog} className={styles.user__link__website} target="_blank">
                {userData.blog ? userData.blog : 'lukaspscheidt.com'}
              </a>
            </div>
          </div>
          <div className={styles.user__links__content}>
            <div className={styles.user__link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span className={styles.user__link__email}>{userData.email ? userData.email : 'Not Available'}</span>
            </div>
            <div className={styles.user__link}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span className={styles.user__link_company}>{userData.company ? userData.company : 'Not Available'}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserLinks;

