import { useEffect, useContext } from 'react';

import useSync from './sync';
import { useSocket, useSocketFetch } from './socket';

export default function useRoom(code) {
  const socket = useSocket()
  
  useEffect(()=>{
    socket.emit('join room', code);
    return ()=>socket.emit('leave room', code);
  }, [])
}