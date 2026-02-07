// src/pages/Landing2026.js
import React from "react";
import "../styles/fonts.css";
// import "../styles/landing2026.css";
import NavBar from "../components/NavBar";
import "../styles/style.css";

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
    <main className="landing2026">
      {/* Background layers */}
      <div className="landing2026__bgWash" />
      <div className="landing2026__bgDots" />
      <NavBar />

      <section className="landing2026__stage">
        {/* Top UI */}
        {/* <div className="landing2026__topUI"> */}
          {/* <div className="landing2026__navWrap">
            <button className="landing2026__homeBtn" aria-label="Home">
              <div className="landing2026__homeIcon" />
            </button> */}

            {/* <nav className="landing2026__pillNav" aria-label="Primary">
              <a href="/about">ABOUT</a>
              <a href="/submit">SUBMIT</a>
              <a href="/schedule">SCHEDULE</a>
              <a href="/projects">PROJECTS</a>
              <a href="/archive/2025">2025 ARCHIVE</a>
            </nav> */}
            {/* <NavBar /> */}
          {/* </div> */}
        {/* </div> */}

        {/* Blobs */}
        <img className="landing2026__blob landing2026__blob--tl" src={blobTL} alt="" />
        <img className="landing2026__blob landing2026__blob--tr" src={blobTR} alt="" />
        <img className="landing2026__blob landing2026__blob--bl" src={blobBL} alt="" />
        <img className="landing2026__blob landing2026__blob--br" src={blobBR} alt="" />

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
          <h1 className="landing2026__title">IMPACT 2026</h1>
          <div className="landing2026__subtitle">
            building a better future with CMU student-led showcase
            <br />
            for social impact projects by Design for America.
          </div>

          <a className="landing2026__cta" href="/submit">
            SUBMIT YOUR PROJECT
          </a>
        </div>

        {/* Social icons (bottom-left) */}
        <div className="landing2026__social" aria-label="Social links">
          <a href="https://instagram.com" aria-label="Instagram">
            <img src={insta} alt="" />
          </a>
          <a href="/calendar" aria-label="Calendar">
            <img src={cal} alt="" />
          </a>
          <a href="mailto:impact@cmu.edu" aria-label="Email">
            <img src={mail} alt="" />
          </a>
          <a href="https://slack.com" aria-label="Slack">
            <img src={slack} alt="" />
          </a>
        </div>
      </section>
    </main>
  );
}
