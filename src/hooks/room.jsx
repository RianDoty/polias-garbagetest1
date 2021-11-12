import { useEffect, useContext } from 'react';

import useSync from './sync';
import { useSocket, useSocketFetch } from './socket';

import UserContext from '../contexts/user';

function stripFunctions(obj) {
  const clone = Object.assign({}, obj)
  Object.entries(clone).forEach((i,v) => {
    if (typeof(v) === 'function') delete clone[i];
  })
  return clone
}

export default function useRoom(code) {
  const socket = useSocket()
  const user = useContext(UserContext);
  
  useEffect(()=>{
    socket.emit('join room', code, stripFunctions(user));
    return ()=>socket.emit('leave room', code);
  }, [])
}