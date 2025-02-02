import React, { useState } from 'react';
import about from '../components/2024img/About.png';
import yellowcircle from '../components/2025img/yellowcircle.svg';
import redcircle from '../components/2025img/redcircle.svg';
import NavBar from "../components/NavBar";

import 'popper.js'
import '../dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/page.css';
import '../styles/fonts.css';

const About = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdownId) => {
        if (openDropdown === dropdownId) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(dropdownId);
        }
        console.log(openDropdown);
    };
    
    return ( 
    <>
        <NavBar/>
        <section id="about">
            <div className="container-about">
                <div className="yellowcircle-section">
                    <img src={yellowcircle} alt="title-img" class="yellowcircle"/>  
                    <div className="yellowcircle-text">
                        <h3 classname="aboutHDR">WHO WE ARE</h3>  
                        <p>Impact CMU invites undergrad and graduate students at Carnegie Mellon
                            to showcase how they have worked with a community. Student organizations and research, 
                            personal, and hackathon projects are all welcome to contribute their work!</p>
                    </div>
                </div>
                <div className="redcircle-section">
                    <img src={redcircle} alt="title-img" class="redcircle"/>  
                    <div className="redcircle-text"> 
                        <h3 classname="aboutHDR">WHAT IS IMPACT?</h3>  
                        <p>You will be showcasing your work through a poster and optional demos. 
                            Attendees will view different teams, talk to you about your work, and vote to win prizes!
                            Faculty judges will also take part in viewing work and discussing your creations! This is a
                            great opportunity to talk to your peers, get feedback from your professors, and for student 
                            organizations to promote to a large audience.</p> 
                        <h3 classname="aboutHDR">WHERE IS IT?</h3> 
                        <p>March 3rd @ LOCATION, TIME</p> 
                        </div>
                </div>
                {/* <div className=" text-center">
                    <div className="navbar-brand">
                        <img src={about} alt="title-img" class="title-img"/>
                    </div>
                </div>
                <div class="boxes">
                    <div class="inner-box">
                        <div className="box" onClick={() => toggleDropdown('who')}>
                            <h3>Who</h3>
                            <p className={`content1 ${openDropdown === 'who' ? 'open' : ''}`}>HI CMU invites undergrad and graduate students at Carnegie Mellon to showcase how they have worked with a community. Student organizations and research, personal, and hackathon projects are all welcome to contribute their work!</p>
                        </div>
                        <div class="box" onClick={() => toggleDropdown('what')}> 
                            <h3>What</h3>
                            <p className={`content1 ${openDropdown === 'what' ? 'open' : ''}`}>Teams will be showcasing their work through a poster and optional demos. As an attendee, you have the opportunity to explore different projects, engage in discussions with the creators, and even participate in voting for your favorite creations to win prizes! Faculty judges will also be present, adding an extra layer of evaluation and feedback to the event. This is a fantastic chance to mingle with your peers, learn about innovative projects, receive valuable feedback from professors, and discover opportunities offered by student organizations. Don't miss out on this dynamic event where creativity and innovation collide!</p>
                        </div>
                        <div class="box" onClick={() => toggleDropdown('where')}>
                            <h3>Where</h3>
                            <p className={`content1 ${openDropdown === 'where' ? 'open' : ''}`}>April 11 @ Cohon University Center, 12-4PM</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    </>
    )
}

export default About;
