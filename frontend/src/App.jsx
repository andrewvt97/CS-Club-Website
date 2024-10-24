import { useState, useEffect } from 'react';
import axios from 'axios';  // Import Axios
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('');  // State to store the backend message

  // Fetch data from the backend on component mount using Axios
  useEffect(() => {
    axios.get('http://localhost:3000')  // Assuming your backend is running on port 3000
      .then((response) => {
        setMessage(response.data);  // Set the fetched message in state
      })
      .catch((error) => {
        console.error('Error fetching from backend:', error);
      });
  }, []);

  return (
    <>
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
        <p>{message}</p> {/* Display the message from backend here */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
