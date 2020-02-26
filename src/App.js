import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

function App() {
  const seconds = 80;
  return (
    <div className="App">
      <p>
        Salut Harold
      </p>
      <Timer
        seconds={seconds}
      />
    </div>
  );
}

export default App;
