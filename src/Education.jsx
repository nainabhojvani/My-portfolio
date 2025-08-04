import React, { useState } from 'react';
import './Style.css'; // Tailwind-styled CSS here

const Education = () => {
  const [activeTab, setActiveTab] = useState('btech');

  const educationData = {
    btech: {
      title: 'Indus Institute of Technology and Engineering',
      duration: 'Sep 2022 – Jun 2026',
      degree: 'Bachelor of Technology in Computer Engineering',
      result: 'CGPA: 9.8 / 10',
    },
    grade12: {
      title: 'Vivekanand Vidhyalaya School',
      duration: 'Jun 2020 – Mar 2022',
      degree: 'HSC – GSEB',
      result: 'Result: 95 PR',
    },
    grade10: {
      title: 'Prakash High School',
      duration: 'Jun 2019 – Mar 2020',
      degree: 'SSC – GSEB',
      result: 'Result: 98 PR',
    }
  };
  

  return (
    <section className="education-section">
      <h2 className="education-heading">🎓 Education</h2>

      <div className="education-container">
        {/* Left: Vertical Buttons */}
        <div className="education-buttons">
          <button
            className={`education-tab ${activeTab === 'btech' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('btech')}
          >
            B.Tech
          </button>
          <button
            className={`education-tab ${activeTab === 'grade12' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('grade12')}
          >
            12th Grade
          </button>
          <button
            className={`education-tab ${activeTab === 'grade10' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('grade10')}
          >
            10th Grade
          </button>
        </div>

        {/* Right: Info Box */}
        <div className="education-info">
          <h3 className="education-title">{educationData[activeTab].title}</h3>
          <p className="education-duration">{educationData[activeTab].duration}</p>
          <p className="education-degree">{educationData[activeTab].degree}</p>
          <p className="education-result">{educationData[activeTab].result}</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
