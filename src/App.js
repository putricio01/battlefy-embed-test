import React from 'react';
import './App.css';
import BattlefyEmbed from './BattlefyEmbed'; // Import the BattlefyEmbed component
import logo from './logo.svg'; // This line was already there

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Below is the BattlefyEmbed component added to the existing content */}
        <BattlefyEmbed embedUrl="https://battlefy.com/embeds/join/65c3dcb38c3b6c12fced1468" />
      </header>
    </div>
  );
}

export default App;

