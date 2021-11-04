import React from 'react';
import SyncProvider from '../components/sync-provider';

//Game-related stuff
import useGame from '../hooks/game';
import GameContext from '../contexts/game';

export default function GameMain({params}) {
  const {code} = params;
  const game = useGame(code);
  
  return (
    <>
      <GameContext.Provider value={game}>
      
      </GameContext.Provider>
    </>
  )
}