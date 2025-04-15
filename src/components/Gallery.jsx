import React from 'react';
import PropTypes from 'prop-types';
import './Gallery.css';

function Gallery({ title, image, description }) {
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
      </div>
    </div>
  );
}

Gallery.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string
};

Gallery.defaultProps = {
  title: 'Untitled',
  image: 'https://via.placeholder.com/600x400?text=No+Image',
  description: 'No description available.'
};

export default Gallery;
