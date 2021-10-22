import React from 'react';

import '../styles/home.css';

const Section = ({children}) => (<div class='dash-section'>{children}</div>)
const BottomLogo = () => (<h3 class='bottom-logo'>Polias</h3>)
const Cell = ({children, wClass}) => (<div class={`cell ${wClass}`}><div class='dash-box'>{children}</div></div>)
const CellHeader = ({children}) => (<div class='cell-header'>{children}</div>)


export default function Home() {
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
          
          <h1>Enter your name</h1>
        </Cell>
        <Cell wClass='w-3-5'>
          <h1>Lorem Ipsum</h1>
          <p>dolor sit amet or whatever</p>
        </Cell>
        <Cell wClass='w-2-5'>
          <h1>Lorem Ipsum</h1>
          <p>dolor sit amet or whatever</p>
        </Cell>
      </Section>
      <Section><BottomLogo/></Section>
    </div>
  )
}