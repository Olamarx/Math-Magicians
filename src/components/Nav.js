import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <NavLink
            to="/"
            className={(Link) => (Link.isActive ? 'active' : 'none')}
          >
            Home
          </NavLink>
        </li>
        |
        <li>
          <NavLink
            to="/calculator"
            className={(Link) => (Link.isActive ? 'active' : 'none')}
          >
            Calculator
          </NavLink>
        </li>
        |
        <li>
          <NavLink
            to="/quotes"
            className={(Link) => (Link.isActive ? 'active' : 'none')}
          >
            Quotes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
