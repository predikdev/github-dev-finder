import React from 'react';

import RepoItem from '../RepoItem/RepoItem';

const RepoList = ({ repoData }) => {
  return (
    <div className="repos__list">
      {repoData.map((repo) => {
        // console.log(repo);
        return <RepoItem key={repo.id} repoName={repo.name} repoDesc={repo.description} repoLink={repo.html_url} />;
      })}
    </div>
  );
};

export default RepoList;

