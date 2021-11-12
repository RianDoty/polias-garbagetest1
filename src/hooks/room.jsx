import React from 'react';

import useSync from './sync';
import { useSocketFetch } from './socket';

export default function useRoom(code) {
  useSocketFetch(`join room ${code}`)
}