import React, { useState, useEffect } from "react";
import "../styles/submit_style.css";

import gradient from "../components/2026img/gradient-bg.png";
import gradient2 from "../components/2026img/submit-grad-mi.png";
import gradient3 from '../components/2026img/submit-grad-ff.png';
import image from "../components/2026img/submit-grad-ba.png";
import group3 from "../components/2026img/group-3.svg";

import slack from "../components/2026img/streamline-logos_slack-logo.svg";
import instagram from "../components/2026img/instagram-logo-2-solid.svg";
import email from "../components/2026img/fontisto_email.svg";
import calendar from "../components/2026img/quill_calendars.svg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Submit = () => {
    const handleButtonClick = (url) => {
        // console.log(`${boxName} button clicked`);
        window.open(url, '_blank');
        // Perform actions based on the boxName or specific logic for the button
    };
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth < 769);
      };
  
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
  
      return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const Award = ({ gradient, title, subtitle, amount }) => (
        <div className="card">
            <img className="card-gradient" src={gradient} alt="" />
            <h3>{title}</h3>
            <p className="award-subtitle">{subtitle}</p>
            <p className="award-amount">{amount}</p>
        </div>
        );
        
        const TimelineItem = ({ date, location, description }) => (
        <div className="card timeline-card">
            <h3>{date}</h3>
            <p className="location">{location}</p>
            <p className="timeline-description">{description}</p>
        </div>
        );
    return (
    <div className="submit">
        {/* background visuals */}
        <img className="bg-group" src={group3} alt="" />
        <img className="bg-gradient" src={gradient} alt="" />
        <NavBar />
        {/* awards */}       
        <section className="submit-section">
            <h2 className="section-title">Project Awards</h2>

            <div className={isSmallScreen ? "awards-stack" : "awards-row"}>
                <div className={isSmallScreen ? "card-column" : "card-row"}>
                <Award gradient={image} title="Board Award" subtitle="Decided by DFA Board" amount="$250" />
                <Award gradient={gradient2} title="Most Impactful" subtitle="General Student Vote" amount="$250" />
                <Award gradient={gradient3} title="Faculty Favorite" subtitle="Decided by faculty judges" amount="$250" />
                </div>

                {/* <div className="submit-button submit-spacing"> */}
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfoFSey-Qw9FLO94pDdfiV8q0ep1UMHhQ5xgxVllzyUVbiZlA/viewform?usp=header" target="_blank" className="submit-button submit-spacing">
                    <span className="submit-text">SUBMIT YOUR PROJECT</span>
                </a>
            </div>
        </section>


        {/* <h2 className="section-title">Timeline</h2> */}
        <section className="submit-section">
            <h2 className="section-title">Timeline</h2>

            <div className={isSmallScreen ? "timeline-column" : "timeline-row"}>
                <TimelineItem
                date="March 16, 2-3 PM"
                location="Tepper 3801"
                description="Impact CMU Info Session (Project Registration Due Friday 3/21, 11:59 PM)"
                />
                <TimelineItem
                date="March 23, 3-4 PM"
                location="Tepper 3801"
                description="Make-up Info Session"
                />
                <TimelineItem
                date="March 30, 1-3 PM"
                location="Tepper 3801"
                description="Impact Poster Workshop (Poster Submissions Due Sunday 3/30, 11:59 PM)"
                />
                <TimelineItem
                date="April 3, 11-4 PM"
                location="Cohon University Center (Danforth Lounge & Conference Room)"
                description="Impact CMU Date!"
                />
            </div>
        </section>


        {/* footer icons */}
        <Footer />
        <br></br>
    </div>
    );
};

export default Submit;
