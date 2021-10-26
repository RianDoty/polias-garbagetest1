import React from 'react';

import useGame from '../hooks/game';

export default function GameMain({params}) {
  const {code} = params;
  const game = useGame(code);
  
  return (
    <>
      
    </>
  )
}