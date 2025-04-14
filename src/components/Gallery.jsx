import React from 'react';
import './Gallery.css';
import githubIcon from '../assets/githubimage.png';

function Project({ title, image, description, githubLink, deployedLink }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-links">
          <a href={githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
            <img id="github" src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
          <a href={deployedLink} className="project-link project-link-right" target="_blank" rel="noopener noreferrer">
            View Deployed Project
          </a>
        </div>
      </div>
    </div>
  );
}
export default Project;