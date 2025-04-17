import React from "react";
import "./HomeModal.css"; // Create a separate CSS file for this modal

const HomeModal = ({ image, onClose, onNext, onPrev, children }) => {
  if (!image) return null;

  return (
    <div className="home-modal-overlay" onClick={onClose}>
      <div className="home-modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Modal Content" className="home-modal-image" />
        <div className="home-modal-children">{children}</div>
        <button className="home-modal-close" onClick={onClose}>
          &times;
        </button>
        <button className="home-modal-prev" onClick={onPrev}>
          &#8592; Previous
        </button>
        <button className="home-modal-next" onClick={onNext}>
          Next &#8594;
        </button>
      </div>
    </div>
  );
};

export default HomeModal;
