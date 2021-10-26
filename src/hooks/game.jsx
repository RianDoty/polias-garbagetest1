import { useState } from 'react';

export default function useGame() {
  const [state, setState] = useState(0);
  const [users, setUsers] = useState({});
  
  return {state, setState, users, setUsers}
}