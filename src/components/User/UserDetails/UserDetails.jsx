import React from 'react';

import Avatar from '../../../assets/avatar.jpg';

import styles from './UserDetails.module.scss';

const UserInfo = () => {
  return (
    <>
      <div className={styles.user__details}>
        <div className={styles.user__avatar}>
          <img src={Avatar} alt="User avatar" className="avatar" />
        </div>
        <div className={styles.user__desc}>
          <h1 className={styles.user__name}>Lukas Pscheidt</h1>
          <p className={styles.user__nickname}>@predikdev</p>
          <p className={styles.user__joined}>Joined: Jun 27, 2019</p>
        </div>
      </div>
      <p className={styles.user__bio}>
        I am self-taught Front End Web Developer. I am using HTML, CSS and JavaScript for now, but I will learn more in
        the future!!!
      </p>
    </>
  );
};

export default UserInfo;

