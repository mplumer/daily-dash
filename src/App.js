import React from 'react';
import BackgroundImage from "./features/backgroundImage/BackgroundImage";
import Weather from "./features/weather/Weather";
import Quote from "./features/quote/Quote"

import './App.css';

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <header>
        <Weather />
      </header>
      <main>
        <div>Journal</div>
      </main>
      <footer>
        <Quote />
      </footer> 
    </div>
  );
}

export default App;
