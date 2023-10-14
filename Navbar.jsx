import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Media/AILogo.webp";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logoImage" id="logoImage2" />
      </div>
      <div className="navbar-right">
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <div className="toggle-bar"></div>
          <div className="toggle-bar"></div>
          <div className="toggle-bar"></div>
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li className="nav-link">
            <ScrollLink
              to="bot"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </ScrollLink>
          </li>
          <li className="nav-link">
            <ScrollLink
              to="feature"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Features
            </ScrollLink>
          </li>
          <li className="nav-link">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              About
            </ScrollLink>
          </li>
          <li className="nav-link">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
