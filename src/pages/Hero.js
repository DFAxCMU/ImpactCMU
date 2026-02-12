import React from "react";
import { useState, useEffect, useRef} from "react";
import "../styles/fonts.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/style.css";
import Draggable from "react-draggable";

import dots from "../components/2026img/landing_page.svg";





const Hero = () => {
  const handleButtonClick = (url) => {
    // console.log(`${boxName} button clicked`);
    window.open(url, '_blank');
    // Perform actions based on the boxName or specific logic for the button
  };

  const [windowDimensions, setWindowDimensions] = useState({ width: 1000, height: 800 });
  const boxRef = useRef(null);

  useEffect(() => {
      function handleResize() {
          const { innerWidth: width, innerHeight: height } = window;
          setWindowDimensions({ width, height });
      };

      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
  }, []);


  const handleDrag = (e) => {
    const box = boxRef.current;
    const { clientX, clientY } = e;
    const { width, height } = windowDimensions;
  
    // Ensure the box stays within the screen dimensions
    const boxWidth = box.offsetWidth;
    const boxHeight = box.offsetHeight;
  
    let newLeft = clientX - boxWidth / 2;
    let newTop = clientY - boxHeight / 2;
  
    // Prevent the box from going beyond the left or top edges
    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;
  
    // Prevent the box from going beyond the right or bottom edges
    if (newLeft + boxWidth > width) newLeft = width - boxWidth;
    if (newTop + boxHeight > height) newTop = height - boxHeight;
  
    box.style.left = `${newLeft}px`;
    box.style.top = `${newTop}px`;
  };
  


    return (
      <>
      <main className="landing2026">
        <img className="bg-group-hero" src={dots} alt="" />
        <NavBar />

        <div className="landing2026__stage">

        {/* Cards */}
          <Draggable bounds="parent" defaultPosition={{ x: 190, y: 200 }}>
            <div className="landing2026__card">
              <h3 className="landing2026__cardTitle">Come Join Us!</h3>
              <p className="landing2026__cardBody">
                Info sessions on March 15th
                <br />
                2-3PM & March 22nd 12-1PM
                <br />@ Tepper 3808
              </p>
            </div>
          </Draggable>

          <Draggable bounds="parent" defaultPosition={{ x: 969, y: 163 }}>
            <div className="landing2026__card">
              <h3 className="landing2026__cardTitle">10th Anniversary!</h3>
                <p className="landing2026__cardBody">
                  Free food and a chance to win prizes!
                </p>
              </div>
          </Draggable>
      

        {/* Wordmark */}
          <div className="landing2026__wordmark">

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfoFSey-Qw9FLO94pDdfiV8q0ep1UMHhQ5xgxVllzyUVbiZlA/viewform?usp=header" target="_blank" className="hero-submit-button hero-submit-spacing">
                <span className="hero-submit-text">SUBMIT YOUR PROJECT</span>
            </a>
          </div>
        </div>

        {/* Social icons (bottom-left) */}
          <Footer />
      </main>
      </>
    );
  };

export default Hero;
