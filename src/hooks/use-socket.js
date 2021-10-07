import React from 'react';

const { useState, useEffect } = React;

const useSocket = (socket, callbacksData) => {
  useEffect(()=>{
    if (!(socket && callbacksData)) return;
    
    const callbacks = Object.entries(callbacksData);
    
    const iterate = function(func) {return callbacks.forEach(function([key, value]) {return func(key, value)});}
    
    iterate(socket.on);
    return () => iterate(socket.off);
  },[])
}

export default useSocket;