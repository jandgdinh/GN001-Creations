import { NavLink } from 'react-router-dom';
import './NavTabs.css';

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/Gallery"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Gallery
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/Contact"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/Order"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Order
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
