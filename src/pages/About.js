import React, { useState, useEffect } from 'react';
import yellowcircle from '../components/2025img/yellowcircle.svg';
import redcircle from '../components/2025img/redcircle.svg';
import NavBar from "../components/NavBar";

import 'popper.js';
import '../dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/page.css';
import '../styles/fonts.css';

const About = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 769);
        };

        // check the screen size on component mount
        checkScreenSize();

        // event listener for window resize
        window.addEventListener('resize', checkScreenSize);

        // unnecessary cleanup :P
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <>
            <NavBar />
            {isSmallScreen ? (
                <div className="container-about">
                    <div className="yellowcircle-section">
                        <img src={yellowcircle} alt="title-img" className="yellowcircle" />
                        <div className="yellowcircle-text">
                            <h3 className="aboutHDR">WHO WE ARE</h3>
                            <p>
                                Impact CMU invites undergrad and graduate students at Carnegie Mellon
                                to showcase how they have worked with a community. Student organizations and
                                research, personal, and hackathon projects are all welcome to contribute their work!
                            </p>
                        </div>
                    </div>
                    <div className="redcircle-section">
                        <img src={redcircle} alt="title-img" className="redcircle" />
                        <div className="redcircle-text">
                            <h3 className="aboutHDR">WHAT IS IMPACT?</h3>
                            <p>
                                You will be showcasing your work through a poster and optional demos. Attendees will
                                view different teams, talk to you about your work, and vote to win prizes! Faculty judges
                                will also take part in viewing work and discussing your creations! This is a great
                                opportunity to talk to your peers, get feedback from your professors, and for student
                                organizations to promote to a large audience.
                            </p>
                            <h3 className="aboutHDR">WHERE IS IT?</h3>
                            <p>March 3rd @ LOCATION, TIME</p>
                        </div>
                    </div>
                </div>
            ) : (
                <section id="about">
                    <div className="container-about">
                        {/* <div className="yellowcircle-section"> */}
                            <div><img src={yellowcircle} alt="title-img" className="yellowcircle" /></div>
                            <div><img src={redcircle} alt="title-img" className="redcircle" /></div>
                            <div>
                                <h3 className="aboutHDR">WHO WE ARE</h3>
                                <p>
                                    Impact CMU invites undergrad and graduate students at Carnegie Mellon to showcase how
                                    they have worked with a community. Student organizations and research, personal, and
                                    hackathon projects are all welcome to contribute their work!
                                </p>
                            </div>
                            <div>
                                <h3 className="aboutHDR">WHAT IS IMPACT?</h3>
                                <p>
                                    You will be showcasing your work through a poster and optional demos. Attendees will
                                    view different teams, talk to you about your work, and vote to win prizes! Faculty
                                    judges will also take part in viewing work and discussing your creations! This is a
                                    great opportunity to talk to your peers, get feedback from your professors, and for
                                    student organizations to promote to a large audience.
                                </p>
                                <h3 className="aboutHDR">WHERE IS IT?</h3>
                                <p>March 3rd @ LOCATION, TIME</p>
                            {/* </div> */}
                        {/* </div> */}
                        {/* <div className="redcircle-section"> */}
                            {/* <img src={redcircle} alt="title-img" className="redcircle" /> */}
                            {/* <div className="redcircle-text">
                                <h3 className="aboutHDR">WHAT IS IMPACT?</h3>
                                <p>
                                    You will be showcasing your work through a poster and optional demos. Attendees will
                                    view different teams, talk to you about your work, and vote to win prizes! Faculty
                                    judges will also take part in viewing work and discussing your creations! This is a
                                    great opportunity to talk to your peers, get feedback from your professors, and for
                                    student organizations to promote to a large audience.
                                </p>
                                <h3 className="aboutHDR">WHERE IS IT?</h3>
                                <p>March 3rd @ LOCATION, TIME</p>
                            </div> */}
                        </div>
                    </div>
                </section>
                // <section id="about">
                //     <div className="container-about">
                //         <div className="yellowcircle-section">
                //             <img src={yellowcircle} alt="title-img" className="yellowcircle" />
                //             <div className="yellowcircle-text">
                //                 <h3 className="aboutHDR">WHO WE ARE</h3>
                //                 <p>
                //                     Impact CMU invites undergrad and graduate students at Carnegie Mellon to showcase how
                //                     they have worked with a community. Student organizations and research, personal, and
                //                     hackathon projects are all welcome to contribute their work!
                //                 </p>
                //             </div>
                //         </div>
                //         <div className="redcircle-section">
                //             <img src={redcircle} alt="title-img" className="redcircle" />
                //             <div className="redcircle-text">
                //                 <h3 className="aboutHDR">WHAT IS IMPACT?</h3>
                //                 <p>
                //                     You will be showcasing your work through a poster and optional demos. Attendees will
                //                     view different teams, talk to you about your work, and vote to win prizes! Faculty
                //                     judges will also take part in viewing work and discussing your creations! This is a
                //                     great opportunity to talk to your peers, get feedback from your professors, and for
                //                     student organizations to promote to a large audience.
                //                 </p>
                //                 <h3 className="aboutHDR">WHERE IS IT?</h3>
                //                 <p>March 3rd @ LOCATION, TIME</p>
                //             </div>
                //         </div>
                //     </div>
                // </section>
            )}
        </>
    );
};

export default About;
