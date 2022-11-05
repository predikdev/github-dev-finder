import { useState } from 'react';

import './App.scss';

import Header from './components/Header/Header';
import Repo from './components/Repo/Repo';
import Searchbar from './components/Searchbar/Searchbar';
import UserInfo from './components/User/UserInfo';

function App() {
  const [userData, setUserData] = useState({});
  const [repoData, setRepoData] = useState({});

  const getUserDataHandler = (userData) => {
    setUserData(userData);
  };

  const getRepoDataHandler = (repoData) => {
    setRepoData(repoData);
  };

  return (
    <>
      <Header />
      <main className="container">
        <Searchbar getUserData={getUserDataHandler} getRepoData={getRepoDataHandler} />
        <UserInfo userData={userData} />
        <Repo repoData={repoData} />
      </main>
    </>
  );
}

export default App;

