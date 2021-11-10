import { useState, useEffect, useContext } from 'react';
import useSync from '../../hooks/sync';
import RoomContext from '../../contexts/room';

const UserList = () => {
  const code = useContext(RoomContext);
  const users = useSync(`room users `)
  
  return (
  <div className='user-list'>
  </div>
  )
}

const UserEntry = ({user: {name='Unknown', cardID}}) => {
  return (
    <div className='user-entry'>
      <Avatar cardID={cardID}/>
      <UserInfo name={name}/>
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

const UserInfo = ({name='Unknown', role='Spectating'}) => {
  return (
    <div class='user-info'>
      <div>{name}</div>
      <div className='muted'>{role}</div>
    </div>
  )
}

export default UserList