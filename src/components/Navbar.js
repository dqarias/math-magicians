import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar-container">
    <h2 className="navbar-logo">Math-Magician</h2>
    <ul className="navbar">
      <li className="navbar-list">
        <NavLink className="navbar-link" to="/">Home</NavLink>
      </li>
      <li className="navbar-list">
        <NavLink className="navbar-link" to="/calculator">Calculator</NavLink>
      </li>
      <li className="navbar-list">
        <NavLink className="navbar-link" to="/quote">Quote</NavLink>
      </li>
    </ul>
  </div>

);

export default Navbar;
