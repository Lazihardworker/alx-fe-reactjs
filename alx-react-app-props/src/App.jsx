/*import WelcomeMessage from './components/WelcomeMessage';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WelcomeMessage />

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      


    </>
  )
}*/
/*import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <>
      <WelcomeMessage />
    </>
  );
}

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;*/

/*import React from "react";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <h1>Welcome to User Profiles</h1>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Bob" age="30" bio="A passionate chef and traveler" />
      <UserProfile name="Charlie" age="22" bio="Enjoys coding and gaming" />
    </div>
  );
}

export default App;*/

import UserContext from "./UserContext";
import UserProfile from "./components/UserProfile";

function App() {
  const userData = {
    name: "Alice",
    age: 25,
    bio: "Loves hiking and photography"
  };

  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;




