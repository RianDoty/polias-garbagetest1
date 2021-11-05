import { useState } from 'react';

import {useSocketFetch, useSocketCallbacks, useSocket} from './socket';
import useVolatileState from './volatile-state';

export default function useGame(code) {
  const [state, setState] = useState(0);
  const [players, setPlayers] = useVolatileState({});
  const socket = useSocket()
  
  //Fetch data
  useSocketFetch(`sync subscribe game ${code}`, (gData)=>{
    const {state, players} = gData;
    
    setState(state);
    setPlayers(players);
  }, ()=>socket.emit(`sync unsubscribe game ${code}`))
  
  //Sync data
  useSocketCallbacks({
    'update-game-state': (s) => setState(s),
    'update-game-players': (p) => setPlayers(p)
  })
  
  return {state, setState, players, setPlayers}
}