import { useState, useEffect } from 'react';

const PlayerList = () => {
  
  return (
  <div className='player-list'>
    <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
      <PlayerEntry player={{name: 'hehe'}}/>
  </div>
  )
}

const PlayerEntry = ({player: {name}}) => {
  return (
    <div className='player-entry'>
      {name}
    </div>
  )
}

export default PlayerList