import React, { useState, useEffect } from 'react';
import '../assets/styles/Header.css';
import '../assets/styles/theme.css';
import { Link } from 'react-router-dom';

function Header() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <header className="header">
        <h1>Michael Kavanagh</h1>
        <div className='nav-container'>
            <nav className='nav-bar'>
                <ul className='unordered-list'>
                    <li><Link to="/">Bio</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
        <div className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </div>
        </header>
    );
}

export default Header;

