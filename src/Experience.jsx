import React from 'react';
import './Style.css';

const Experience = () => {
  return (
    <section id='experience' className="exp-section ">
      <h2 className="exp-heading">EXPERIENCE</h2>

      <div className="exp-timeline-wrapper">
        <div className="exp-marker" />

        <div className="exp-card">
          <p className="exp-date">June 2024</p>
          <h3 className="exp-role">Node.js Intern</h3>
          <p className="exp-company">TUVOC, Thaltej, Ahmedabad</p>
          <p className="exp-description">
            Built RESTful APIs using Express.js and MongoDB. Implemented authentication using JWT and contributed to backend logic and internal tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
