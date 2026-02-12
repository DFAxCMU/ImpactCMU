import React, { useState, useEffect } from "react";
import "../styles/fonts.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/style.css";
import Draggable from "react-draggable";

import dots from "../components/2026img/landing_page.svg";

const Hero = () => {
  const [windowDimensions, setWindowDimensions] = useState({ width: 1000, height: 800 });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const submitUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfoFSey-Qw9FLO94pDdfiV8q0ep1UMHhQ5xgxVllzyUVbiZlA/viewform?usp=header";

  return (
    <main className="landing2026">
      <img className="bg-group-hero" src={dots} alt="" />
      <NavBar />

      <div className="landing2026__stage">

        {/* -------- Desktop Version -------- */}
        {windowDimensions.width > 768 && (
          <>
            <Draggable bounds="parent" defaultPosition={{ x: 171, y: 61 }}>
              <div className="landing2026__card">
                <h3 className="landing2026__cardTitle">Come Join Us!</h3>
                <p className="landing2026__cardBody">
                  Info sessions on March 15th
                  <br />
                  2-3PM & March 22nd 12-1PM
                  <br />
                  @ Tepper 3808
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

            <div className="landing2026__wordmark">
              <a
                href={submitUrl}
                target="_blank"
                className="hero-submit-button hero-submit-spacing"
              >
                <span className="hero-submit-text">SUBMIT YOUR PROJECT</span>
              </a>
            </div>
          </>
        )}

        {/* -------- Mobile Version -------- */}
        {windowDimensions.width <= 768 && (
          <div className="hero-mobile-wrapper">
            {/* Submit button centered */}
            <div className="hero-mobile-submit-wrapper">
              <a
                href={submitUrl}
                target="_blank"
                className="hero-submit-button hero-submit-spacing"
              >
                <span className="hero-submit-text">SUBMIT YOUR PROJECT</span>
              </a>
            </div>

            {/* Two stacked mobile cards */}
            <div className="hero-mobile-cards">
              <div className="landing2026__card mobile-card">
                <h3 className="landing2026__cardTitle">Come Join Us!</h3>
                <p className="landing2026__cardBody">
                  Info sessions on March 15th 2-3PM & March 22nd 12-1PM @ Tepper 3808
                </p>
              </div>

              <div className="landing2026__card mobile-card">
                <h3 className="landing2026__cardTitle">10th Anniversary!</h3>
                <p className="landing2026__cardBody">
                  Free food and a chance to win prizes!
                </p>
              </div>
            </div>
          </div>
        )}

      </div>

      <Footer />
    </main>
  );
};

export default Hero;
