import React, { useState, useEffect } from 'react';
import who_are_we from '../components/2026img/who-are-we.svg';
import what_is_impact from '../components/2026img/what-is-impact.svg';
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";
import Footer from "../components/Footer";
import AboutCard from "../components/AboutCard";
import gradient from "../components/2026img/gradient-bg.png";
import group3 from "../components/2026img/group-3.svg";


import 'popper.js';
import '../dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/page.css';
import '../styles/fonts.css';
import '../styles/about-card.css';
import "../styles/about-mobile.css";

const About = () => {
    const [windowDimensions, setWindowDimensions] = useState({ width: 1000, height: 800 });
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        function handleResize() {
            setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
            setIsSmallScreen(window.innerWidth < 769);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        // <>
        <div className="about-outer-cont">
            {/* <img src={aboutBg} alt="background" className="background"/> */}
            {/* <img className="bg-group-about" src={group3} alt="" />
            <img className="bg-gradient-about" src={gradient} alt="" /> */}
            <NavBar />
            {/* {isSmallScreen ? <NavBarMobile /> : <NavBar />} */}
                <div className="about-page">
                    <section id="about">
                            <div className="container-about">
                                {/* <div className="who_are_we-section"> */}
                                <AboutCard
                                    title="Who Are We?"
                                    text="Impact CMU invites undergrad and graduate students at Carnegie Mellon to showcase how they have worked with a community. Student organizations and research, personal, and hackathon projects are all welcome to contribute their work!"
                                    imageSrc={who_are_we} />
                                <AboutCard
                                    title="What is Impact?"
                                    text="You will be showcasing your work through a poster and optional demos. Attendees will view different teams, talk to you about your work, and vote to win prizes! Faculty judges will also take part in viewing work and discussing your creations! This is a great opportunity to talk to your peers, get feedback from your professors, and for student organizations to promote to a large audience!"
                                    imageSrc={what_is_impact} />
                                <div className="logistics-section">
                                    <AboutCard
                                        title="Where is it?"
                                        text="April 3rd @ Danforth Lounge & Conference Room, 11-4 PM" />
                                    <AboutCard>
                                        <>
                                            <strong>Logistics:</strong> Chloe Xu, Sara Laman, Inseo Kim, Eunice Lee, Rebecca Sucgang<br />
                                            <strong>Communications:</strong> Beverly Zheng, Bach Ha Lan Vu, Tiffany Liu, Katie Wen<br />
                                            <strong>Design:</strong> Kyla Anderson, Bach Ha Lan Vu, Beverly Zheng, Katie Wen<br />
                                            <strong>PR:</strong> Sulli Yatabe<br />
                                            <strong>Tech:</strong> Karen Gonzalez, Saanvi Kandala, Inseo Kim, Helen Zhang, Eunice Lee<br />
                                            <strong>Finance:</strong> Amanda Witt<br />
                                            <strong>Management:</strong> Anna Mathews, Sophie Hao, Gryphon Chong
                                        </>
                                    </AboutCard>
                                </div>
                            </div>
                        </section>
                        {windowDimensions.width > 768 && <Footer />}
                </div>
        </div>
    );
};

export default About;

