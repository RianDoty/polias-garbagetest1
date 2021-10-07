import React from 'react';
import logo from './logo.svg';
import io from 'socket.io-client';
import './App.css';

const socket = io({path: '/api'})

const { useState, useEffect } = React

function App() {
  const [latest, setLatest] = useState()
  const [count, setCount] = useState(0)
  
  useEffect(()=>{
    socket.on('socket-connected', (socketID) => {
      setLatest(socketID)
      setCount(c => c + 1)
    })
    
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and your changes will live-update automatically.
          Please don't close me!
        </p>
        <span>latest is: {latest}</span>
        <span>count is : {count}</span>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
