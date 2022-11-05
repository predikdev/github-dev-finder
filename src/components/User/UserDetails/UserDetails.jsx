import React from 'react';
import moment from 'moment';

import styles from './UserDetails.module.scss';

const UserInfo = ({ userData }) => {
  const joined = userData.created_at;
  const date = moment(joined).utc().format('ll');

  return (
    <>
      {userData.id && (
        <div className={styles.user__details}>
          <div className={styles.user__avatar}>
            <img src={userData.avatar_url} alt="User avatar" className="avatar" />
          </div>
          <div className={styles.user__desc}>
            <h1 className={styles.user__name}>{userData.name}</h1>
            <p className={styles.user__nickname}>@{userData.login}</p>
            <p className={styles.user__joined}>{'Joined: ' + date}</p>
          </div>
        </div>
      )}
      {userData.bio && <p className={styles.user__bio}>{userData.bio}</p>}
    </>
  );
};

export default UserInfo;

