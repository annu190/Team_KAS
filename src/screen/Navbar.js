import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Team AKS</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Member</Link></li>
        <li><Link to="/members">View Members</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
