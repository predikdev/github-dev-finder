import React from 'react';

const RepoList = () => {
  return (
    <div className="repos__list">
      <div className="repos__list--repo | repo">
        <div className="repo__details">
          <h2 className="repo__details--name"></h2>
          <p className="repo__details--desc"></p>
        </div>
        <div className="repo__icon">
          <a href="">
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
      <div className="repos__list--repo | repo">
        <div className="repo__details">
          <h2 className="repo__details--name"></h2>
          <p className="repo__details--desc"></p>
        </div>
        <div className="repo__icon">
          <a href="">
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
    </div>
  );
};

export default RepoList;

