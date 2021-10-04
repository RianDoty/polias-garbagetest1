import React from 'react';
import logo from './logo.svg';
import io from 'socket.io-client';
import './App.css';
const socket = io()

const { useState, useEffect } = React

function App() {
  const [latest, setLatest] = useState()
  
  useEffect(()=>{
    socket.on('socket-connected', ()=>{
      setLatest
    })
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
          Edit <code>src/App.js</code> and your changes will live-update automatically.
        </p>
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
