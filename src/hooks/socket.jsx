import {useState, useEffect} from 'react';
import io from 'socket.io-client';
const socket = io({path: '/api'})

const useSocket = (callbackData) => {
  useEffect(()=>{
    if (!socket || !callbackData) return;
    
    const callbacks = Object.entries(callbackData);
    
    const iterate = fkey => callbacks.forEach(([key, callback]) => socket[fkey](key, callback))
    const connect = () => iterate('on');
    const disconnect = () => iterate('off');
    
    connect()
    return disconnect;
  },[callbackData])
}

export default useSocket;