import React from 'react';
import { useState, useContext } from 'react';

import UserContext from '../contexts/user';

import '../styles/home.css';

const Section = ({children}) => (<div class='dash-section'>{children}</div>)
const BottomLogo = () => (<h3 class='bottom-logo'>Polias</h3>)
const Cell = ({children, wClass}) => (<div class={`cell ${wClass}`}><div class='dash-box'>{children}</div></div>)
const CellHeader = ({children}) => (<div class='cell-header'>{children}</div>)

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
    errComponent = <span class='error'>{err}</span>
  }
  
  return (
    <form onSubmit={onSubmit} class='name-entry-form'>
      <input type='text' value={inpVal} onChange={e=>{updateInpVal(e.target.value)}}/>
      <input type='submit' value='✓'/>
      {errComponent}
    </form>
  )
}

export default function Home() {
  const user = useContext(UserContext)
  
  return (
    <div class='narrow'>
      <Section>
        <h1>Hello, and welcome!</h1>
        <p>Polias is a deception game where <em>everyone</em> gets to have fun.</p>
        <p>Scheme, steal, and make bank the fastest to buy the legendary idol and ascend to greatness!</p>
      </Section>
      <h2>Get Started</h2>
      <Section>
        <Cell wClass='w-1-2'>
          <CellHeader>Enter your name</CellHeader>
          <NameEntry user={user}/>
        </Cell>
        <Cell wClass='w-3-5'>
          <CellHeader>Current games</CellHeader>
          <p>dolor sit amet or whatever</p>
        </Cell>
        <Cell wClass='w-2-5'>
          <CellHeader>Make a game</CellHeader>
          <p>dolor sit amet or whatever</p>
        </Cell>
      </Section>
      <Section><BottomLogo/></Section>
    </div>
  )
}