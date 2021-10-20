import React from "react";
import logo from "./logo.svg";
import { Router } from "wouter";
import PageRouter from "./components/router";

import "./styles/App.css";
import useSocket from "./hooks/socket";
import useHashLocation from "./hooks/wouter-hash";

import TopBar from './components/top-bar';

const { useState, useEffect, useMemo } = React;




function App() {
  const [name, setName] = useState('unknown')

  return (
    <div className="App">
      <Router hook={useHashLocation}>
        <TopBar/>
        <main className="app-main">
          <PageRouter />
        </main>
      </Router>
    </div>
  );
}

export default App;
