import { useState, useEffect } from 'react';
import { useSocket } from './socket'

const useSync = (keyword) => {
  const socket = useSocket();
  
  useEffect(()=>{
    socket.emit(`sync subscribe ${keyword}`);
    return () => socket.emit(`sync unsubscribe ${keyword}`);
  },[keyword])
}