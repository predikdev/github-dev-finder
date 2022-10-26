'use strict';
import moment from 'moment';

const form = document.getElementById('user-input');

// Grab value from user input and return it
function getUsername() {
  const username = document.querySelector('.username-input').value;
  return username;
}

// Fetch data with given username
async function getUserData(input) {
  const username = input.value;

  const res = await fetch(`https://api.github.com/users/${username}`);
  const results = await res.json();

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return results;
}

async function getRepoData(input) {
  const username = input.value;

  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=5`);
  const results = await res.json();

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return results;
}

// Show data in the DOM
async function renderUserData() {
  const {
    avatar_url,
    bio,
    blog,
    created_at,
    email,
    followers,
    following,
    location,
    login,
    name,
    public_repos,
    company,
  } = await getUserData(username);

  function checkData(element, resData) {
    if (resData != null) {
      element.innerHTML = resData;
    } else {
      element.innerHTML = 'Not available';
    }
  }

  // Show user avatar
  const userAvatar = document.querySelector('.avatar');
  userAvatar.setAttribute('src', avatar_url);

  // Show users name
  const userName = document.querySelector('.user__name');
  checkData(userName, name);

  // Show users nickname
  const userNickname = document.querySelector('.user__nickname');
  checkData(userNickname, login);

  // Show when user joined github and format date
  const userJoined = document.querySelector('.user__joined');
  let formatedDate = moment(created_at).utc().format('ll');
  userJoined.innerHTML = `Joined: ` + formatedDate;

  // Show users bio
  const userBio = document.querySelector('.user__bio');
  checkData(userBio, bio);

  // Show how many public repos user has
  const userRepoCount = document.querySelector('.user__repoCount');
  checkData(userRepoCount, public_repos);

  //Show how many followers user has
  const userFollowerCount = document.querySelector('.user__followersCount');
  checkData(userFollowerCount, followers);

  // Show how many devs user follows
  const userFollowingCount = document.querySelector('.user__followingCount');
  checkData(userFollowingCount, following);

  // Show users location
  const userLocation = document.querySelector('.user__link--location');
  checkData(userLocation, location);

  // Show users website
  const userWebsite = document.querySelector('.user__link--website');
  checkData(userWebsite, blog);

  // Show users email
  const userEmail = document.querySelector('.user__link--email');
  checkData(userEmail, email);

  // Show users company
  const userCompany = document.querySelector('.user__link--company');
  checkData(userCompany, company);
}

// Show data in the DOM
async function renderRepoData() {
  const data = await getRepoData(username);
  console.log(data);

  const reposList = document.querySelector('.repos__list');

  const showRepos = data.map((repo) => {
    return `
    <div class="repos__list--repo | repo">
      <div class="repo__details">
        <h2 class="repo__details--name">${repo.name}</h2>
        <p class="repo__details--desc">${repo.description}</p>
      </div>
      <div class="repo__icon">
        <a href="">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0ea5e9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div> `;
  });

  reposList.innerHTML = showRepos;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getUsername();
  getUserData(username);
  getRepoData(username);
  renderUserData();
  renderRepoData();
});

// Button Show Repositories handler
const showReposButton = document.querySelector('.show__repos');
const reposList = document.querySelector('.repos__list');
showReposButton.addEventListener('click', () => {
  reposList.classList.toggle('open');
});

