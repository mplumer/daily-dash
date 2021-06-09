import React from 'react';
import logo from './logo.svg';
import BackgroundImage from "./features/backgroundImage/BackgroundImage";

import './App.css';

function App() {
  return (
    <div className="App">
      <BackgroundImage>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h1>Daily Dash on the way!</h1>
      </header>
      </BackgroundImage>
    </div>
  );
}

export default App;
