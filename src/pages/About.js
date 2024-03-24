import React, { useState } from 'react';
import about from '../components/2024img/About.png';
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
            <div className="container-fluid">
                <div className=" text-center">
                    <div className="navbar-brand">
                        <img src={about} alt="title-img" class="title-img"/>
                    </div>
                </div>
                <div class="boxes">
                    <div class="inner-box">
                        <div className="box" onClick={() => toggleDropdown('who')}>
                            <h3>Who</h3>
                            <p className={`content1 ${openDropdown === 'who' ? 'open' : ''}`}>Impact CMU invites undergrad and graduate students at Carnegie Mellon to showcase how they have worked with a community. Student organizations and research, personal, and hackathon projects are all welcome to contribute their work!</p>
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
                </div>
            </div>
        </section>
    </>
    )
}

export default About;
