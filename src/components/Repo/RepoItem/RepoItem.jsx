import React from 'react';

import styles from './RepoItem.module.scss';

const RepoItem = ({ repoName, repoDesc, repoLink }) => {
  return (
    <div className={styles.repo}>
      <div className={styles.repo__details}>
        <h2 className={styles.repo__details__name}>{repoName}</h2>
        <p className={styles.repo__details__desc}>{repoDesc ? repoDesc : 'Not available'}</p>
      </div>
      <div className="repo__icon">
        <a href={repoLink} target="_blank">
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
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default RepoItem;

