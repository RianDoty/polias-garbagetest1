import React from 'react';

import '../styles/home.css';

const Section = ({children}) => (<div class='dash-section'>{children}</div>)

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
      
      </Section>
    </div>
  )
}