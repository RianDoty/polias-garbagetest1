import React from "react";
import logo from "./logo.svg";
import { Router } from "wouter";
import PageRouter from "./components/router";

import "./styles/App.css";
import useSocket from "./hooks/use-socket.js";
import useHashLocation from "./hooks/wouter-hash";

const { useState, useEffect, useMemo } = React;

function App() {
  const [latest, setLatest] = useState();
  const [count, setCount] = useState(0);

  useSocket({
    "socket-connected": id => {
      setCount(c => c + 1);
      setLatest(id);
    }
  });

  return (
    <div className="App">
      <Router hook={useHashLocation}>
        <header className="App-header"></header>
        <main className="App-main">
          <PageRouter />
        </main>
      </Router>
    </div>
  );
}

export default App;
