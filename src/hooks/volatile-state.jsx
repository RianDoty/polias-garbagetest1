import { useState } from 'react';

const useForceUpdate = () => {
  const [index, updateIndex] = useState(0);
  
  return () => updateIndex(i=>i+1);
}

export default function useVolatileState(def) {
  //A state that refreshes EVERY time a change is made.
  const [state, setState] = useState(def);
  const forceUpdate = useForceUpdate()
  
  return (v) => {setState(v); forceUpdate()};
}