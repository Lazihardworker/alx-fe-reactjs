import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import { fetchGitHubUser } from './services/api';

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    try {
      setError('');
      const data = await fetchGitHubUser(username);
      setUserData(data);
    } catch (err) {
      setUserData(null);
      setError('User not found.');
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {userData && (
        <div style={{ marginTop: '1rem' }}>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h2>{userData.name || userData.login}</h2>
          <p>
            <a href={userData.html_url} target="_blank" rel="noreferrer">
              View Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;