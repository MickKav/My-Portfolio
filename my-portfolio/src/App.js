import React from 'react';
import './assets/styles/theme.css';
import {
  Header, 
  Bio, 
  Projects,
  Contact,
  Landing
  } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404 Page Not Found Route */}
            <Route path="*" element={<h2>Page Not Found</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;