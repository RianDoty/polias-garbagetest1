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

const MessageList = () => {
  return (
    <div className='message-list'>
    
    </div>
  )
}

const Message = ({data: {user, content}}) => {
  return (
    <div className='message'>
    
    </div>
  )
}

const MessageEntry = ({onSubmit}) => {
  return (
    <form className='message-entry' onSubmit={onSubmit}>
    
    </form>
  )
}