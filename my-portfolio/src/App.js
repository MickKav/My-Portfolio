import React from 'react';
import './App.css';
import {
  Header, 
  Bio, 
  Projects,
  Contact
  } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Projects />
      <Contact />
      {/* Continue adding other components here ... */}
    </div>
  );
}

export default App;
