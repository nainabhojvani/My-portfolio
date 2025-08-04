// Header.jsx
import React from "react";
import "./Style.css";
import logo from './assets/logo.png'; 

const Header = ({ activeSection }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <nav className="nav-links">
        <a href="#" className="flex items-center text-xl "><img src={logo} alt="NB Logo" className="header-logo" />Naina Bhojvani</a>
        <div>
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
