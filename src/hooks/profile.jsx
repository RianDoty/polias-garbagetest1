import {useState, useEffect} from 'react';

const profile = {
  name: 'unknown'
}

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const useProfile = () => {
  const forceUpdate = useForceUpdate()
  
}

export default useProfile;