import { useState, useEffect, useContext } from "react";
import useSync from "../../hooks/sync";

const BottomChat = () => {
  return (
    <div className="bottom-chat">
      <MessageList/>
      <MessageEntry/>
    </div>
  );
};

const MessageList = ({messages}) => {
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
    
    </form>
  )
}

export default BottomChat;