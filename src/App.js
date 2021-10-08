import React from 'react';
import logo from './logo.svg';
import io from 'socket.io-client';
import './styles/App.css';
import useSocket from './hooks/use-socket.js'

const socket = io({path: '/api'})

const { useState, useEffect, useMemo } = React


//THIS WHOLE THING IS FOR THE CELL BROCHURE
//GET PICS OF ALL THE CELLS, MAKE A DRAG'N'DROP MATCHING GAME
//TODO: THIS SHIT

function App() {
  const [latest, setLatest] = useState()
  const [count, setCount] = useState(0)
  
  useSocket(socket, useMemo(()=>({
    'socket-connected': (id)=>{setCount(c=>c+1); setLatest(id)}
    
  }),[]))
  
  
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
      <main>
        Hahahahahahaha
      </main>
    </div>
  );
}

export default App;
