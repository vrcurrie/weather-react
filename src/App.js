import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Toronto" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://serene-wing-4e9b5a.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vanessa Currie
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/vrcurrie/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
