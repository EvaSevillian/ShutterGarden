import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        {}
        <img
          src="/ShutterGarden.png"
          alt="ShutterGarden Logo"
          className="logo"
        />
      </header>

    </div>
  );
}

export default App;

