import React from 'react';
import '../styles/about.css';

const AboutCard = ({ title, text, children, imageSrc, imageMask }) => {
  return (
    <div className="about-card">
      {imageSrc && (
        <div className="about-card-image-container">
          {imageMask ? (
            <div className="about-card-gradient-wrapper">
              <div 
                className="about-card-gradient"
                style={{ 
                  maskImage: `url('${imageMask}')`,
                  backgroundImage: `url('${imageSrc}')`
                }}
              />
            </div>
          ) : (
            <img className="about-card-image" src={imageSrc} alt="" />
          )}
        </div>
      )}
      {title && <h3 className="about-card-title">{title}</h3>}
      <div className="about-card-text">
        {children ? children : text}
      </div>
    </div>
  );
};

export default AboutCard;
