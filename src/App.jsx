import React from 'react';
import './index.css'; // Import your CSS file (optional)

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
       <div>
       <a href="/" src="" className="navbar-logo">
       <img src='https://logopond.com/avatar/257420/logopond.png'></img></a> {/* Your logo/brand */}
       </div>
       <div>
       <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="/services" className="navbar-link">Services</a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">Contact</a>
          </li>
        </ul>
       </div>
      </div>
    </nav>
  );
};

export default Navbar;