import { useState, useEffect } from 'react';
import { useSocket } from './socket'

const useSync = (keyword) => {
  const socket = useSocket();
  const [store, setStore] = useState();
  
  useEffect(()=>{
    socket.emit(`sync subscribe ${keyword}`, s=>setStore(s));
    return () => socket.emit(`sync unsubscribe ${keyword}`);
  },[keyword])
  
  return store
}