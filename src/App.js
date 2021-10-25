import React from "react";
import logo from "./logo.svg";
import { Router, useRoute } from "wouter";
import PageRouter from "./components/router";

import "./styles/App.css";
import useSocket from "./hooks/socket";
import useUser from "./hooks/user";

import TopBar from "./components/top-bar";

import UserContext from "./contexts/user";

function App() {
  const user = useUser()
  
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Router>
          <TopBar />
          <main className="app-main">
            <PageRouter />
          </main>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
