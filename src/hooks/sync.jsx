import { useState, useEffect } from 'react';
import { useSocket, useSocketCallbacks } from './socket'
import useForceUpdate from './force-update';


const useSync = (keyword) => {
  const socket = useSocket();
  const [store, setStore] = useState();
  const forceUpdate = useForceUpdate();
  
  const updateStore = (v) => {setStore(v); forceUpdate()}
  
  useEffect(()=>{
    socket.emit(`sync subscribe ${keyword}`, s=>setStore(s));
    return () => socket.emit(`sync unsubscribe ${keyword}`);
  },[keyword])
  
  useSocketCallbacks({
    [`sync create ${keyword}`]: (key, value)=>{},
    [`sync update ${keyword}`]: (key, prop, value)=>{},
    [`sync delete ${keyword}`]: (key)=>{},
  })
  
  return store
}