import React from 'react';
import PropTypes from 'prop-types';
import './Gallery.css';
import githubIcon from '../assets/githubimage.png';

function Gallery({ title, image, description, githubLink, deployedLink }) {
  return (
    <div className="gallery-card">
      <img
        src={image || 'https://via.placeholder.com/600x400?text=No+Image'}
        alt={title || 'Gallery Item'}
        className="gallery-image"
      />
      <div className="gallery-content">
        <h3 className="gallery-title">{title || 'Untitled'}</h3>
        <p className="gallery-description">{description || 'No description available.'}</p>
        <div className="gallery-links">
          <a
            href={githubLink || '#'}
            className="gallery-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
          >
            <img id="github" src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
          <a
            href={deployedLink || '#'}
            className="gallery-link gallery-link-right"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Deployed Gallery"
          >
            View Deployed Gallery
          </a>
        </div>
      </div>
    </div>
  );
}

Gallery.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  githubLink: PropTypes.string,
  deployedLink: PropTypes.string,
};

Gallery.defaultProps = {
  title: 'Untitled',
  image: 'https://via.placeholder.com/600x400?text=No+Image',
  description: 'No description available.',
  githubLink: '#',
  deployedLink: '#',
};

export default Gallery;
