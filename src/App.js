import React from 'react';
import BackgroundImage from "./features/backgroundImage/BackgroundImage";
import Weather from "./features/weather/Weather";

import './App.css';

function App() {
  return (
    <div className="App">
      <BackgroundImage/>
      <header className="App-header">
       <Weather/> 
      <h1>Daily Dash on the way!</h1>
      </header>
    </div>
  );
}

export default App;
