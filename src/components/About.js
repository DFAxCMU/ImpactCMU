import React from 'react';
import about from './2024img/About.png';

const About = () => ( 
    <section id="about" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="container-fluid">
            <div className=" text-center">
                <a className="navbar-brand" href="/home">
                    <img src={about} alt="title-img" class="title-img"/>
                </a>
            </div>
            <div class="boxes">
                <div class="inner-box">
                    <div class="box">
                        <h3>Who</h3>
                        <p>Impact CMU invites undergrad and graduate students at Carnegie Mellon to showcase how they have worked with a community. Student organizations and research, personal, and hackathon projects are all welcome to contribute their work!</p>
                    </div>
                    <div class="box">
                        <h3>What</h3>
                        <p>You will be showcasing your work through a poster and optional demos. Attendees will view different teams, talk to you about your work, and vote to win prizes! Faculty judges will also take part in viewing work and discussing your creations! This is a great opportunity to talk to your peers, get feedback from your professors, and for student organizations to promote to a large audience.</p>
                    </div>
                    <div class="box">
                        <h3>Where</h3>
                        <p>April 13 @ Cohon University Center, 12-5PM</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default About;
