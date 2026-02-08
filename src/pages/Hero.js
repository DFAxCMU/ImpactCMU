// src/pages/Landing2026.js
import React from "react";
import "../styles/fonts.css";
// import "../styles/landing2026.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/style.css";
// import "../styles/submit_style.css";

import dots from "../components/2026img/landing.svg";
import blobTL from "../components/2026img/blob-top-left.svg";
import blobTR from "../components/2026img/blob-top-right.svg";
import blobBL from "../components/2026img/blob-bottom-left.svg";
import blobBR from "../components/2026img/blob-bottom-right.svg";


import insta from "../components/2024img/insta.svg";
import cal from "../components/2024img/cal.svg";
import mail from "../components/2024img/mail.svg";
import slack from "../components/2024img/slack.svg";

export default function Landing2026() {
  return (
    <main>
      {/* Background layers */}
      <img className="bg-group-hero" src={dots} alt="" />
      <NavBar />

      <section>

        {/* Blobs */}
        {/* <img className="landing2026__blob landing2026__blob--tl" src={blobTL} alt="" />
        <img className="landing2026__blob landing2026__blob--tr" src={blobTR} alt="" />
        <img className="landing2026__blob landing2026__blob--bl" src={blobBL} alt="" />
        <img className="landing2026__blob landing2026__blob--br" src={blobBR} alt="" /> */}

        {/* Cards */}
        <div className="landing2026__card landing2026__card--left">
          <h3 className="landing2026__cardTitle">Come Join Us!</h3>
          <p className="landing2026__cardBody">
            Info sessions on March 15th
            <br />
            2-3PM &amp; March 22nd 12-1PM
            <br />@ Tepper 3808
          </p>
        </div>

        <div className="landing2026__card landing2026__card--right">
          <h3 className="landing2026__cardTitle">Free Food!</h3>
          <p className="landing2026__cardBody">
            And enter our raffle for the
            <br />
            chance to win prizes!
          </p>
        </div>

        {/* Wordmark */}
        <div className="landing2026__wordmark">
          {/* <h1 className="landing2026__title">IMPACT 2026</h1> */}
          {/* <div className="landing2026__subtitle">
            building a better future with CMU student-led showcase
            <br />
            for social impact projects by Design for America.
          </div> */}

          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfoFSey-Qw9FLO94pDdfiV8q0ep1UMHhQ5xgxVllzyUVbiZlA/viewform?usp=header" target="_blank" className="hero-submit-button hero-submit-spacing">
              <span className="hero-submit-text">SUBMIT YOUR PROJECT</span>
          </a>
        </div>
        {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSfoFSey-Qw9FLO94pDdfiV8q0ep1UMHhQ5xgxVllzyUVbiZlA/viewform?usp=header" target="_blank" className="hero-submit-button hero-submit-spacing">
          <span className="hero-submit-text">SUBMIT YOUR PROJECT</span>
        </a> */}

        {/* Social icons (bottom-left) */}
        <div>
          <Footer />
        </div>
      </section>
    </main>
  );
}
