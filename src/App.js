import React from 'react';
import {SideBySide} from './Components';
import './App.css';

function App() {
  document.body.style = 'background: darkgray;';

  return (
    <div className="App">
      <SideBySide />
    </div>
  );
}

export default App;
