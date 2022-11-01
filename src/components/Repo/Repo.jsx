import React from 'react';

import styles from './Repo.module.scss';
import RepoList from './RepoList/RepoList';

const Repo = () => {
  return (
    <section className={styles.repositories}>
      <button className="btn">Show repositories</button>
      {/* <RepoList /> */}
    </section>
  );
};

export default Repo;

