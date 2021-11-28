import { useState, useEffect, useContext } from "react";
import useSync from "../../hooks/sync";
import { useSocket } from '../../hooks/socket';

import RoomContext from '../../contexts/room';

const Chat = ({chatRoomName='lobby'}) => {
  const code = useContext(RoomContext)
  const [messages, setMessages] = useSync(`room chat ${chatRoomName} ${code}`)
  const socket = useSocket();
  
  const submitMessage = (content) => {
    setMessages(m => {
      
    })
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
      <div>{author}</div>
      <div>{content}</div>
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