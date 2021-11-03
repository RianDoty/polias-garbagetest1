import { useState, useEffect } from 'react';
import { useSocket } from './socket'

const useSync = (keyword) => {
  const socket = useSocket();
  
  useEffect(()=>{
    socket.emit(`sync subscribe ${keyword}`)
  },[keyword])
}