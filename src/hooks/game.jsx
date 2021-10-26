import { useState } from 'react';

import useVolatileState from './volatile-state';

export default function useGame() {
  const [state, setState] = useState(0);
  const [users, setUsers] = useVolatileState({});
  
  return {state, setState, users, setUsers}
}