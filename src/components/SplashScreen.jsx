import React from 'react';
import logo from '../assets/gn001creationslogo.jpg'; // Adjust the path to your logo image
import './SplashScreen.css'; 

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src={logo} alt="Logo" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;