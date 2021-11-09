import { useState, useEffect } from 'react';

import PlayerList from './player-list';

const SideBar = ({players}) => {
  return ( 
    <div className='left-side-bar'>
      <PlayerList/>
    </div>
  )
}

export default SideBar;