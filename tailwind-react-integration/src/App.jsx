import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center p-8">
      <div className="flex justify-center items-center gap-8 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="h-24 w-24 hover:scale-110 transition" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-24 w-24 hover:scale-110 transition" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-purple-600 mb-4">Vite + React + Tailwind</h1>
      <div className="bg-white p-6 rounded-lg shadow-md inline-block">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => setCount(count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="bg-gray-100 px-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <h2 className="text-2xl text-green-600 font-bold">Tailwind is working!</h2>

      <p className="mt-6 text-sm text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
