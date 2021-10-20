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
      <h1>yes</h1>
      <h2>haha</h2>
      <h3>wonderful</h3>
    </div>
  )
}

const Profile = () => {
  return (
    <div class='header-profile'>
      Rian
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