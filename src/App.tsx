import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Timer from './components/Timer';

function App() {
  const [isDisplay, setIsDisplay] = useState(true);
  const handleToggleDisplay = () => {
    setIsDisplay(!isDisplay);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
        <Counter></Counter>
        <span>
          コンポーネントを
          <button onClick={handleToggleDisplay}>
            {isDisplay ? "Unmount" : "Mount"}
          </button>
        </span>
        {isDisplay && <Timer setIsDisplay={setIsDisplay} />}
      </header>
    </div>
  );
}

export default App;
