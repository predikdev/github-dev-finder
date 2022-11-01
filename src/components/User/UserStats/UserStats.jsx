import React from 'react';

import styles from './UserStats.module.scss';

const UserStats = () => {
  return (
    <div className={styles.user__stats}>
      <div className={`${styles.user__stats__repos} ${styles.stat}`}>
        <p className={styles.user__repo}>Repos</p>
        <h2 className={`${styles.user__repoCount} ${styles.count}`}>7</h2>
      </div>
      <div className={`${styles.user__stats__followers} ${styles.stat}`}>
        <p className={styles.user__followers}>Followers</p>
        <h2 className={`${styles.user__followersCount} ${styles.count}`}>0</h2>
      </div>
      <div className={`${styles.user__stats__following} ${styles.stat}`}>
        <p className={styles.user__following}>Following</p>
        <h2 className={`${styles.user__followingCount} ${styles.count}`}>9</h2>
      </div>
    </div>
  );
};

export default UserStats;

