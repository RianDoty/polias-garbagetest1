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

const PlayerEntry = ({player: {name='Unknown', cardID}}) => {
  return (
    <div className='player-entry'>
      <Avatar cardID={cardID}/>
      {name}
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
    <>
      <p>{name}</p>
      <p className='muted'></p>
    </>
  )
}

export default PlayerList