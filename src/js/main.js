'use strict';
import moment from 'moment';

const form = document.getElementById('user-input');

function getUsername() {
  const username = document.querySelector('.username-input').value;
  return username;
}

async function getUserData(input) {
  const username = input.value;
  console.log(username);

  const res = await fetch(`https://api.github.com/users/${username}`);
  const results = await res.json();

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return results;
}

async function renderData() {
  const data = await getUserData(username);

  // Render user informations data
  const userAvatar = document.querySelector('.user__details--avatar');
  const userName = document.querySelector('.user__name');
  const userNickname = document.querySelector('.user__nickname');
  const userJoined = document.querySelector('.user__joined');

  // Create user avatar
  const avatar = document.createElement('img');
  avatar.classList.add('avatar');
  avatar.setAttribute('src', data.avatar_url);
  userAvatar.appendChild(avatar);

  // Format date for "people"
  let formatedDate = moment(data.created_at).utc().format('ll');

  userName.innerHTML = data.name;
  userNickname.innerHTML = `@` + data.login;
  userJoined.innerHTML = `Joined: ` + formatedDate;

  // data.map((repo, index) => {
  //   user.innerHTML = `
  //   <div class="repo__body">
  //     <h2 class="repo__title">${repo.full_name}</h2>
  //     <p class="repo__description"></p>
  //   </div>
  //   `;
  // });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getUsername();
  getUserData(username);
  renderData();
});

