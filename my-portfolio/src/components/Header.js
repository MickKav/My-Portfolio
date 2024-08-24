import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <>
        <div side-bar>
            <nav className="side-nav">
                <ul>
                    <li><Link to="/bio">Bio</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            {/* Home link with house icon */}
            <Link className="home-icon" to="/">
                <FontAwesomeIcon icon={faHouse} className="home-icon" />
            </Link>
        </div>
        <div className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </div>
        </>
    );
}

export default Header;