import { useState, useEffect } from 'react';

const PlayerList = () => {
  
  return (
  <div className='player-list'>
  </div>
  )
}

const PlayerEntry = ({player: {name='Unknown', cardID}}) => {
  return (
    <div className='player-entry'>
      <Avatar cardID={cardID}/>
      <PlayerInfo name={name}/>
    </div>
  )
}

const avatars = [
  'https://cdn.glitch.me/35125d36-1414-4625-886d-50b6771f7d06%2Fbaseavatar.png?v=1636495856765',
  
]
const Avatar = ({cardID = 0}) => {
  const image = avatars[cardID] || avatars[0];
  
  return <img src={image} className='avatar'/>;
}

const PlayerInfo = ({name='Unknown', role='Spectating'}) => {
  return (
    <div class='player-info'>
      <div>{name}</div>
      <div className='muted'>{role}</div>
    </div>
  )
}

export default PlayerList