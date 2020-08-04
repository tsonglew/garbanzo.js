import React from "react";
import "./App.css";
import Clock from "./Clock";
import logo from "./logo.svg";
import XpathList from "./XpathList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit  <code>garbanzo.js</code> and save to reload.
        </p>
        <Clock />
        <XpathList />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
