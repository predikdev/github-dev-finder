import React from 'react';

import UserDetails from './UserDetails/UserDetails';
import UserStats from './UserStats/UserStats';
import UserLinks from './UserLinks/UserLinks';

import styles from './UserInfo.module.scss';

const UserInfo = () => {
  return (
    <section className={styles.user__info}>
      <UserDetails />
      <UserStats />
      <UserLinks />
    </section>
  );
};

export default UserInfo;

