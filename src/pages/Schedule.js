import React from 'react';
import NavBar from "../components/NavBar";
import lamp from '../components/2026img/cat-lamp.png';
import plush from '../components/2026img/cat-plush.png';
import mug from '../components/2026img/cat-mug.png';

import 'popper.js'
import '../dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/page.css';
import '../styles/fonts.css';
import gradient from '../components/2026img/gradient-bg.png';
import group3 from '../components/2026img/group-3.svg';


const Hero = () => (
    <>
        <img className="bg-group" src={group3} alt="" />
        <img className="bg-gradient" src={gradient} alt="" />
        <NavBar />
        <section id="schedule">
            <div className="container-fluid">
                <div className="text-center omega">
                    <h4>Event Schedule</h4>
                    <h5>April 3rd @ the UC (Danforth Lounge), 11-4 PM</h5>
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
                                <h6>Lunch</h6>
                                <h5 class = "time">11AM - 12PM</h5>
                                <p class="bottom-align">Enjoy free food and connect with other presenting teams.</p>
                            </div>
                            <div className="box3">
                                <h6>Kickoff Ceremony</h6>
                                <h5 class = "time">12 - 12:30PM</h5>
                                <p>Get introduced to our projects and faculty judges. Project voting starts.</p>
                            </div>
                        {/* </div> */}
                        {/* <div class="row2"> */}
                            <div className="box3">
                                <h6>Open House + Voting</h6>
                                <h5 class = "time">12:30 - 3:30PM</h5>
                                <p>Vote for your favorite project and enter into our raffles to earn special prizes!</p>
                            </div>
                            <div className="box3">
                                <h6>Closing Ceremony</h6>
                                <h5 class = "time">3:45 - 4PM</h5>
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
                            <div class="cat">
                                <div class="catlist">
                                    <p>1. Cat Lamp</p>
                                    <p>2. Cat Plush</p>
                                    <p>3. Cat Mug</p>
                                </div>
                                <div class="catimg">
                                    <img src={lamp} alt="title-img" class="cutie" style={{width: "150px"}}/>  
                                    <img src={plush} alt="title-img" class="cutie" style={{width: "150px"}}/> 
                                    <img src={mug} alt="title-img" class="cutie" style={{width: "150px"}}/> 
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
