import { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import useSync from "../../hooks/sync";
import { useSocket } from '../../hooks/socket';
import Avatar from './avatar'

import RoomContext from '../../contexts/room';

const Chat = ({chatRoomName='lobby'}) => {
  const code = useContext(RoomContext)
  const [messages, setMessages] = useSync(`room chat ${chatRoomName} ${code}`)
  const socket = useSocket();
  
  const currentIndex = Object.keys(messages).reduce(((big, cur) => cur > big ? cur : big), 0)
  const submitMessage = (content) => {
    const id = uuidv4();
    //Locally cache the message
    setMessages(m => {
      m[id] = {author: socket.id, content, index: currentIndex() + 1};
      return m;
    })
    
    socket.emit(`create-message ${chatRoomName}`, id, content)
  }
  
  return (
    <div className="chat">
      <MessageList/>
      <MessageEntry/>
    </div>
  );
};

const sampleMessages = {
  a: {
    author: 'me',
    content: 'all your base'
  },
  b: {
    author: 'myself',
    content: 'are belong'
  },
  c: {
    author: 'i',
    content: 'to us'
  }
}

const MessageList = ({messages=sampleMessages}) => {
  const messageComponents = Object.values(messages).map(m => (<Message data={m}/>))
  
  return (
    <ul className='message-list'>
      {messageComponents}
    </ul>
  )
}

const Message = ({data: {author, content}}) => {
  return (
    <li className='message'>
      <Avatar size='50px'/>
      <div className='message-container'>
        <div>{author}</div>
        <div>{content}</div>
      </div>
      
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

export default Chat;