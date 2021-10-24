import React from 'react';
import { useContext } from 'react';

import UserContext from '../contexts/user';

import '../styles/header.css';

const Logo = () => {
  return (
    <div class='header-logo'>
      <h1>Polias</h1>
    </div>
  )
}

const ContentItem = ({children}) => {
  return (
    <div class='header-content-item'>
      {children}
    </div>
  )
}

const Content = () => {
  return (
    <div class='header-content'>
      <ContentItem>
        <h4>About</h4>
      </ContentItem>
    </div>
  )
}

const Profile = () => {
  const user = useContext(UserContext);
  return (
    <div class='header-profile'>
      <span>{user.name}</span>
    </div>
  )
}

export default function TopBar() {
  return (
    <header class='common-header-container'>
      <div class='common-header narrow'>
        <Logo/>
        <Content/>
        <Profile/>
      </div>
    </header>
  )
}