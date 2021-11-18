import React from 'react';
import SyncProvider from '../components/sync-provider';

//Game-related stuff
import useGame from '../hooks/game';
import useRoom from '../hooks/room';
import GameContext from '../contexts/game';
import RoomContext from '../contexts/room'

//Game components
import SideBar from '../components/game/side-bar'
import MiddleContent from '../components/game/middle-content'

//Style
import '../styles/game.css'

export default function RoomMain({params}) {
  const {code} = params;
  const room = useRoom(code);
  
  return (
    <>
      <RoomContext.Provider value={code}>
        <SideBar/>
        <MiddleContent/>
      </RoomContext.Provider>
    </>
  )
}