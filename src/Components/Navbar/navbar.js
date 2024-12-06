import React from "react";
import "./navbar.css";
import { FaSearch } from "react-icons/fa"; // Importing the search icon
import { Link } from "react-router-dom"; // For navigation links

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/Logo.png" alt="Logo" />
      </div>
      <div className="navbar-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="search-icon">
          <FaSearch />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
