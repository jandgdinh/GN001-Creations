import React from 'react';
import '../App.css';
import '../components/Card.css'; // Assuming you have a CSS file for styling

function Card({ title, image, content }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
}

export default Card;
