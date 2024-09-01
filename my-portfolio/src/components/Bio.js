import React from 'react';
import portfolioPic from '../assets/images/portfolio-pic.jpg';

function Bio() {
    return (
        <div className="bio-container">
            <header className="bio-header">
                <h1>About Me</h1>
            </header>

            <section className="bio-profile bio-section">
                <img src={portfolioPic} className="bio-profile-pic" alt="Profile" />
                <h2>Introduction</h2>
                <p>
                    Hi! I'm Michael, a passionate developer with a knack for creating beautiful, responsive, and functional web applications. With a strong background in [your skills or field], I enjoy turning complex problems into simple, elegant solutions.
                </p>
            </section>

            <section className="bio-section">
                <h2>Background</h2>
                <p>My journey in tech  . . . </p>
            </section>

            <section className="bio-section">
                <h2>Skills</h2>
                <p>My technical skills include ...</p>
            </section>
        </div>
    );
}

export default Bio;