import { useState, useEffect, useContext } from "react";
import useSync from "../../hooks/sync";

import RoomContext from '../../contexts/room';

const BottomChat = () => {
  const code = useContext(RoomContext)
  const messages = useSync(`room chat lobby ${code}`)
  
  return (
    <div className="chat">
      <MessageList/>
      <MessageEntry/>
    </div>
  );
};

const MessageList = ({messages=[]}) => {
  const messageComponents = messages.map(m => (<Message data={m}/>))
  
  return (
    <ul className='message-list'>
      {messageComponents}
    </ul>
  )
}

const Message = ({data: {user, content}}) => {
  return (
    <li className='message'>
      {content}
    </li>
  )
}

const MessageEntry = ({onSubmit}) => {
  return (
    <form className='message-entry' onSubmit={onSubmit}>
      <input/>
      <button/>
    </form>
  )
}

export default BottomChat;