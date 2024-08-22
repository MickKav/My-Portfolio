import App from '../App';
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Michael Kavanagh</h1>
      <nav>
        <ul>
          <li><a href="#bio">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

