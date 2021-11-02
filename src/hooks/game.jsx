import { useState } from 'react';

import {useSocketFetch, useSocketCallbacks} from './socket';
import useVolatileState from './volatile-state';

export default function useGame(code) {
  const [state, setState] = useState(0);
  const [players, setPlayers] = useVolatileState({});
  
  //Fetch data
  useSocketFetch(``, (gData)=>{
    const {state, players} = gData;
    
    setState(state);
    setPlayers(players);
  })
  
  //Sync data
  useSocketCallbacks({
    'update-game-state': (s) => setState(s),
    'update-game-players': (p) => setPlayers(p)
  })
  
  return {state, setState, players, setPlayers}
}