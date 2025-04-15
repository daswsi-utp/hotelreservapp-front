import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="w-24 h-24 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="w-24 h-24 hover:drop-shadow-[0_0_2em_#61dafbaa]" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold text-gray-800 mb-8">Vite + React + Tailwind</h1>

      <div className="bg-white p-8 rounded-lg shadow-md text-center mb-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="font-mono bg-gray-100 px-2 py-1 rounded">src/App.jsx</code> to test HMR
        </p>
      </div>

      <p className="text-gray-500 text-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;