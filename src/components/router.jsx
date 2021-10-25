import React from 'react';
import { Switch, Route, } from 'wouter';

//Page imports
import Home from '../pages/home'
import Game from '../pages/game'

export default function PageRouter() {
  return (
    <Switch>
      <Route path='/' component={Home}/>
      <Route path='/game/:code*' component={Game}/>
    </Switch>
  )
}