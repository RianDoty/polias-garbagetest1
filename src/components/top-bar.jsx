import React from 'react';

import '../styles/header.css';

const Logo = () => {
  return (
    <div class='header-logo'>
      <h1>Polias</h1>
    </div>
  )
}

const Content = () => {
  return (
    <div class='header-content'>
      
    </div>
  )
}

const Profile = () => {
  return (
    <div class='header-profile'>
      
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