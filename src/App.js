import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Made by Vanessa Ctrl+C to Stop, npm start to Start</h1>
        <Weather city="Manila" />
      </header>
    </div>
  );
}

export default App;
