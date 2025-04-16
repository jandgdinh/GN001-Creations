import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ image, onClose }) => {
  const [zoom, setZoom] = useState(1); // Default zoom level

  if (!image) return null;

  const handleZoomIn = () => setZoom((prevZoom) => Math.min(prevZoom + 0.2, 3)); // Max zoom: 3x
  const handleZoomOut = () => setZoom((prevZoom) => Math.max(prevZoom - 0.2, 1)); // Min zoom: 1x
  const resetZoom = () => setZoom(1); // Reset to default zoom

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={image}
          alt="Enlarged"
          className="modal-image"
          style={{ transform: `scale(${zoom})` }} // Apply zoom level
        />
        <div className="modal-controls">
          <button onClick={handleZoomIn}>Zoom In</button>
          <button onClick={handleZoomOut}>Zoom Out</button>
          <button onClick={resetZoom}>Reset</button>
        </div>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;