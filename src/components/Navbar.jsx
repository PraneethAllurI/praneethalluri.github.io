import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGrav } from "react-icons/fa";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false); // State to manage toggle

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container d-flex justify-content-between">
        {/* Brand Name */}
        <Link
          className="navbar-brand"
          to="/"
          onClick={() => setExpanded(false)}
        >
          <FaGrav style={{ fontSize: "2rem" }} />
        </Link>

        {/* Navbar Toggler (for mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            expanded ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => setExpanded(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                onClick={() => setExpanded(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/workexperience"
                onClick={() => setExpanded(false)}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/projects"
                onClick={() => setExpanded(false)}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                onClick={() => setExpanded(false)}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/spotify"
                onClick={() => setExpanded(false)}
              >
                Spotify
              </Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
