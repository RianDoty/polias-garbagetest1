import React from 'react';
import { Switch, Route } from 'wouter';

//Page imports
import Home from '../pages/home'

export default function PageRouter() {
  return (
    <Switch>
      <Route path='/' component={Home}/>
    </Switch>
  )
}