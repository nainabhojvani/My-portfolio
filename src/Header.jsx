import React, { useState } from "react";
import "./Style.css";
import logo from "./assets/logo.png";

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close menu after click
  };

  return (
    <header className="header">
      <nav className="nav-links">
        {/* Logo & Name */}
        <div className="flex flex-row justify-between items-center">
          <a href="#" className="flex items-center text-xl">
            <img src={logo} alt="NB Logo" className="header-logo" />
            Naina Bhojvani
          </a>
        

        {/* Hamburger Icon */}
        <div className="sm:hidden">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
    </div>
        {/* Navigation Links */}
        <div
          className={`${isMenuOpen ? "flex" : "hidden"
            } sm:flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-0`}
        >
          <button
            onClick={() => scrollToSection("home")}
            className={activeSection === "home" ? "active" : ""}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className={activeSection === "skills" ? "active" : ""}
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className={activeSection === "experience" ? "active" : ""}
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={activeSection === "projects" ? "active" : ""}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
