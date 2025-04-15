import React from 'react';
import PropTypes from 'prop-types';
import './Gallery.css';

function Gallery({ title = 'Untitled', image = 'https://via.placeholder.com/600x400?text=No+Image', description = 'No description available.', size = 'No size available', cakeprofile = 'No cake profile available.' }) {
  return (
    <div className="gallery-card">
      <img
        src={image}
        alt={title}
        className="gallery-image"
      />
      <div className="gallery-content">
        <h3 className="gallery-title">{title}</h3>
        <p className="gallery-description">{description}</p>
        <p className="gallery-size">{size}</p>
        <p className="gallery-cakeprofile">{cakeprofile}</p>
      </div>
    </div>
  );
}

Gallery.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  size: PropTypes.string,
  cakeprofile: PropTypes.string,
};

export default Gallery;