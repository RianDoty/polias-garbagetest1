import React from 'react';

import useSync from './sync';
import { useSocket, useSocketFetch } from './socket';

export default function useRoom(code) {
  const socket = useSocket()
  useSocketFetch('join room', code, null, ()=>socket.emit('leave room', code));
}