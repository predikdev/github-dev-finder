import { useState, useEffect } from 'react';

import styles from './Searchbar.module.scss';

const Searchbar = ({ onSubmit }) => {
  const [userInput, setUserInput] = useState('');
  const [userData, setUserData] = useState('');
  const [userRepo, setUserRepo] = useState('');

  const fetchUser = async () => {
    const response = await fetch(`https://api.github.com/users/${userInput}`);
    const json = await response.json();
    setUserData(json);
    console.log(json);
  };

  const fetchUserRepo = async () => {
    const response = await fetch(`https://api.github.com/users/${userInput}/repos`);
    const json = await response.json();
    setUserRepo(json);
    console.log(json);
  };

  const fetchData = async (e) => {
    e.preventDefault();
    fetchUser();
    fetchUserRepo();
    onSubmit(userData);
  };

  return (
    <section className={styles.searchbar}>
      <form id="user-input" className={styles.searchbar__form} onSubmit={fetchData}>
        <input
          type="text"
          name="username"
          id="username"
          className={styles.username__input}
          placeholder="Search username..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </form>
      <button type="submit" form="user-input" className="btn">
        Search
      </button>
    </section>
  );
};

export default Searchbar;

