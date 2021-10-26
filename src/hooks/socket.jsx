import {useState, useEffect, useMemo} from 'react';
import io from 'socket.io-client';
const socket = io({path: '/api'})

//Connects a list of functions to the socket
//Functions in {eventName: func} format
const useSocket = () => socket;

export const useSocketCallbacks = (callbackData) => {
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

export const useSocketFetch = (name, ...data) => {
  const ack = data.pop();
  
  useEffect(()=>{
    socket.emit(name, ...data, ack)
  },[]);
}

export default useSocket;