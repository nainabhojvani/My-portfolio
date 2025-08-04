import React from 'react';
import './Style.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import logo from './assets/logo.png'; 

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left: NB Logo + Socials */}
        <div className="footer-left">
          <a href="#"><img src={logo} alt="NB Logo" className="footer-logo" /></a>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/naina-bhojvani/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin className="footer-icon" />
            </a>
            <a href="https://github.com/nainabhojvani" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub className="footer-icon" />
            </a>
            <a href="https://leetcode.com/u/naina_8080/" target="_blank" rel="noopener noreferrer" title="LeetCode">
              <SiLeetcode className="footer-icon" />
            </a>
            <a href="https://www.geeksforgeeks.org/user/naina_8080/" target="_blank" rel="noopener noreferrer" title="GeeksforGeeks">
              <SiGeeksforgeeks className="footer-icon" />
            </a>
          </div>
        </div>

        {/* Center: Tagline */}
        <div className="footer-center">
          <p>Created by Naina Bhojvani</p>
          <p>© {year} All rights reserved.</p>
        </div>

        {/* Right: Email */}
        <div className="footer-right">
          <a href="mailto:youremail@example.com" className="footer-email">
            nainabhojvani80@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
