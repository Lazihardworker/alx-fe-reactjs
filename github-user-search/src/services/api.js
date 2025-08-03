import axios from 'axios';
const users = await fetchUserData(username, location, minRepos);
const BASE_URL = 'https://api.github.com/users';

export const fetchGitHubUser = async (username) => {
  const response = await axios.get(`${BASE_URL}/${username}`);
  return response.data;
};

