import React from 'react';

import '../styles/header.css';

const Logo = () => {
  return (
    <div class='header-logo'>
      <h1>Polias</h1>
    </div>
  )
}

export default function TopBar() {
  return (
    <header class='common-header-container'>
      <div class='common-header narrow'>
        <Logo/>
        <div class='header-content'></div>
        <div class='header-profile'></div>
      </div>
    </header>
  )
}