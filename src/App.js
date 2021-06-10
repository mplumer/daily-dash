import React from 'react';
import BackgroundImage from "./features/backgroundImage/BackgroundImage";
import Weather from "./features/weather/Weather";
import Quote from "./features/quote/Quote"
import Error from "./features/error/Error";
import Journal from "./features/journal/Journal";

import './App.css';

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <header>
        <Error />
        <Weather />
      </header>
      
      <main>
        <Journal />
      </main>
      
      <footer>
        <Quote />
      </footer>
    </div>
  );
}

export default App;
