import React from 'react';
import { useContext, useState } from 'react';
import { useRoute } from 'wouter';

import UserContext from '../contexts/user';

import '../styles/header.css';

const Logo = () => {
  return (
    <div className='header-logo'>
      <h1>Polias</h1>
    </div>
  )
}

const ContentItem = ({children}) => {
  return (
    <div className='header-content-item'>
      {children}
    </div>
  )
}

const Content = () => {
  return (
    <div className='header-content'>
      <ContentItem>
        <h4>About</h4>
      </ContentItem>
    </div>
  )
}

const Profile = () => {
  const user = useContext(UserContext);
  
  const {name = 'Unnamed'} = user;
  return (
    <div className='header-profile'>
      <span>{name}</span>
    </div>
  )
}

export default function TopBar() {
  
  return (
    <header className='common-header-container'>
      <div className='common-header narrow'>
        <Logo/>
        <Content/>
        <Profile/>
      </div>
    </header>
  )
}