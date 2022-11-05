import React from 'react';

import RepoList from './RepoList/RepoList';

const Repo = ({ repoData }) => {
  return (
    <>
      {repoData.length && (
        <section>
          <RepoList repoData={repoData} />
        </section>
      )}
    </>
  );
};

export default Repo;

