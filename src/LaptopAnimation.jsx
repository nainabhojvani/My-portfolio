import React from 'react';
import './Style.css'; // Separate CSS for custom 3D + animation styles

const LaptopAnimation = () => {
  return (
    <div className="laptop-wrapper">
      <div className="laptop">
        <div className="screen">
          <div className="terminal">
            <span className="text">Welcome to my world</span>
          </div>
        </div>
        <div className="keyboard">
            <div className="keys"></div>
        </div>
      </div>
    </div>
  );
};



export default LaptopAnimation;