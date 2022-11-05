import React from 'react';

import styles from './UserStats.module.scss';

const UserStats = ({ userData }) => {
  return (
    <>
      {userData.id && (
        <div className={styles.user__stats}>
          <div className={`${styles.user__stats__repos} ${styles.stat}`}>
            <p className={styles.user__repo}>Repos</p>
            <h2 className={`${styles.user__repoCount} ${styles.count}`}>{userData.public_repos}</h2>
          </div>
          <div className={`${styles.user__stats__followers} ${styles.stat}`}>
            <p className={styles.user__followers}>Followers</p>
            <h2 className={`${styles.user__followersCount} ${styles.count}`}>{userData.followers}</h2>
          </div>
          <div className={`${styles.user__stats__following} ${styles.stat}`}>
            <p className={styles.user__following}>Following</p>
            <h2 className={`${styles.user__followingCount} ${styles.count}`}>{userData.following}</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default UserStats;

