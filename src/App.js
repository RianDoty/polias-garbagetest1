import React from "react";
import logo from "./logo.svg";
import { Router, useRoute } from "wouter";
import PageRouter from "./components/router";

import "./styles/App.css";
import {useSocket, useSocketFetch} from "./hooks/socket";
import useUser from "./hooks/user";

import TopBar from "./components/top-bar";

import UserContext from "./contexts/user";

function App() {
  const user = useUser()
  
  const isInGame = useRoute().indexOf('game') != -1;
  
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Router>
          <TopBar narrowOff={isInGame}/>
          <main className="app-main">
            <PageRouter />
          </main>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
