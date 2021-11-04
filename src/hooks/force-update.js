import {useState} from 'react';

export default function useForceUpdate() {
  const [index, updateIndex] = useState(0);
  
  return () => updateIndex(i=>{console.log(i); return i+1;});
}
