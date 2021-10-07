import React from 'react';

const { useState, useEffect } = React;

const useSocket = (socket, callbackData) => {
  useEffect(()=>{
    if (!socket || !callbackData) return;
    
    const callbacks = Object.entries(callbackData);
    
    const iterate = fkey => callbacks.forEach(([key, callback]) => socket[fkey](key, callback))
    const connect = () => iterate('on');
    const disconnect = () => iterate('off');
    
    connect()
    return disconnect;
  },[socket, callbackData])
}

export default useSocket;