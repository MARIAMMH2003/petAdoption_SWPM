// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Cairo Paws
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home 
            </Link>
          </li>
         
          <li className="nav-item">
            <Link to="/register-shelter" className="nav-links">
              Register Shelter
            </Link>
          </li >
          <li className="nav-item">
          <Link to="/available-pets" className="nav-links">
      AvailablePets
          </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links">
            Log in
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;