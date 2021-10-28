import { useState } from 'react';

const useUser = () => {
  const [name, setName] = useState('Unnamed');
  
  return {name, setName}
}

export default useUser