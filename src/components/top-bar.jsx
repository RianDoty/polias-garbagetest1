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
    <header class='common-header'>
      <Logo/>
      <div class='header-content'></div>
      <div class='header-profile'></div>
    </header>
  )
}