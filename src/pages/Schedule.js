import React from 'react';
import schedule from '../components/2024img/Schedule.png';
import submitline from '../components/2025img/submitline.svg';
import NavBar from "../components/NavBar";
import scarf from '../components/2025img/scarf.svg';
import light from '../components/2025img/light.svg';
import plushie from '../components/2025img/plushie.svg';

import 'popper.js'
import '../dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/page.css';
import '../styles/fonts.css';

const Hero = () => (
    <>
        <NavBar />
        <section id="schedule">
            <div className="container-fluid">
                <div className="text-center omega">
                    <h4>EVENT SCHEDULE</h4>
                    <h5>April 3rd @ the UC, 12-4 PM</h5>
                    {/* <div className="navbar-brand">
                        <img src={schedule} alt="title-img" class="title-img"/>
                    </div> */}
                </div>
                <div class="OMG">
                    {/* <center><h4 className="date-title">April 11 @ Cohon University Center</h4></center> */}
                    <div className="boxes1" style={{ display: 'flex'}}> 
                        {/* <div class="row1"> */}
                        <div className="timeline-container">
                            <div className="box3">
                                <h6>Kickoff Ceremony</h6>
                                <h5 class = "time">TBD</h5>
                                <p>Get introduced to our projects and faculty judges. Project voting starts.</p>
                            </div>
                            <div className="box3">
                                <h6>Project Showcase</h6>
                                <h5 class = "time">TBD</h5>
                                <p>Enjoy free food as you view impactful projects from our participants and learn more about their work.</p>
                            </div>
                        {/* </div> */}
                        {/* <div class="row2"> */}
                            <div className="box3">
                                <h6>Voting Closes</h6>
                                <h5 class = "time">TBD</h5>
                                <p>Vote for your favorite project and enter into our raffles to earn special prizes!</p>
                            </div>
                            <div className="box3">
                                <h6>Closing Ceremony</h6>
                                <h5 class = "time">TBD</h5>
                                <p>Find out who the project and raffle winners are.</p>
                            </div>
                            {/* <center>
                                <img src={submitline} alt="title-img" class="submitline"/>  
                            </center> */}
                        </div>
                        {/* </div> */}
                        
                    </div>
                    <center>
                        <div className="box4">
                            <h4>RAFFLE PRIZES</h4>
                            <div class="bear">
                                <div class="bearlist">
                                    <p>1. Bear Scarf</p>
                                    <p>2. Bear Light</p>
                                    <p>3. Giant Bear Plushie</p>
                                </div>
                                <div class="bearimg">
                                    <img src={scarf} alt="title-img" class="cutie"/>  
                                    <img src={light} alt="title-img" class="cutie"/> 
                                    <img src={plushie} alt="title-img" class="cutie"/> 
                                </div>
                            </div>
                        </div>
                    </center>
                    {/* <center><h4 className="proj-awards-title">Raffle Prizes</h4></center>
                        <div class = "award-boxes"> */}
                            {/* <div class="inner d-flex flex-row justify-content-between w-100 container-fluid"> */}
                                {/* <div class="boxKMS">
                                    <h2 class = "box-title1">🦆💡</h2>
                                    <p>Duck Light</p>
                                </div>
                                <div class="boxKMS">
                                    <h2 class = "box-title1">🦆🍌</h2>
                                    <p>Banana Duck Plushie</p>
                                </div>
                                <div class="boxKMS">
                                    <h2 class = "box-title1">🪿🔑</h2>
                                    <p>Goose Key Holder</p>
                                </div> */}
                            {/* </div> */}
                        {/* </div> */}
                </div>
                
            </div>
        </section>
    </>
)

export default Hero;
