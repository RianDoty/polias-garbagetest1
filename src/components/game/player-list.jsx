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

const avatars = [
  'https://cdn.glitch.me/35125d36-1414-4625-886d-50b6771f7d06%2Fbaseavatar.png?v=1636495856765',
  
]
const clamp = (num, min, max) => Math.max(Math.min(num, max), min)
const Avatar = ({cardID = 0}) => {
  cardID = clamp(cardID, 0, avatars.length);
  
  
}

export default PlayerList