import React, { useState } from 'react';
import { projectsData, certificatesData } from '../projectsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTowerCell } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
    const [showCertificates, setShowCertificates] = useState(false);

    const toggleCertificates = () => {
        setShowCertificates(!showCertificates);
    }

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
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTowerCell} className="icon live-site-icon" />
                            </a>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="icon github-icon" />
                            </a>
                        </div>
                    </div>
                    
                ))}
            </div>

            <header className="certifications-header">
                <h2 onClick={toggleCertificates} style={{ cursor: 'pointer' }}>
                    My Certifications {showCertificates ? '▲' : '▼'}
                </h2>
            </header>

            {showCertificates && (
                <div className="certicates-grid">
                    {certificatesData.map((certificate, index) => (
                        <div className="certificate-card" key={index}>
                            <img src={certificate.image} alt={certificate.title} className="certificate-image" />
                            <h3 className="certificate-title">{certificate.title}</h3>
                            <p className="certificate-details">{certificate.details}</p>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}

export default Projects;