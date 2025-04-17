import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav from './components/NavTabs';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';
import SplashScreen from './components/SplashScreen';
import { useState, useEffect } from 'react';
import cakeLogo from "./assets/gn001creationslogo.jpg";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Display the splash screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <>
      <header>
        <div className="logo-container">
          <Link to="/">
            <img src={cakeLogo} alt="GN001 Cakes Logo" className="logo-image" />
          </Link>
        </div>
      </header>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2025 GN-001 Creations</p>
        <div className="footer-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPinterest} size="2x" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;