import { useState } from 'react';

import useSocketFetch from './socket';
import useVolatileState from './volatile-state';

export default function useGame(code) {
  const [state, setState] = useState(0);
  const [users, setUsers] = useVolatileState({});
  
  //Fetch data about the game from the server
  useSocketFetch('get-game', code, (gData)=>{
    
  })
  
  return {state, setState, users, setUsers}
}