import { useState } from 'react';

import './App.scss';

import Header from './components/Header/Header';
import Repo from './components/Repo/Repo';
import Searchbar from './components/Searchbar/Searchbar';
import UserInfo from './components/User/UserInfo';

function App() {
  const [userData, setUserData] = useState({});
  const [repoData, setRepoData] = useState('');
  return (
    <>
      <Header />
      <main className="container">
        <Searchbar onSubmit={(userData) => setUserData(userData)} />
        <UserInfo />
        <Repo />
        <p>{userData.bio}</p>
      </main>
    </>
  );
}

export default App;

