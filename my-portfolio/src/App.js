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
      <section id="bio">
        <Bio />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      {/* Continue adding other components here ... */}
    </div>
  );
}

export default App;
