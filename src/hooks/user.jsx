import { useState, useEffect } from 'react';

const useUser = () => {
  const [name, setName] = useState('');
  
  return {name, setName}
}

export default useUser