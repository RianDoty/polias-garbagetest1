import { useState, useEffect, useContext } from 'react';
import useSync from '../../hooks/sync';
import RoomContext from '../../contexts/room';
import { useSocket } from '../../hooks/socket';

const UserList = () => {
  const code = useContext(RoomContext);
  const users = useSync(`room users ${code}`);
  const socket = useSocket();
  
  const entries = Object.values(users).map(u => (<UserEntry user={u} me={u.socketId === socket.id}/>))
  
  return (
  <div className='user-list'>
      {entries}
  </div>
  )
}

const UserEntry = ({user: {name='Unknown', cardID, role}, me}) => {
  return (
    <div className={`user-entry${me ? ' this-user' : ''}`}>
      <Avatar cardID={cardID}/>
      <UserInfo name={name} role={role}/>
    </div>
  )
}

const avatars = {
  0: 'https://cdn.glitch.me/35125d36-1414-4625-886d-50b6771f7d06%2Fbaseavatar.png?v=1636495856765',
  
}
const Avatar = ({cardID = 0}) => {
  const image = avatars[cardID] || avatars[0];
  
  return <img src={image} className='avatar'/>;
}

const UserInfo = ({name='Unknown', role='Chillin\''}) => {
  return (
    <div class='user-info'>
      <div>{name}</div>
      <div className='muted'>{role}</div>
    </div>
  )
}

export default UserList