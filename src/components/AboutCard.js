import React from 'react';
import '../styles/about-card.css';

const imgGradient1 = "src/components/2026img/what-is-impact.svg";
const imgGradient = "src/components/2026img/who-are-we.svg";

const AboutCard = ({ title, text, children }) => {
  return (
    <div className="about-card">
      <div className="about-card-image-container">
        <div className="about-card-gradient-wrapper">
          <div 
            className="about-card-gradient"
            style={{ 
              maskImage: `url('${imgGradient}')`,
              backgroundImage: `url('${imgGradient1}')`
            }}
          />
        </div>
      </div>
      {title && <h3 className="about-card-title">{title}</h3>}
      <div className="about-card-text">
        {children ? children : text}
      </div>
    </div>
  );
};

export default AboutCard;
