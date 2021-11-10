import React from 'react';
import SyncProvider from '../components/sync-provider';

//Game-related stuff
import useGame from '../hooks/game';
import GameContext from '../contexts/game';
import RoomContext from '../contexts/room'

//Game components
import SideBar from '../components/game/side-bar'

//Style
import '../styles/game.css'

export default function GameMain({params}) {
  const {code} = params;
  const game = useGame(code);
  
  return (
    <>
      <RoomContext.Provider value={code}>
        <SideBar/>
      </RoomContext.Provider>
    </>
  )
}