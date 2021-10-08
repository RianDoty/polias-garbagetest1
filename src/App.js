import React from 'react';
import logo from './logo.svg';
import io from 'socket.io-client';
import { } from 'wouter';

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
        
      </header>
      <main className='App-main'>
        
      </main>
    </div>
  );
}

export default App;
