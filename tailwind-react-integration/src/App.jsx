import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css';
import UserProfile from './components/UserProfile'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>

      
      <UserProfile />

      
    </div>
  );
}

export default App;

