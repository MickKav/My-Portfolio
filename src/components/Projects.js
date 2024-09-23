import React from 'react';
import projectsData from '../projectsData';

function Projects() {
    return (
        <div className="projects-container">

            <header className="projects-header">
                <h1>My Projects</h1>
            </header>

            <div className="projects-grid">
                {projectsData.map((project, index) => (

                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h2 className="project-title">{project.title}</h2>
                        <div className="project-links">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">View Live</a>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View on Github</a>
                        </div>
                    </div>
                    
                ))}
            </div>
            
        </div>
    );
}

export default Projects;