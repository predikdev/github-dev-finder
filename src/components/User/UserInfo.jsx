import React from 'react';

import UserDetails from './UserDetails/UserDetails';
import UserStats from './UserStats/UserStats';
import UserLinks from './UserLinks/UserLinks';

import styles from './UserInfo.module.scss';

const UserInfo = ({ userData, repoData }) => {
  return (
    <section className={styles.user__info}>
      <UserDetails userData={userData} />
      <UserStats userData={userData} />
      <UserLinks userData={userData} />
    </section>
  );
};

export default UserInfo;

