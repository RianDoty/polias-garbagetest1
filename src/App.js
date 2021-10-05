import React from 'react';
import logo from './logo.svg';
import io from 'socket.io-client';
import './App.css';

const isDev = process.env.NODE_ENV === 'development';

const socket = isDev 
? io.connect('http://localhost:3001') 
: io.connect();

const { useState, useEffect } = React

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

function App() {
  const [latest, setLatest] = useState()
  const forceUpdate = useForceUpdate()
  
  useEffect(()=>{
    socket.on('socket-connected', (sckt) => {
      setLatest(sckt)
      forceUpdate()
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
