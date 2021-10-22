import { useState, useEffect } from 'react';

class User {
  constructor({
    
  }) {
    
  }
  
  refresh() {
    return new User(this)
  }
}

const useForceUpdate = () => {
  const [index, setIndex] = useState(0)
  return () => setIndex(i=>i+1)
}

const useUser = () => {
  const [user, updateUser] = useState(new User())
  
  return user
}