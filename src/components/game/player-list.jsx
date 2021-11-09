import { useState, useEffect } from 'react';

const PlayerList = () => {
  
  return (
  <div className='player-list'>
    
  </div>
  )
}

const PlayerEntry = ({player: {name}}) => {
  return (
    <div className='player-entry'>
      {name}
    </div>
  )
}

export default PlayerList