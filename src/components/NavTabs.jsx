import { Link, useLocation } from 'react-router-dom';
import './NavTabs.css';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">

      </li>
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Gallery"
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Gallery
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Order"
          className={currentPage === '/Order' ? 'nav-link active' : 'nav-link'}
        >
          Order
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
