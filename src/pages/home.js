import React from 'react';
import { useState, useContext } from 'react';
import useSocket from '../hooks/socket';


import UserContext from '../contexts/user';

import '../styles/home.css';

//Components//
const Section = ({children}) => (<div className='dash-section'>{children}</div>)
const BottomLogo = () => (<h3 className='bottom-logo'>Polias</h3>)
const Cell = ({children, wClass, header}) => (<div className={`cell ${wClass}`}><div class='dash-box'><CellHeader>{header}</CellHeader>{children}</div></div>)
const CellHeader = ({children}) => (<div className='cell-header'>{children}</div>)

//Displays a form for the user to enter their name
const NameEntry = ({user}) => {
  const [inpVal, updateInpVal] = useState('')
  const [err, setErr] = useState('')
  
  function onSubmit(e) {
    e.preventDefault()
    
    setErr('')
    if (inpVal) user.setName(inpVal);
    else setErr('Invalid name!');
  }
  
  let errComponent;
  if (err) {
    errComponent = <span className='error'>{err}</span>
  }
  
  return (
    <form onSubmit={onSubmit} className='name-entry-form'>
      <input type='text' value={inpVal} onChange={e=>{updateInpVal(e.target.value)}}/>
      <input type='submit' className='button' value='✓'/>
      <br/>
      {errComponent}
    </form>
  )
}

//Displays a form for naming and creating a room
const RoomCreator = () => {
  const [name, setName] = useState('');
  
  return (
    <form>
      <input type='text'/>
      <input type='submit' className='button'/>
    </form>
  )
}

//Displays a list of every ongoing room
const RoomList = () => {}

//Page
export default function Home() {
  const user = useContext(UserContext)
  
  return (
    <div className='narrow'>
      <Section>
        <h1>Hello, and welcome!</h1>
        <p>Polias is a deception game where <em>everyone</em> gets to have fun.</p>
        <p>Scheme, steal, and work to make bank the fastest to buy the legendary idol and ascend to greatness!</p>
      </Section>
      <h2>Get Started</h2>
      <Section>
        <Cell wClass='w-1-2' header='Enter your Name'>
          <NameEntry user={user}/>
        </Cell>
        <Cell wClass='w-3-5' header='Current Games'>
          <p>dolor sit amet or whatever</p>
        </Cell>
        <Cell wClass='w-2-5' header='Make a game'>
          <RoomCreator/>
        </Cell>
      </Section>
      <Section><BottomLogo/></Section>
    </div>
  )
}