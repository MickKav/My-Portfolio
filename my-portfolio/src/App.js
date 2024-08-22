import React from 'react';
import './App.css';
import {Header, Bio, Projects} from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Projects />
      {/* Continue adding other components here ... */}
    </div>
  );
}

export default App;
